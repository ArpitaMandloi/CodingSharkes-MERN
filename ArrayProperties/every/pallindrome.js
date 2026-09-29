// 4. Check if All Words Are Palindromic
// Given a list of words, check if all words are palindromic.
// Example:
// Input: ["madam", "level", "racecar"]
// Output: True

let arr = ["madam", "level", "racecar"]

let arr1 = arr.every((val) => {

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