// 1. Filter Even Numbers and Square Them
// Given a list of numbers, first filter out the even numbers, then square each remaining number.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [4, 16, 36]

let arr = [1, 2, 3, 4, 5, 6];

let newArr = arr
    .filter((val) => val % 2 == 0)
    .map((val) => val * val);

console.log(newArr);

