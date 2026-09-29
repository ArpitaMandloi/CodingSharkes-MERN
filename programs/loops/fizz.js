// 16. Write a loop to print numbers from 1 to 50, but:
//   Print "Fizz" for multiples of 3.
//   Print "Buzz" for multiples of 5.
//   Print "FizzBuzz" for multiples of both 3 and 5.

let num1 = 3;
let num2 = 5;
let num = 5;

if(num % num1 == 0 && num % num2 == 0){
   console.log("FizzBuzz");
}
else if (num % 3 == 0){
  console.log("Fizz")
}
else{
  console.log("Buzz")
}