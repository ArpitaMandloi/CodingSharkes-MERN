// 1. Find the First Even Number
// Given a list of numbers, find the first even number.
// Example:
// Input: [1, 3, 7, 4, 5]
// Output: 4

let arr = [1, 3, 7, 4, 5];

arr.forEach(element => {

    if (element % 2 == 0) {
        console.log(element);
    }

});