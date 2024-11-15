// Changes all array elements from start to end index to a static value and returns the modified array
// @param value — value to fill array section with

// @param start
// index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array.

// @param end
// index to stop filling the array at. If end is negative, it is treated as length+end.

let num1 = [0, 1, 2, 3, 4];

num1.fill(12, 0, 2) //Result => [ 12, 12, 12, 3, 4 ]