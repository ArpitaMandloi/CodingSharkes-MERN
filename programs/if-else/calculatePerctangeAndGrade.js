//  	Write a program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and Computer. 
// Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A
// Percentage >= 80% : Grade B
// Percentage >= 70% : Grade C
// Percentage >= 60% : Grade D
// Percentage >= 40% : Grade E
// Percentage < 40% : Grade F

let maths = 0;
let Chemistry = 0;
let physics = 0;
let hindi = 0;
let english = 0;

let total = maths + Chemistry + physics + hindi + english;
let percent = (total / 500) * 100;
if(percent >= 90){
   console.log("Grade : A ");
}
else if(percent >= 80){
   console.log("Grade : B " );
}
else if (percent >= 70){
   console.log("Grade : C");
}
else if(percent >= 60){
   console.log("Grade : D " );
}
else if(percent >= 40){
   console.log("Grade : E " );
}
else if(percent < 40){
   console.log("Grade : F ");
}
