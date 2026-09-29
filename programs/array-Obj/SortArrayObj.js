// 1. Sort an Array of Objects
// Write a function to sort an array of objects by a specific key.
// Example:
// Input: [{ name: "John", age: 25 }, { name: "Alice", age: 22 }], Key: age
// Output: [{ name: "Alice", age: 22 }, { name: "John", age: 25 }]

let arr_obj =  [{ name: "John", age: 25 }, { name: "Alice", age: 22 }];

let arr_obj2 = [];
var index = 0;

for(let i = 0 ; i<= arr_obj.length-1 ; i++){
     for(let j = 0 ; j <= arr_obj.length-1;j++){
      if((arr_obj[index][i].age < arr_obj[index][j].age)){
         arr_obj2.push(arr_obj[index]);
     }
     }
}
console.log(arr_obj2);