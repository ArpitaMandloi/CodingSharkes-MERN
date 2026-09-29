// 1. Check if All Numbers Are Positive
// Given a list of numbers, check if all numbers are positive.
// Example:
// Input: [1, 2, 3, 4]
// Output: True

let arr = [1, 2, 3, 4];

let arr1 = arr.every((val) => {
    if(val > 0) return true;
    else return false
})

console.log(arr1);