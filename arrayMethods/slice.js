// The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0.
// Returns a copy of a section of an array. For both start and end, a negative index can be used to indicate an offset from the end of the array. For example, -2 refers to the second to last element of the array.

let num1 = [0, 1, 2, 3, 4];

const arr = num1.slice(0, 3) //Result => [ 0, 1 ], 0 index is 0 and 3 is 3, so it returns a new array including the elemnt at start index and one just before the end index, not the end index.