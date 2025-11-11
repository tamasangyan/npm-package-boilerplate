import { describe, expect, it } from "vitest";

import { type MyCustomType, myFunction } from "./index";

describe("myFunction", () => {
	it("returns the formatted id when given a valid parameter", () => {
		const input: MyCustomType = { id: 42 };

		expect(myFunction(input)).toBe("ID might be: 42");
	});

	it("throws an error when id is missing or invalid", () => {
		// @ts-expect-error Testing runtime guard for invalid input
		const callWithInvalidInput = () => myFunction({ id: "not-a-number" });

		expect(callWithInvalidInput).toThrow(
			"Invalid parameter: id must be a number",
		);
	});
});
