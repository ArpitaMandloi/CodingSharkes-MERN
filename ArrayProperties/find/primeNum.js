// 5. Find the First Prime Number
// Given a list of numbers, find the first prime number.
// Example:
// Input: [4, 6, 9, 7, 10]
// Output: 7

let arr = [4, 6, 9, 7, 10];

let arr1 = arr.find((val) => {

    if (val < 2) return false;

    for (let i = 2; i < val; i++) {
        if (val % i == 0) {
            return false;
        }
    }

    return true;
});

console.log(arr1);