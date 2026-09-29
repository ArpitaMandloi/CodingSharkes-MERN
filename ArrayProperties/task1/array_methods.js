// let arr = [
//     {firstName: "Pradeep", lastName: "Patidar", age: 21},
//     {firstName: "Manmohan", lastName: "Lanjhesh", age: 42},
//     {firstName: "Adarsh", lastName: "Kewat", age: 18},
//     {firstName: "Sunny", lastName: "Ranalkar", age: 24}
// ];
// // let newArr = arr.filter(val => val.age>21);
// let newArr = arr.filter(val => {
//     if(val.age > 21) {
//         return true;
//     }
// }).map(val => {
//     return val.firstName + " " + val.lastName;
// });
// console.log(newArr);
// console.log(newArr);

//========================MAP=========================
// let arr = [2,3,4,5,7];
// let newArr = arr.map(val=>val*3);
// let newArr = arr.map((val, i) =>{
//     console.log(i,"<<----");
//     val = val*2;
//     return val;
// });
// console.log(newArr);


// let arr = [
//     {firstName: "Pradeep", lastName: "Patidar", age: 21},
//     {firstName: "Manmohan", lastName: "Lanjhesh", age: 42},
//     {firstName: "Adarsh", lastName: "Kewat", age: 18},
//     {firstName: "Sunny", lastName: "Ranalkar", age: 24}
// ];
// let newArr = arr.map((val)=>val['firstName']+" "+val['lastName']+"("+val['age']+")");
// console.log(newArr);

// let newArr = arr.map(newOne);
// function newOne(val,i){
//     console.log(i,"<<====");
//     return val['firstName'] + " " + val['lastName'];
// }
// console.log(newArr);

//=======================Filter==========================
// let arr = [2,3,4,5,7];
// let newArr = arr.filter((val)=>{
//     return val>3
// });
// console.log(newArr);

// let arr = [
//     {firstName: "Pradeep", lastName: "Patidar", age: 21},
//     {firstName: "Manmohan", lastName: "Lanjhesh", age: 42},
//     {firstName: "Adarsh", lastName: "Kewat", age: 18},
//     {firstName: "Sunny", lastName: "Ranalkar", age: 24}
// ];

// let newArr = arr.filter((val)=>val['age']>20);
// console.log(newArr);

//=======================Map Filter======================

// let arr = [
//     {firstName: "Pradeep", lastName: "Patidar", age: 21},
//     {firstName: "Manmohan", lastName: "Lanjhesh", age: 42},
//     {firstName: "Adarsh", lastName: "Kewat", age: 18},
//     {firstName: "Sunny", lastName: "Ranalkar", age: 24}
// ];
// let newArr = arr.filter(val=> val["age"]>21).map(val=>val['firstName']+" "+val['lastName']);
// console.log(newArr);

//=======================Reduce==========================
// let sum = 0;
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
// }
// console.log(sum);

// let arr = [1,2,3,4,5];
// let newArr = arr.reduce((sum, val)=>{  //sum==accumulator
//     return sum+val;
// },0);
// console.log(newArr);

//=======================Find==========================
// let arr = [2,3,4,5,7];
// let newArr = arr.find((val)=>{
//     return val>3
// });
// console.log(newArr); // 4

//=======================every==========================
// let arr = [12,13,1,5,7];
// let newArr = arr.every((val)=>{
//     return val>3
// });
// console.log(newArr); // true , all need to be true

//=======================some==========================
// let arr = [2,3,4,5,7];
// let newArr = arr.some((val)=>{
//     return val>4
// });
// console.log(newArr); // false, only one need to be true

//=======================push==========================
// Purpose: Adds one or more elements to the end of an array.
// Returns: The new length of the array.
// array.push(element1, element2, ..., elementN);

// let fruits = ["apple", "banana"];
// let len = fruits.push("cherry", "mango");
// console.log(fruits,"-----------", len); // Output: ["apple", "banana", "cherry", "mango"]

//=======================pop==========================
// Purpose: Removes the last element from an array and returns that element.
// Returns: The removed element.
// array.pop();

// let numbers = [1, 2, 3, 4, 5];
// let lastNumber = numbers.pop();
// console.log(numbers); // Output: [1, 2, 3, 4]
// console.log(lastNumber); // Output: 5

//=======================shift==========================
// Purpose: Removes the first element from an array and returns that element.
// Returns: The removed element.
// array.shift();

// let colors = ["red", "green", "blue"];
// let firstColor = colors.shift();
// console.log(colors); // Output: ["green", "blue"]
// console.log(firstColor); // Output: "red"

//=======================unshift==========================
// Purpose: Adds one or more elements to the beginning of an array.
// Returns: The new length of the array.
// array.unshift(element1, element2, ..., elementN);

// let months = ["January", "February", "March"];
// let newLan = months.unshift("December", "November");
// console.log(months); // Output: ["December", "November", "January", "February", "March"]
// console.log(newLan); // Output: 5

//=======================slice==========================
// Purpose: Extracts a section of an array and returns a new array.
// Returns: A new array containing the extracted elements.
// array.slice(start, end);
// start: The index at which slicing begins(inclusive).
// end: The index at which slicing ends(exclusive).

// let numbers1 = [1, 2, 3, 4, 5];
// let slicedNumbers = numbers1.slice(1, 4);
// console.log(slicedNumbers); // Output: [2, 3, 4]

//=======================splice==========================
// Purpose: Adds or removes elements from an array.
// Returns: An array containing the removed elements.
// array.splice(start, deleteCount, element1, element2, ..., elementN);

// let colors1 = ["red", "green", "blue", "yellow"];
// colors1.splice(1, 2, "orange", "purple"); // Remove 2 elements starting from index 1 and add "orange" and "purple"
// console.log(colors1); // Output: ["red", "orange", "purple", "yellow"]

//=======================sort==========================
// Purpose: Sorts the elements of an array in place.
// Returns: The sorted array.
// array.sort(comparator);

// let numbers2 = [5, 3, 5, 2, 4];
// console.log(numbers2.sort());

// let numbers2 = [45, 2, 19, 8, 32];
// numbers2.sort((a, b) => a - b);
// console.log(numbers2); // Output: [1, 2, 3, 5, 8]

//=======================reverse==========================
// Purpose: Reverses the order of the elements in an array.
// Returns: The reversed array.
// array.reverse();

// let colors2 = ["red", "white", "green", "blue"];
// colors2.reverse();
// console.log(colors2); // Output: ["blue", "green", "red"]

//=======================concat==========================
// Purpose: Concatenates two or more arrays.
// Returns: A new array containing the elements of the original arrays.
// array.concat(array1, array2, ..., arrayN);

// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let array3 = [4, 5, 6];
// let concatenatedArray = array1.concat(array2, array3);
// console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

//=======================join==========================
// Purpose: Joins the elements of an array into a string.
// Returns: A string containing the elements of the array separated by the specified separator.
// array.join(separator);

// let colors3 = ["red", "green", "blue"];
// let joinedColors = colors3.join("-");
// console.log(joinedColors); // Output: "red-green-blue"

// let newArr = joinedColors.split("-");
// console.log(newArr); // Output: ["red", "green", "blue"]

//=======================indexOf==========================
// Purpose: Returns the index of the first occurrence of a specified element in an array.
// Returns: The index of the first occurrence of the specified element in the array, or -1 if not found.
// array.indexOf(element, fromIndex);

// let numbers3 = [1, 2, 3, 4, 3, 5];
// let index = numbers3.indexOf(3);
// console.log(index); // Output: 2

//=======================lastIndexOf==========================
// Purpose: Returns the index of the last occurrence of a specified element in an array.
// Returns: The index of the last occurrence of the specified element in the array, or -1 if not found.
// array.lastIndexOf(element, fromIndex);

// let colors4 = ["red", "green", "blue", "red"];
// let lastIndex = colors4.lastIndexOf("red");
// console.log(lastIndex); // Output: 3

//=======================includes==========================
// Purpose: Determines whether an array contains a specified element.
// Returns: true if the array contains the specified element, false otherwise.
// array.includes(element, fromIndex);

// let numbers4 = [1, 2, 3, 4, 5];
// let includesThree = numbers4.includes(3);
// console.log(includesThree); // Output: true

//find duplicate value using lastindex method
// let arr = [1,2,3,4,5,6,1,3];
// for (let i = 0; i < arr.length; i++) {
//     if(i !== arr.lastIndexOf(arr[i])){
//         console.log(arr[i]);
//     }
// }

// let arr = [1,2,3,4,5];
// arr.forEach(function (value) {
//     console.log(value);
// });

//==================================forEach
// let numbers = [2, 4, 6, 8];
// numbers.forEach((num, i, arr) => {
//     arr[i] = num * 2;
// });
// console.log(numbers);