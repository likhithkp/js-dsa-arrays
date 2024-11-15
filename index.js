// Spread and rest operations will allow to merge two arrays into single array.

let num1 = [0, 1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10]

function sum(...numbers){
    return numbers;
};

console.log(sum(num1, num2, "Hello"))