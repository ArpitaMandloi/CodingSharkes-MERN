// 4. Check if Any Number Is Divisible by 5
// Given a list of numbers, check if any number is divisible by 5.
// Example:
// Input: [3, 12, 20, 7]
// Output: True

let arr = [3, 12, 20, 7];
let arr1 = arr.some((val) => {
   if(val % 5 == 0) return true;
   else return false;
})
console.log(arr1);