// // 3. Length of Each String
// // Given a list of words, use map to create a new list containing the length of each word.
// // Example:
// // Input: ["apple", "banana", "cherry"]
// // Output: [5, 6, 6]

let arr = ["apple", "banana", "cherry"];
let newArr = arr.map(length);



function length(val , i){
return val.length;
}

console.log(newArr);

