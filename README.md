# npm-package-boilerplate

Starter kit for publishing modern TypeScript libraries with a batteries-included toolchain, CI, docs, and consumer examples.

- Dual TS outputs (CJS + ESM) with type declarations via `tsup`
- pnpm-only workspace with real consumer examples (JS/TS, CJS/ESM)
- Biome for linting/formatting (no ESLint/Prettier) + Lefthook pre-commit
- Vitest for tests and `tsc --noEmit` for strict type-checking
- Changesets-driven versioning and automated release/tag pipelines
- VitePress docs scaffold, ready for GitHub Pages

## Quick start

```sh
pnpm install          # installs, sets up Lefthook, enforces pnpm
pnpm build            # outputs dist/index.{cjs,mjs,d.ts}
pnpm test             # runs Vitest
pnpm typecheck        # tsc --noEmit
pnpm check            # Biome lint + format check
# Optional: `nvm use` honors `.nvmrc` to match CI
```

## Development standards

- **Formatting & linting:** Biome configured in `biome.json`, enforced on commit via Lefthook (`lefthook.yml`). VS Code settings (`.vscode/`) disable ESLint/Prettier and default to Biome.
- **Tooling choices:** pnpm enforced in `preinstall` (via `only-allow`). No Husky—Lefthook manages hooks.
- **Builds:** `tsup.config.ts` produces treeshaken CJS/ESM bundles with sourcemaps and `.d.ts` alongside. Exports map is prewired in `package.json`.
- **Types:** Strict `tsconfig.json` and a dedicated `pnpm typecheck` step guard API safety.
- **Tests:** Vitest lives in `src/index.test.ts`; extend as needed.
- **Docs:** `docs/` contains a VitePress site. Use `pnpm docs:dev` / `pnpm docs:build`; publish the static output with GitHub Pages.

## Examples workspace

`examples/` is part of the pnpm workspace (`pnpm-workspace.yaml`) and shows consumption patterns:

- JS ESM import, JS CommonJS require
- TS NodeNext ESM, TS transpiled CJS

Build the package first (`pnpm --filter npm-package-boilerplate build`), then run any example (see `examples/README.md`).

## CI & release flow

- **Pull requests:** `.github/workflows/code-quality.yml` runs build → typecheck → Biome check → tests.
- **Versioning:** Every feature PR should add a Changeset (`pnpm changeset`) describing the change and semver bump.
- **Release PR:** On push to `main`, Changesets opens a PR that bumps versions and generates `CHANGELOG.md`.
- **Tagging:** Merging the Release PR triggers `tag-release` to create and push a `v*` tag.
- **Publishing hook:** Pushing a `v*` tag runs `.github/workflows/release.yml` (rebuilds, tests, uploads `dist`). Add your publish logic there.

## Repository layout

- `src/` — library source and Vitest specs
- `dist/` — build output (CJS, ESM, d.ts)
- `docs/` — VitePress documentation
- `examples/` — consumer scenarios in a pnpm workspace
- `.github/workflows/` — CI, release, and tagging pipelines

## License

MIT
