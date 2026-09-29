// 2. Find the Second Largest Number
// Write a function to find the second-largest number in an array.
// Example:
// Input: [10, 20, 30, 40]
// Output: 30

let arr1 = [10, 20, 30 , 40 , 50];
let largest = arr1[0];
let Slargest = 0;
let len = arr1.length - 1;

for(let i = 0 ; i<= len ; i++){
    if(arr1[i] > largest){
      Slargest = largest;
      largest = arr1[i];
      
    }
    else if (arr1[i] < largest && arr1[1] > Slargest){
      Slargest = arr1[i];
    }
}
console.log(Slargest);