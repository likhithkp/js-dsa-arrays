// Syntax: splice(start: number, deleteCount?: number): number[]
// The zero-based location in the array from which to start removing elements.
// Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.
// @returns — An array containing the elements that were deleted.

let num1 = [0, 1, 2, 3, 4];

let arr = num1.splice(2, 1, 5)

// Result => [ 2 ]
// num1 => [ 0, 1, 5, 3, 4 ]