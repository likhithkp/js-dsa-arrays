// Shift and Unshift is used to remove the elements from the top/beginning of the array.

let num = [1, 2, 3, 4, 5];

// Shift/Add
num.unshift(0) // [1, 2, 3, 4, 5] => [0, 1, 2, 3, 4, 5]

// Unshift/Remove
num.shift() // [0, 1, 2, 3, 4, 5] => [1, 2, 3, 4, 5] because the unshift has added 0 at line no 6

// Push/Pop are more performant than Shift/Unshift