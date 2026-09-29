 // Write a program to find the maximum value in an object using Object.values.
 let obj = { a: 1, b: 4, c: 3 };

let values = Object.values(obj);

let max = 0;

for(let i = 0; i < values.length; i++){
    if(max < values[i]){
          max = values[i];
    }
}

console.log(max);