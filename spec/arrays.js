/* eslint no-unused-vars: "off" */

let arr;

// ✓ Good

arr = [];
arr = [1];
arr = [1, 2, 3];
arr = [
	1,
	2,
	3,
];
arr = [{
	a: 1,
}];
arr = [{
	a: 1,
}, {
	b: 1,
}];

// ✗ Bad

arr = [1,
	2,
	3,
]; // eslint-disable-line array-bracket-newline
arr = [
	1, 2, // eslint-disable-line array-element-newline
	3,
];
arr = [
	1,
	2,
	3 // eslint-disable-line comma-dangle
];
arr = [ 1, 2, 3 ]; // eslint-disable-line array-bracket-spacing
arr = [1, 2, 3,]; // eslint-disable-line comma-dangle, comma-spacing
arr = [1, 2, 3, ]; // eslint-disable-line comma-dangle, array-bracket-spacing
arr = [
	1,
	{
		a: 1,
	}, { // eslint-disable-line array-element-newline
		b: 1,
	},
];
