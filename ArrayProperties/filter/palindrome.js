// 5. Filter Palindromic Words
// Given a list of words, use filter to create a new list containing only palindromic words (words that read the same backward and forward).
// Example:
// Input: ["madam", "racecar", "hello", "world"]
// Output: ["madam", "racecar"]

let arr = ["madam", "racecar", "hello", "world"];



let newArr = arr.filter((val) => {
  let left = 0;
let right = val.length - 1;;
     while(left < right){
      if(val[left] != val[right]){
         return false;
      }
      left++;
      right--;
     }
     
     return true;
})
console.log(newArr);