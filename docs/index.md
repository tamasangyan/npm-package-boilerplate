---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
hero:
  name: npm-package-boilerplate
  text: Modern TypeScript package template
  tagline: Opinionated starter for shipping npm libraries with zero guessing.
  actions:
    - theme: brand
      text: Get started
      link: /markdown-examples
    - theme: alt
      text: CI & release flow
      link: /api-examples
features:
  - title: pnpm-only workspace
    details: Enforced via preinstall; examples included for JS/TS, CJS/ESM.
  - title: Typed builds
    details: tsup outputs dual CJS/ESM bundles plus d.ts, treeshaken and sourcemapped.
  - title: Code quality by default
    details: Biome formatting/linting, Lefthook pre-commit, strict tsc, Vitest tests.
  - title: Automated releases
    details: Changesets versioning, release PR + tag pipelines, ready for publish hooks.
  - title: Docs included
    details: VitePress site scaffolded for GitHub Pages.
