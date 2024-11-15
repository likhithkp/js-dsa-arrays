// Determines whether the specified callback function returns true for any element of an array.

// @param predicate
// A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array.

// This method returns boolean unlike filter returning values

let nums = [1, 2, 3, 4, 5];

const arr = nums.some((value, index, array) => {
    return value > 5; // False in this case
});