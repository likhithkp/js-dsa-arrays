// For loop will iterate for each element in an array, so that we can perform any required operation on desired value in the array.

let num = [1, 2, 3, 4, 5];

/**
 * let i = 0 will set the index of array to 0, since index always starts at 0.
 * i < num.length will check if the index value is less than total array length so that it stops at the last element.
 * i++ will keep on incrementing the index until all the elememts in array are looped over.
 *
 * Below logic says that, let the value of i be 0, and check of the lenght of array by always making sure that the current index is less than array length i.e total count, if it is less than total count then keep incrementing and go through all elemnents until the last element is iterated.
 * i here is index not the element, so if we need to access the element or value we need to access the value through index as num[i].
 */

/**
 * for(condition){
 *  desired operation on each element;
 * }
 */

for(let i = 0; i < num.length; i++){
    return num[i];
}