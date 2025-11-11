import { defineConfig } from "tsup";

export default defineConfig({
	entry: ["src/index.ts"],
	splitting: true,
	sourcemap: true,
	clean: true,
	format: ["cjs", "esm"],
	experimentalDts: true,
	treeshake: true,
	outExtension({ format }) {
		switch (format) {
			case "cjs":
				return {
					js: `.cjs`,
					dts: `.d.ts`,
				};
			case "esm":
				return {
					js: `.mjs`,
					dts: `.d.ts`,
				};
			default:
				throw new Error(`Unknown format: ${format}`);
		}
	},
	target: "node16",
});
