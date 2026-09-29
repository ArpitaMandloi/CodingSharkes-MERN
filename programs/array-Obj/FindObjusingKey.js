// 2. Find an Object by a Key
// Write a function to find the first object in an array with a specific key-value pair.
// Example:
// Input: [{ id: 1, name: "John" }, { id: 2, name: "Alice" }], Key-Value: id=2
// Output: { id: 2, name: "Alice" }

let arr_obj = [{ id: 1, name: "John" }, { id: 2, name: "Alice" }];
var key = 1;
var index = 0;
for(let i = 0 ; i <= arr_obj.length-1 ; i++){
   if(arr_obj[index].id === key){
      console.log(arr_obj[index]);
   }
   index++;
}