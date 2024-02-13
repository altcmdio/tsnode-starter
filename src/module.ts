export function add(x: number, to: number) {
	return x + to;
}

export function subtract(x: number, from: number) {
	return from - x;
}

export function multiply(multiplier: number, multiplicand: number) {
	return multiplier * multiplicand;
}

export function inAsync(ms: number) {
	return new Promise((resolve) => {
		return setTimeout(() => {
			resolve(`after ${ms}ms: hello, world!`);
		}, ms);
	});
}
