// 5. Count the Total Number of Characters
//    Given a list of words, use reduce to calculate the total number of characters across all words.
//    Example:
//    Input:
//    Output: 15

let arr =  ["apple", "banana", "kiwi"];

let newArr = arr.reduce((sum , val) => {
   
    sum = sum + val.length;
    return sum;
},0);
console.log(newArr);