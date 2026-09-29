// 5. Check if Any Word Is Longer Than 10 Characters
// Given a list of words, check if any word has more than 10 characters.
// Example:
// Input: ["apple", "strawberry", "blueberry"]
// Output: True

let arr = ["apple", "strawberry", "blueberry"];
let arr1 = arr.some((val) => {
   if(val.length >= 10) return true;
   else false;
})
console.log(arr1);