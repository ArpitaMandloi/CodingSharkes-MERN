// 2. Modify the program to print both the index and the value of each element.
// let fruits = ["Apple", "Banana", "Mango"];
// Output:
//   Index 0: Apple
//   Index 1: Banana
//   Index 2: Mango

let arr = ["Apple", "Banana", "Mango"];

arr.forEach((element, index) => {
    console.log("Index", index + ":", element);
});