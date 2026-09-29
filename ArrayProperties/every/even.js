// 3. Check if All Numbers Are Even
// Given a list of numbers, check if all numbers are even.
// Example:
// Input: [2, 4, 6, 8]
// Output: True/

let arr = [2, 4, 6, 8];
let arr1 = arr.every((val) => {
   if(val % 2 == 0) return true;
   else return false;
})
console.log(arr1);