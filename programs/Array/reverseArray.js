// 1. Reverse an Array
// Write a function to reverse an array without using built-in methods.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

let arr = [1, 2, 3, 4, 5];
let len = arr.length - 1;
let arr1 = [];

for(let i = len ; i >= 0 ; i--){
    arr1.push(arr[i]);
}
console.log(arr1);