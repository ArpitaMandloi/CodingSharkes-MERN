let sum = 0;
let num = 50;
for(let i = 0 ; i <= num ; i++){
   let count = 0;
   for(let j = 1 ; j <= i ; j++){
    if(i % j == 0){
      count++;
    }
   }
   if(count == 2){
      sum = sum + 1;
    }
}
console.log(sum);