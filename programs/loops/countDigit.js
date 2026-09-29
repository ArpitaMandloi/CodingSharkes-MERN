let number = 22345;
let digit = 0;
let count = 0;
for(var i = 0 ; i <= number ; i++){
   digit = number % 10;
   count++;
   number = number / 10;
   
   
}
console.log(count + 1);