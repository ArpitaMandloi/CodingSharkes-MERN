let num = 153;
let armstrong = num;
let sum = 0;
let digit;
let cube ;
for(let i = 0 ;num > 0 ;i++){
    digit = num % 10;
    cube = digit * digit * digit;
    sum = sum + cube;
    num = Math.floor(num / 10);
}
if(sum == armstrong){
  console.log("armstrong number");
}
else {
  console.log(" not armstrong number");
}