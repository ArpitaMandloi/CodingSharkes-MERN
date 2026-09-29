// 4. Concatenate All Strings
//    Given a list of strings, use reduce to concatenate them into a single string.
//    Example:
//    Input: ["hello", "world"]
//    Output: "helloworld"

let arr = ["hello", "world"];

let newArr = arr.reduce((acc , val) => {
     return acc + " "+ val;
},"")

console.log(newArr);