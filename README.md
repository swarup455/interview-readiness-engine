# Interview Readiness Engine

Interview Readiness Engine is a company-specific interview preparation platform. It will combine candidate evidence, assessment performance, curated company-role interview intelligence, and a target role into an explainable readiness analysis.

## Current status

**Phase 2 — Database Foundation** is complete. This repository currently provides an npm workspace, a minimal Next.js frontend, a minimal Express API, and a PostgreSQL/Prisma schema with clearly labelled development seed data. Product functionality—including authentication, assessments, readiness scoring, profile analysis, AI, and dashboards—has not been implemented.

## Architecture

- `frontend`: Next.js App Router application for the candidate experience.
- `backend`: Express API with a modular server-side structure, Prisma schema, seed, and database client.
- `AGENTS.md`: project engineering rules.
- `ARCHITECTURE.md`: the technical architecture and phased delivery plan.

Future product logic belongs in backend domain modules; controllers stay thin and readiness calculations remain server-side and versioned.

## Technology stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS, ESLint
- Backend: Node.js, Express, TypeScript, Zod, CORS, PostgreSQL, Prisma
- Tooling: npm workspaces, ESLint, TypeScript

Authentication, OpenAI, shadcn/ui, and Recharts are planned for later phases and are intentionally not installed yet.

## Repository structure

```text
.
├── frontend/          # Independent Next.js application
├── backend/           # Express application, Prisma schema, seed, and DB tests
├── AGENTS.md          # Engineering rules and constraints
├── ARCHITECTURE.md    # Technical plan
├── package.json       # npm workspace scripts
└── README.md
```

## Local development

### Prerequisites

- Node.js 20.9 or newer
- npm 10 or newer

### Setup

1. Copy environment samples if local overrides are needed:

   ```powershell
   Copy-Item frontend/.env.example frontend/.env.local
   Copy-Item backend/.env.example backend/.env
   ```

2. Install workspace dependencies:

   ```powershell
   npm install
   ```

3. Start both applications:

   ```powershell
   npm run dev
   ```

The frontend runs on `http://localhost:3000`; the backend runs on `http://localhost:4000` by default. Confirm the API at `http://localhost:4000/api/health`.

Each app can also be run independently:

```powershell
npm run dev --workspace frontend
npm run dev --workspace backend
```

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start frontend and backend development servers together. |
| `npm run build` | Build each workspace. |
| `npm run lint` | Run ESLint in each workspace. |
| `npm run typecheck` | Run TypeScript checks in each workspace. |

## Environment variables

`frontend/.env.example` documents the optional public API origin. `backend/.env.example` documents `PORT`, `FRONTEND_URL`, required `DATABASE_URL`, and future-use `JWT_SECRET` and `OPENAI_API_KEY`. No secrets are committed.

## Database setup

1. Install PostgreSQL 16 or newer and create a local development database:

   ```sql
   CREATE DATABASE interview_readiness_engine;
   ```

2. Copy the backend environment sample and replace `USER` and `PASSWORD` in `DATABASE_URL`:

   ```powershell
   Copy-Item backend/.env.example backend/.env
   ```

3. Generate the client, create the initial migration, and seed the local development database:

   ```powershell
   npm run prisma:generate --workspace backend
   npm run prisma:migrate --workspace backend -- --name init
   npm run prisma:seed --workspace backend
   ```

4. Verify the seed relationships and database connection:

   ```powershell
   npm run test:db --workspace backend
   ```

The development seed is explicitly marked **DEMO / SEED DATA**. Its companies, interview experiences, questions, and topic importance records are synthetic architecture-validation data, not real interview statistics or redistributed content.

### Database entities

- Candidate data: `User`, `CandidateProfile`, `ProfileLink`
- Company intelligence: `Company`, company-scoped `Role`, `Topic`, `CompanyRoleTopic`
- Interview evidence: `InterviewExperience`, `InterviewQuestion`, `QuestionTopic`

The unauthenticated operational probe `GET /api/health` remains independent of PostgreSQL. `GET /api/health/database` executes a safe connection query and returns only availability status; it never exposes credentials or internal errors.

## Next phase

Phase 3 is identity and candidate profile: secure authentication, user/profile CRUD, ownership middleware, validation, and onboarding UI. See [ARCHITECTURE.md](ARCHITECTURE.md) for the full phased plan.
