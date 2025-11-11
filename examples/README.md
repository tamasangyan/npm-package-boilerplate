# Examples

This repository is set up as a pnpm workspace. General steps:

1. Install deps and link the workspace packages:
   ```sh
   pnpm install
   ```
2. Build the package so `dist` is available for consumers:
   ```sh
   pnpm --filter npm-package-boilerplate build
   ```

Then run any example:

- JS ESM import: `pnpm --filter example-js-module start`
- JS CommonJS require: `pnpm --filter example-js-commonjs start`
- TS CommonJS (transpiled by tsx): `pnpm --filter example-ts-commonjs start`
- TS ESM (NodeNext): `pnpm --filter example-ts-module start`

Add more examples by creating additional folders under `examples/` with their own `package.json` pointing to `"npm-package-boilerplate": "workspace:*"`.
