// 3. Filter Words of Specific Length and Convert to Uppercase
// Given a list of words and a specific length, use filter to keep only words of that length, then convert each to uppercase.
// Example:
// Input: ["apple", "fig", "banana", "kiwi"], Length: 5
// Output: ["APPLE", "BANANA"]

let arr = ["apple", "fig", "banana", "kiwi"];
let len = 5;

let newArr = arr.filter((val) => val.length == len).map((val) => val =  val.toUpperCase());
console.log(newArr);

// let newArr = arr
//     .filter((val) => val % 2 == 0)
//     .map((val) => val * val);
