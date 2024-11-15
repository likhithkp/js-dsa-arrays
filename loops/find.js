// Returns the value of the first element in the array where predicate is true, and undefined otherwise.

// @param predicate
// find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined.

let nums = [0, 2, 3, 4, 5];

const arr = nums.find((value, index, array) => {
    return value < 2; // 0 in this case because 0 is the value lesser than 2 here, in case of multiple value or same values the first index element will be returned
});