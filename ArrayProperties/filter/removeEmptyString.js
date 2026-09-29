// 2. Remove Empty Strings
// Given a list of strings, use filter to remove all empty strings.
// Example:
// Input: ["apple", "", "banana", "", "cherry"]
// Output: ["apple", "banana", "cherry"]

let arr =["apple", "", "banana", "", "cherry"]


let newArr = arr.filter((val)=>val  !=  "");
console.log(newArr);