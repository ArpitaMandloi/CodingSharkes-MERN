// 3. Remove Duplicates
// Write a function to print duplicate elements from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

let arr = [1, 2, 2, 3, 4, 4, 5 , 5 , 1 , 6];
let arr1 = [];
let element = 0;


for (let i = 0; i < arr.length; i++) {

  if(arr[i] != element){
     arr1.push(arr[i]);
     element = arr[i];
  }
}

console.log(arr1);

