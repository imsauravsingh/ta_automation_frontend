# TA Automation — Frontend Monorepo

## Quickstart
1. Install: `pnpm install`
2. Start recruiter dashboard: `pnpm dev:recruiter`
3. Start admin console: `pnpm dev:admin`
4. Start analytics view: `pnpm dev:analytics`

## Env
Copy `.env.example` to `.env.local` and set backend URLs and vendor keys.

## Architecture
Three apps (Recruiter, Admin, Analytics) share UI & hooks packages. See `system-design/` for diagrams and API contracts.