// 5. Write a program that converts all names in the given array to uppercase using forEach().
// let names = ["john", "mary", "peter"];
// Output:
//   ["JOHN", "MARY", "PETER"]

let names = ["john", "mary", "peter"];

names.forEach((element, index) => {
    names[index] = element.toUpperCase();
});

console.log(names);
