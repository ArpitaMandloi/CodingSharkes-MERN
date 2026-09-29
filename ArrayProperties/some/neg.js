// 1. Check if There Is Any Negative Number
// Given a list of numbers, check if there is at least one negative number.
// Example:
// Input: [3, 5, -1, 4]
// Output: True

let arr = [1, -2, 3, 4];

let arr1 = arr.some((val) => {
    if(val < 0) return true;
    else return false
})

console.log(arr1);