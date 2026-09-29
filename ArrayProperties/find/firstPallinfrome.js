// 4. Find the First Palindromic Word
// Given a list of words, find the first word that is a palindrome.
// Example:
// Input: ["apple", "level", "banana", "civic"]
// Output: "level"

let arr = ["apple", "level", "banana", "civic"];

let arr1 = arr.find((val) => {

    let left = 0;
    let right = val.length - 1;

    while (left < right) {

        if (val[left] != val[right]) {
            return false;
        }

        left++;
        right--;
    }

    return true;
});

console.log(arr1);