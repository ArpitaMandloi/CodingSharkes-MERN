let arr = [2 , 4 , 8 , 1 , 2 , 1 , 8];
let sum = 0;
let maxgirls = 0;
let start = 0;
for(let i = 1 ; i <= start + 2 ; i++){
    sum += arr[i];
     if(sum > maxgirls){
      maxgirls = sum;
     }
    
}
console.log(maxgirls);
 