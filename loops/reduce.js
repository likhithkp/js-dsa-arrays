// Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// @param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

// @param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.

// Reduce is a very powerful method which reduces an entire values of an array into single value

let nums = [1, 2, 3, 4, 5];

const arr = nums.reduce((previousValue, currentValue, currentIndex, array) => {
    return previousValue + currentIndex ;
}, 0);