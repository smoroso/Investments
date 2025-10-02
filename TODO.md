# TODO - Baby steps (restart)

Goal: build the Investments web app incrementally. I will only change files after you OK each small task.

Core rules
- One small, self-contained change per task (init, install, add one file, add one test, etc.)
- Run tests or simple checks after each step.
- I will ask for permission before making changes beyond the current task.
- Use functional programming patterns in `src/utils` (pure functions, immutability, small composable helpers).
- Prefer guard clauses and small early-returns instead of nested conditionals or long if/else chains.
- Add unit tests for each util method (happy path + edge cases) and keep tests fast and deterministic.
- Follow modern, idiomatic TypeScript/React patterns and keep files small and well-documented.
- Ask for commit after each baby step if everything is clean and once we have test be sure they pass successfully first

Step 1 — Project init (very small)
- [ ] Create a git repo (if missing) and create a minimal `package.json` (npm init -y)
- [ ] Install runtime deps: `next`, `react`, `react-dom`
- [ ] Add npm scripts: `dev`, `build`, `start`
 - [ ] Add a `.gitignore` with node/Next/env ignores
 - [ ] Create a `src/` folder placeholder and add `.gitkeep` so repo isn't empty

Step 2 — TypeScript basics
- [ ] Install `typescript` and basic types: `@types/react`, `@types/node`, `@types/react-dom`
- [ ] Add a minimal `tsconfig.json` with a `@` -> `src` path alias

Step 3 — App skeleton
- [ ] Create `src/pages/_app.tsx`, `src/pages/index.tsx`, and `src/styles/globals.css`
- [ ] Verify `npm run dev` starts without errors (server reachable on :3000)

Step 4 — Styling (Tailwind)
- [ ] Install `tailwindcss`, `postcss`, `autoprefixer`
- [ ] Add `tailwind.config.js`, `postcss.config.js` and enable Tailwind in `globals.css`
- [ ] Verify styles are applied in the running dev server

Step 5 — Basic util + unit tests
- [ ] Add a small util (e.g. `src/utils/numberUtils.ts`) following guard-clauses/functional style
- [ ] Install Jest/ts-jest and add a simple unit test; run tests and make them pass

Step 6 — E2E scaffolding (Playwright)
- [ ] Install `@playwright/test` and run `npx playwright install` (browsers)
- [ ] Add a single e2e test `e2e/home.spec.ts` that checks the home page title
- [ ] Configure `playwright.config.*` to run against a reachable URL (webServer or external)

Step 7 — Local data & simple pages
- [ ] Add a `data/` folder with a simple JSON file for ETFs or wallet sample
- [ ] Create a page that reads and displays that JSON (no DB)

Step 8 — Auth skeleton (minimal)
- [ ] Add a tiny `/api/auth/login` route that reads credentials from `.env` (2 users) and returns a signed JWT (dev-only)
- [ ] Add one test for the login API route

Step 9 — Small feature iterations
- [ ] Add wallet add-money feature (UI + store to JSON file)
- [ ] Add an investments list page that reads `data/` and allows simple sorting

Step 10 — Deploy prep
- [ ] Add `.env.example`, `README.md` with deploy steps (Vercel/Render), and a simple deploy checklist

Notes / next action
- I will not modify any files until you tell me which step to start with. Recommend starting with Step 1 (Project init). Reply "Start Step 1" and I will perform that step, run the minimal checks, and report back.
