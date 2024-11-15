// Determines whether all the members of an array satisfy the specified test.

// @param predicate
// A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array.

let nums = [1, 2, 3, 4, 5];

const arr = nums.every((value, index, array) => {
    return value > 5; // False in this case because not every element is greater than 5
});