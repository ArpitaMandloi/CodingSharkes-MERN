// 4. Words Starting with a Specific Letter
// Given a list of words and a specific letter, use filter to create a new list with only the words that start with that letter.
// Example:
// Input: ["apple", "banana", "avocado", "berry"], Letter: 'a'
// Output: ["apple", "avocado"]


let arr = ["apple", "banana", "avocado", "berry"];
let  Letter = "a";
let newArr = arr.filter((val , i)=> val[0] === "a"
)
console.log(newArr);