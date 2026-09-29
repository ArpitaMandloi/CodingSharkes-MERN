let amount = 100;
let withdrwan =1200;

if(amount == 0){
  console.log("no amount")
}else if(withdrwan % 5 == 0 && withdrwan <= amount) {
   withdrwan = (amount - withdrwan) - 0.25;
   console.log("received amount :"  , withdrwan);
}else {
   console.log("given amount is wrong");
}


