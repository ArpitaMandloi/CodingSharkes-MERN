// 2. Check if Any Word Contains the Letter 'z'
// Given a list of words, check if any word contains the letter 'z'.
// Example:
// Input: ["apple", "banana", "zebra"]
// Output: True
let arr = ["apple", "avocado", "zpricot"];

let arr1 = arr.some((val,index) => {
   if(val[0] == 'z'){
      return true;
   }
   else return false;
}) 
console.log(arr1);