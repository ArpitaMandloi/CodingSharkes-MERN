let amount = 10900;
let reminder = 0;

      if (amount >= 500) {
        console.log(" 500 Rupees notes : ", Math.floor(amount / 500));
        reminder = amount % 500;
      } else {
        console.log("500 Rupees notes : 0 ");
      }


       if (amount == 200  ) {
        console.log(" 200 Rupees notes : ", Math.floor(amount / 200));
      } else if(reminder >= 200) {
           console.log("200 Rupees notes : ", Math.floor(reminder / 200));
         reminder = amount % 200;     
      }else {
        console.log("200 Rupees notes : 0");
      }


       if (amount == 100  ) {
        console.log(" 100 Rupees notes : ", Math.floor(amount / 100));
      } else if(reminder >= 100) {
           console.log("100 Rupees notes : ", Math.floor(reminder / 100));
         reminder = amount % 100;
      }else {
        console.log("100 Rupees notes : 0");
      }


      if (amount == 50  ) {
        console.log(" 50 Rupees notes : ", Math.floor(amount / 50));
      } else if(reminder >= 50) {
           console.log("50 Rupees notes : ", Math.floor(reminder / 50));
        reminder = amount % 50;
      }else {
        console.log("50 Rupees notes : 0");
      }


      if (amount == 20  ) {
        console.log(" 20 Rupees notes : ", Math.floor(amount / 20));
      } else if(reminder >= 20) {
           console.log("20 Rupees notes : ", Math.floor(reminder / 20));
        reminder = amount % 20;
      }else {
        console.log("20 Rupees notes : 0");
      }


       if (amount == 10  ) {
        console.log(" 10 Rupees notes : ", Math.floor(amount / 10));
      } else if(reminder >= 10) {
           console.log("10 Rupees notes : ", Math.floor(reminder / 10));
        reminder = amount % 10;
        }else {
        console.log("10 Rupees notes : 0");
      }