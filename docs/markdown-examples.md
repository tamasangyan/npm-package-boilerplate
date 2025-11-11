# Getting started

## Prerequisites

- Node `22.14.0` (use `nvm use` to align with `.nvmrc` and CI)
- pnpm (enforced via `npx only-allow pnpm`)

## Install & develop

```sh
pnpm install                # installs deps, installs Lefthook
pnpm build                  # generates dist/index.{cjs,mjs,d.ts}
pnpm dev                    # tsup watch build
pnpm test                   # Vitest
pnpm typecheck              # tsc --noEmit
pnpm check                  # Biome lint+format check
pnpm format:write           # Biome format fix
```

## Project structure

- `src/` — library source + Vitest specs
- `dist/` — build artifacts (CJS/ESM/d.ts)
- `examples/` — consumer scenarios in the pnpm workspace
- `docs/` — VitePress site (this documentation)

## Tooling choices

- **Build:** `tsup` with splitting, treeshake, sourcemaps, dual output, and declaration files.
- **Types:** Strict `tsconfig.json` with `noEmit` for checks; emitted types come from `tsup`.
- **Formatting/linting:** Biome configured in `biome.json`; Lefthook pre-commit runs `biome check --write` on staged files.
- **Editor:** `.vscode/settings.json` sets Biome as the default formatter and disables ESLint/Prettier.

## Running examples

The workspace includes consumer projects for JS/TS + CJS/ESM under `examples/`.

```sh
pnpm --filter npm-package-boilerplate build
pnpm --filter example-js-module start
pnpm --filter example-js-commonjs start
pnpm --filter example-ts-module start
pnpm --filter example-ts-commonjs start
```

Add more consumer scenarios by adding folders under `examples/` with `"npm-package-boilerplate": "workspace:*"` in their `package.json`.

## Documentation

The docs site is VitePress. Commands:

```sh
pnpm docs:dev       # local dev server
pnpm docs:build     # static build for GitHub Pages
pnpm docs:preview   # preview the built site
```
