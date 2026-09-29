let number = 345;
let last = number % 10;
let first = number;
let digit;
for(let i = 0;number > 0 ; i++){
   digit = number % 10;
   first = digit;
   number = Math.floor(number / 10);

}
console.log("first digit :",first);
console.log("last digit :", last);