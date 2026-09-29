// 4. Filter Odd Numbers and Convert to Their Square Roots
// Given a list of numbers, filter out odd numbers and then calculate the square root of each remaining number.
// Example:
// Input: [1, 4, 9, 16, 25]
// Output: [2.0, 4.0]

let arr = [1, 4, 9, 16, 25];

let newArr = arr
    .filter((val) => val % 2 == 0)
    .map((val) => val ** (1 / 2));

console.log(newArr);