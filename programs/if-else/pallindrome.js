// 7. Write a program to check if a number is a palindrome 

let num = 232;
let prevNum = num;
let reverse ='';

for(let i = 0 ; i<=num ; i++){
   let digit = num % 10;
   reverse += digit;
   num = Math.floor(num / 10)

}
if(reverse == prevNum) console.log("pallindrom number");
else console.log("not a pallindrome");