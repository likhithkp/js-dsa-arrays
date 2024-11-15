// Returns the elements of an array that meet the condition specified in a callback function.

// @param predicate — A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array.

let nums = [1, 2, 3, 4, 5];

const arr = nums.filter((num, index, array) => {
    return num < 4; // Result => [1, 2, 3]
});