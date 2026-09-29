let number = 1234;
let digit = 0;
let count = "";
for(var i = 1 ; number > 0 ; i++){
   digit = number % 10;
   count = count + digit;
   number = Math.floor(number / 10);
   
   
}
console.log(count );