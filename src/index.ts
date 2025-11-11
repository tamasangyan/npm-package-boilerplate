export type MyCustomType = {
	id: number;
};

export function myFunction(param: MyCustomType): string {
	if (!param || typeof param.id !== "number") {
		throw new Error("Invalid parameter: id must be a number");
	}
	return `ID might be: ${param.id}`;
}
