let number = 221;
let freq = 0;
let j = 0;
for(let i = 1 ; number < 0 ;i++){
   if(number[i] === number[i+1]){
    freq = freq + 1;
   }
}
console.log(freq);