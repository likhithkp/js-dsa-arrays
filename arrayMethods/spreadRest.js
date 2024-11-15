// Spread and rest operations will allow to merge two arrays into single array.

let num1 = [0, 1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10]

// Spread
let newArr = [...num1, ...num2] // Result => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Rest
// Collects remaining elements or properties into a single array or object. It allows you to handle variable numbers of arguments or properties.
// Similar to python **args

function sum(...numbers){
    return numbers;
};

sum(num1, num2, "Hello"); // Result => [ [ 0, 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ], 'Hello' ]
