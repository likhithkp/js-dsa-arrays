// Map method is used to iterate over each element in an array, it will return a new array as a result

// Calls a defined callback function on each element of an array, and returns an array that contains the results.

// Callbackfn — A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. () => {}

let nums = [1, 2, 3, 4, 5];

const arr = nums.map((num, index, array) => {
    console.log(num, index, array);
});