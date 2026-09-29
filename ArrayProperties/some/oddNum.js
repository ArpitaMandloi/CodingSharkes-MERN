// 3. Check if There Is Any Odd Number
// Given a list of numbers, check if there is at least one odd number.
// Example:
// Input: [2, 4, 6, 9]
// Output: True

let arr = [2, 4, 6, 9];
let arr1 = arr.some((val) => {
    if(val % 2 != 0) return true;
    else return false;
})
console.log(arr1);