outline: deep

# CI, quality, and release flow

## Local quality gates

- `pnpm check` — Biome lint/format check (same config used in CI)
- `pnpm typecheck` — `tsc --noEmit` with strict `tsconfig.json`
- `pnpm test` — Vitest suite in `src/*.test.ts`
- `pnpm build` — tsup build (CJS/ESM + d.ts, treeshaken, sourcemapped)

Pre-commit hook (Lefthook) auto-runs Biome on staged files.

## Pull request pipeline

`.github/workflows/code-quality.yml` runs on PRs:

1. Install with pnpm (Node 22)
2. `pnpm build`
3. `pnpm typecheck`
4. `pnpm check`
5. `pnpm test`

## Versioning with Changesets

- Every feature/fix PR should add a Changeset: `pnpm changeset`
- Choose `major`/`minor`/`patch` according to semver
- Changesets drive the changelog and version bumps

## Automated releases

1. **Release PR** (on push to `main`): `open-release-pr.yml` runs Changesets to open a PR that bumps versions and updates `CHANGELOG.md`.
2. **Tagging** (when Release PR merges): `tag-release.yml` creates and pushes a `v*` tag matching `package.json`.
3. **Release pipeline** (on `v*` tag): `release.yml` installs, typechecks, lints, tests, builds, and uploads `dist`. Add publish steps (npm/GitHub Release) where indicated.

## Documentation publishing

Build docs via `pnpm docs:build` and publish the `docs/.vitepress/dist` folder with GitHub Pages (e.g., using Pages from `gh-pages` or via CI upload).
