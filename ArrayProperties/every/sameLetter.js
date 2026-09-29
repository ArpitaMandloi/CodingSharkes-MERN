// 2. Check if All Words Start with the Same Letter
// Given a list of words, check if all words start with the letter 'a'.
// Example:
// Input: ["apple", "avocado", "apricot"]
// Output: True

let arr = ["apple", "avocado", "apricot"];

let arr1 = arr.every((val,index) => {
   if(val[0] == 'a'){
      return true;
   }
   else return false;
}) 
console.log(arr1);