export type MyCustomType = {
	id: number;
};

export function myFunction(param: MyCustomType): string {
	return `ID might be: ${param.id}`;
}
