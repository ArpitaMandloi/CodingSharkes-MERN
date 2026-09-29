// 4. Write a program that counts the even and odd numbers in an array using forEach().
// let numbers = [1, 2, 3, 4, 5, 6];
// Output:
//   Even Numbers: 3
//   Odd Numbers: 3

let arr = [1, 2, 3, 4, 5, 6 , 9];

let countEven = 0;
let countOdd = 0;

arr.forEach(element => {
   if(element %2 == 0){
    countEven++;
   }else {
    countOdd++
   }
});
console.log("Even Count :",countEven);
console.log("Odd Count :",countOdd)