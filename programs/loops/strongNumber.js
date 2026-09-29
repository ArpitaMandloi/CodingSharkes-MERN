let num = 145;
let original = num;
let digit;
let sum  = 0;
while(num > 0){
     digit = num % 10;
     
     let fact = 1;
     for(let i = 1; i <= digit ; i++){
          fact = fact * i;
     }
    num = Math.floor(num / 10);
      sum = sum + fact;
}
if(sum === original){
          console.log("strong number");
     }
     else {
          console.log("not a strong number");
     }

