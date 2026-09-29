// 6. Write a program to check if a number is divisible by both 3 and 5.

let num1 = 3;
let num2 = 5;
let num = 345;

if(num % num1 == 0 && num % num2 == 0){
   console.log("number :"+ num + " is divisible by " + "3 and 5");
}
else if (num % 3 == 0){
  console.log("number :"+ num + "is divisible by only 3")
}
else{
  console.log("number :"+ num + "is divisible by only 5")
}