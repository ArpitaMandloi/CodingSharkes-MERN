let number = 223;
let digit = 0;
let count = 0;
for(var i = 0 ; i <= number ; i++){
   digit = number % 10;
   count = count + digit;
   number = Math.floor(number / 10);
   
   
}
console.log(count );