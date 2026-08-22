# Interview Readiness Engine — Engineering Guide

## Purpose

Build a company-specific interview preparation product that calculates readiness from evidence: candidate data, assessment performance, curated company-role intelligence, and target-role alignment. It is not a generic chatbot, job board, or ATS scanner.

## Architecture principles

- Use an npm monorepo with independent `frontend` and `backend` applications; share types/contracts only when a real duplication pressure exists.
- Keep HTTP controllers thin. Validation, authorization, business rules, and scoring belong in dedicated modules/services.
- Treat readiness as a server-calculated, versioned analysis result. Never trust client-provided scores or weights.
- Keep scoring rules, normalization, and weighting centralized in the readiness domain. Use configuration and explicit score versions rather than scattered constants.
- Store candidate evidence separately from derived analyses. Derived values must be reproducible from their inputs and formula version.
- Model company/role interview intelligence as curated, sourced data. Seed/demo data must be labelled and must never masquerade as verified statistics.
- Integrate external profile sources through source-specific adapters. Respect public availability, terms, robots rules, authentication, and rate limits; report unavailable data rather than inventing it.
- Use AI only for bounded tasks where it adds value (for example, behavioral rubric evaluation). Persist its provenance, model/version, inputs permitted for storage, and confidence.

## Stack and conventions

- Frontend: Next.js App Router, TypeScript, Tailwind CSS, shadcn/ui, Recharts.
- Backend: Node.js, Express, TypeScript, Prisma, PostgreSQL, Zod, JWT in secure HTTP-only cookies.
- Package manager: npm. Prefer native platform capabilities and existing dependencies before adding a package.
- Backend endpoints use `/api/v1` and a consistent response envelope. Validate all external input with Zod.
- Use UTC ISO timestamps, UUID primary keys, and explicit enums where values are finite.
- Keep secrets in environment variables only. Commit only `.env.example`, never `.env`.

## Security and privacy

- Apply authentication and ownership checks to every candidate-owned resource.
- Configure CORS with explicit allowed origins and cookie credentials; use secure, HTTP-only, appropriately scoped cookies.
- Rate-limit auth and expensive analysis endpoints. Centralize errors; do not expose stack traces or secrets.
- Minimize profile data collection, encrypt or protect sensitive data as appropriate, and allow deletion in the future.
- Do not scrape protected sources, bypass controls, or fabricate inaccessible profile details.
- Never log credentials, tokens, cookies, full sensitive profile payloads, or AI prompts containing private data.

## Data and scoring rules

- Persist raw attempts and performance evidence before aggregating topic or readiness scores.
- Weight topic risk by company-role relevance, importance, expected difficulty, and evidence confidence—not assessment percentage alone.
- Preserve historical readiness snapshots and score/configuration versions so improvement and explanations remain auditable.
- Clearly distinguish `unknown` / `insufficient evidence` from a low score.

## Quality bar

- Make the smallest coherent change requested; avoid unrelated rewrites.
- Add unit tests for domain rules and integration tests for API/database boundaries as features are implemented.
- Before handoff, run relevant type checks, linting, tests, and Prisma validation/migrations where applicable.
- Update architecture documentation when a material design decision changes.
- Use accessible, responsive, minimalist UI. Avoid gradients, decorative clutter, and unverified claims.

## Current phase

Phase 2 database foundation is established: Prisma schema, migrations, source-labelled demo seed data, a shared database client, and database validation are permitted. Do not add authentication, assessments, readiness logic, profile integrations, AI integrations, or product UI until explicitly requested.
