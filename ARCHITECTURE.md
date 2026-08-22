# Interview Readiness Engine — Technical Architecture Plan

## 1. Scope and product boundary

The MVP answers a concrete, company-and-role-specific question: how ready a candidate is today, why, and what to prepare next. It uses four evidence streams:

1. candidate-supplied profile information;
2. assessment attempts and behavioral evaluations;
3. curated company/role interview intelligence; and
4. a target role selected by the candidate.

The first implementation should support curated data and clearly identified demo seeds. Public-profile analysis is optional and additive: inaccessible data stays unavailable and must not be inferred.

## 2. Proposed repository structure

```text
interview-readiness-engine/
├── AGENTS.md
├── ARCHITECTURE.md
├── README.md
├── .gitignore
├── frontend/
│   ├── src/
│   │   ├── app/                 # App Router routes, layouts, route-level loading/error UI
│   │   ├── features/            # Domain UI: auth, profile, targets, assessments, readiness, plans
│   │   ├── components/
│   │   │   └── ui/              # shadcn primitives and composed reusable components
│   │   ├── lib/                 # API client, formatters, feature-neutral helpers
│   │   ├── hooks/
│   │   ├── types/
│   │   └── styles/
│   ├── public/
│   ├── tests/
│   └── package.json
├── backend/
│   ├── prisma/
│   │   ├── schema.prisma        # Added during database implementation
│   │   ├── migrations/
│   │   └── seed/
│   ├── src/
│   │   ├── config/
│   │   ├── modules/
│   │   │   ├── auth/
│   │   │   ├── users/
│   │   │   ├── profiles/
│   │   │   ├── companies/
│   │   │   ├── assessments/
│   │   │   ├── attempts/
│   │   │   ├── readiness/
│   │   │   ├── preparation-plans/
│   │   │   └── profile-analysis/
│   │   ├── middleware/
│   │   ├── repositories/
│   │   ├── services/            # Cross-module services only
│   │   ├── validators/
│   │   ├── utils/
│   │   ├── types/
│   │   ├── app.ts
│   │   └── server.ts
│   ├── tests/
│   └── package.json
├── packages/                    # Defer creation until sharing is justified
│   └── contracts/               # Optional shared DTO/schema package
└── package.json                 # npm workspaces and root scripts
```

Feature modules own routes, controllers, services, validators, and feature-local types. Repositories encapsulate Prisma queries only when query reuse or transaction boundaries warrant them; trivial one-off queries can remain in a service.

## 3. Database domain and relationships

Use PostgreSQL with Prisma migrations. UUIDs, `createdAt`, and `updatedAt` belong on mutable primary entities. Foreign keys should be indexed, as should common filters such as `(userId, targetId)`, `(assessmentId, status)`, and `(companyId, roleId)`.

| Area | Entities and key relationships |
|---|---|
| Identity | `User` has one `Profile`, many `TargetRoleSelection`, `AssessmentSession`, `UserAttempt`, `ReadinessScore`, and `PreparationPlan`. Authentication session/refresh-token persistence can be introduced if required by the chosen token-rotation approach. |
| Candidate profile | `Profile` holds user-entered headline, experience, education, project summaries, and completion state. `ProfileLink` is many-to-one with `Profile`, with `provider`, URL, visibility/access status, and last checked time. `ProfileAnalysis` is many-to-one with `ProfileLink` and stores only a source, status, permitted normalized signals, provenance, and analysis timestamp. |
| Company intelligence | `Company` has many `Role`; a role may have a level/seniority field. `InterviewPattern` belongs to a company-role pair and versions its known rounds/source/confidence. `InterviewRound` belongs to a pattern. `Topic` is canonical and hierarchical where helpful (e.g. DSA → Graphs). `CompanyRoleTopic` joins a company-role to a topic with importance, expected difficulty, frequency band, relevance, source, confidence, and validity dates. |
| Questions and assessments | `InterviewQuestion` can be linked to a company-role/pattern or be generic curated content. `QuestionTopic` is a many-to-many mapping. `Assessment` is a reusable assessment definition; `AssessmentQuestion` joins ordered questions, scoring metadata, and sections. `AssessmentSession` is a user attempting one assessment. `UserAttempt` records one answer/submission against an assessment question and references its session. |
| Performance aggregates | `UserTopicPerformance` is a recalculable aggregate per user/topic (and optionally assessment modality) with evidence count, normalized score, confidence, and last-calculated date. It never replaces raw `UserAttempt` records. |
| Analysis and plan | `ReadinessScore` is an immutable snapshot for a user and target selection, with overall score, dimension breakdown, formula/config version, evidence timestamp, and explainability payload. `ReadinessRisk` belongs to a readiness snapshot and records prioritized topic/dimension risks. `PreparationPlan` belongs to a readiness snapshot; `PreparationTask` belongs to a plan and tracks recommended activity, due day/date, linked topic, and completion. |

Use JSON only for variable structured payloads such as AI rubric evidence, explainability details, and versioned configurations. Keep filterable product concepts (topics, scores, status, source, relations) in relational fields.

## 4. REST API design

Product endpoints will live beneath `/api/v1`. The Phase 1 operational health probe is intentionally available at `/api/health`; it is not a product API versioning precedent. Successful responses follow `{ data, meta? }`; failures follow `{ error: { code, message, details?, requestId } }`. Request DTOs use Zod and controllers do no domain calculation.

| Resource | Endpoint groups |
|---|---|
| Auth | `POST /auth/register`, `POST /auth/login`, `POST /auth/logout`, `POST /auth/refresh`, `GET /auth/me` |
| User/profile | `GET/PATCH /users/me`, `GET/PATCH /profile`, `POST /profile/links`, `PATCH/DELETE /profile/links/:linkId` |
| Company and targets | `GET /companies`, `GET /companies/:companyId`, `GET /companies/:companyId/roles`, `GET /roles/:roleId/interview-pattern`, `GET/POST/PATCH/DELETE /targets` |
| Assessments | `GET /assessments`, `GET /assessments/:assessmentId`, `POST /assessment-sessions`, `GET /assessment-sessions/:sessionId`, `POST /assessment-sessions/:sessionId/attempts`, `POST /assessment-sessions/:sessionId/complete` |
| Performance/readiness | `GET /performance/topics`, `POST /readiness/recalculate`, `GET /readiness`, `GET /readiness/:snapshotId`, `GET /readiness/:snapshotId/risks` |
| Plans | `POST /preparation-plans`, `GET /preparation-plans/current`, `GET /preparation-plans/:planId`, `PATCH /preparation-plans/:planId/tasks/:taskId` |
| Profile analysis | `POST /profile-links/:linkId/analysis`, `GET /profile-links/:linkId/analysis` |

Mutating user-owned endpoints require authentication and resource ownership checks. Calculation/analysis endpoints should be idempotent or explicitly create a new immutable snapshot. Admin/curator APIs for company intelligence should be isolated from candidate APIs and added only with an administration requirement.

## 5. Readiness-engine design

Implement this as a backend `readiness` module with pure, unit-testable domain functions and a thin orchestration service:

```text
Evidence loaders → normalizers → dimension calculators → company-role alignment
                → risk prioritizer → readiness snapshot → preparation-plan input
```

### Inputs

- User assessment attempts: correctness/rubric score, difficulty, time, recency, modality, and completion.
- User topic-performance aggregates: score, sample size, and confidence.
- Profile and project evidence: only user-supplied or legitimately analyzed signals, each with availability/confidence.
- Target company-role topic requirements: importance, expected difficulty, frequency, relevance, source confidence.
- Versioned scoring configuration: dimension weights, confidence thresholds, recency treatment, and risk bands.

### Dimension calculators

Initial dimensions: DSA, problem solving, CS fundamentals, behavioral, project strength, profile strength, and company-role alignment. Each calculator returns a bounded normalized score (0–100), confidence (0–1), evidence count, and explanation. A missing evidence result is distinct from `0`.

### Company-specific risk

For each relevant topic, calculate a gap from candidate performance to the company-role expectation. Prioritize the gap using importance, frequency, role relevance, expected difficulty, and low-confidence penalty. This makes identical candidate performance yield different risk levels across targets.

One configurable form is:

```text
topicRisk = shortfall(candidateTopicScore, expectedTopicScore)
          × importanceWeight × frequencyWeight × relevanceWeight
          × confidenceAdjustment
```

The overall score is a configured weighted aggregation of dimension scores after company-role alignment, with coverage/confidence shown alongside it. Do not silently penalize missing data as weak performance; show a lower confidence or "needs evidence" state.

### Persistence and explainability

`ReadinessScore` snapshots persist the formula version, effective configuration identifier, input timestamps, dimension results, and ranked risks. This allows trends, auditability, safe formula changes, and a user-facing explanation of what changed.

## 6. Evidence flow

### Assessment performance → readiness

1. An assessment session creates immutable attempts for each question/behavioral response.
2. Attempt evaluation produces raw score/correctness, timing, difficulty, and topic mappings.
3. An aggregation job/service recalculates `UserTopicPerformance`, using recency, difficulty, consistency, and enough-sample thresholds.
4. A readiness calculation loads these aggregates and calculates technical, problem-solving, CS, and behavioral dimensions.
5. The engine aligns those dimensions and topic scores with the selected company-role requirements, stores a snapshot, and emits ranked risks for plan generation.

### Company interview intelligence → readiness

Curators seed source-labelled company, role, interview-pattern, and company-role-topic records. The target selection points to a company-role pair. The readiness engine uses only relevant, valid, confidence-qualified topic requirements. If no credible company intelligence exists, it returns a general-role analysis with an explicit reduced-confidence label rather than fake company specificity.

### Profile data → analysis

Profile URLs are stored as candidate-provided links. A provider adapter first determines whether access is allowed and data is public/available. It maps only legitimate source data to a provider-neutral signal model (e.g. repository activity, documented projects, stated skills). The analysis saves source, retrieval time, availability, confidence, and normalized signals. Project/profile calculators consume those signals only if available; unavailable sources result in an explanatory state.

## 7. UI and design-system architecture

Use a token-first Tailwind design system: CSS variables for white/neutral surfaces, a single primary blue scale, semantic success/warning/risk states, typography scale, spacing, radii, shadows, and focus rings. shadcn/ui provides accessible primitives; product components compose those primitives rather than creating visual variants per page.

Shared components include `PageHeader`, `AppShell`, `MetricCard`, `ScoreRing`, `RiskBadge`, `EmptyEvidenceState`, `DataAvailabilityNotice`, `TopicTable`, and form fields. Feature components live near their domain. Recharts is reserved for trends, composition, and topic comparison where a chart clarifies data; every visualization has a readable text/table alternative.

Routes should focus on landing/auth, onboarding, target selection, assessment, dashboard, topic analysis, preparation plan, and progress. The responsive default is a calm single-column mobile view that expands into a navigation shell and data grids on larger screens. No gradients, decorative illustrations, or unverified performance claims.

## 8. Implementation phases

1. **Foundation:** initialize npm workspaces, TypeScript/tooling, environment validation, lint/test scripts, README, and basic CI. No product features.
2. **Data foundation:** provision PostgreSQL, define Prisma schema and migrations, add curated seed format/data provenance, and database integration setup.
3. **Identity and profile:** authentication, secure cookie/session strategy, user/profile CRUD, validation, ownership middleware, and onboarding UI.
4. **Company targeting:** read-only company/role/pattern APIs, target selection, and curated demo intelligence clearly labelled.
5. **Assessment core:** assessment/question model, sessions and attempts, simple deterministic scoring, assessment UI, and raw-attempt tests.
6. **Readiness MVP:** topic aggregation, versioned scoring configuration, company-aligned risk engine, immutable snapshots, dashboard and topic analysis.
7. **Preparation loop:** deterministic plan generator, task completion, progress trend, and reassessment.
8. **Profile adapters and AI:** opt-in public-profile adapters and bounded behavioral evaluation with provenance, privacy review, and fallbacks.
9. **Hardening:** rate limiting, observability, accessibility audit, performance review, backups/retention policy, and deployment/security review.

## 9. Decisions and risks before implementation

| Decision/risk | Recommendation before build |
|---|---|
| Scoring validity | Define the first score configuration, expected topic levels, risk thresholds, and calibration process with a domain owner. Version every configuration. |
| Company data provenance | Establish approved sources, curator workflow, permitted attribution/storage, confidence labels, freshness policy, and a policy for conflicting sources. |
| Assessment content | Confirm ownership/licensing of questions and rubric, particularly interview-experience content. Start with original curated questions. |
| Authentication model | Decide same-site frontend/backend deployment topology and CSRF strategy before choosing cookie flags, refresh rotation, and CORS policy. |
| Behavioral evaluation | Define human-readable rubric, consent/disclosure, AI retention policy, model settings, and appeal/review behavior before OpenAI integration. |
| Profile providers | Choose providers with permitted public/official access. Begin with manual profile/project evidence if API access is not contractual. |
| Score communication | Decide whether readiness is only a preparation indicator; include confidence/coverage to avoid overstating predictive certainty. |
| Background work | Decide whether profile retrieval, AI evaluation, and aggregate recalculation need a queue in MVP. A synchronous flow is acceptable only while work remains quick and reliable. |
| Operations | Choose hosting, managed Postgres, secret management, monitoring, backup/retention, deletion/export requirements, and error-tracking policy. |

## 10. Recommended next step

With the Phase 1 workspace and Phase 2 database foundation in place, resolve the authentication/deployment topology decision in Section 9 before beginning Phase 3: secure identity, candidate profile CRUD, and onboarding.
