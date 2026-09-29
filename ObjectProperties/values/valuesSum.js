let obj = { a: 1, b: 2, c: 3 };

let values = Object.values(obj);

let sum = 0;

for(let i = 0; i < values.length; i++){
    sum += values[i];
}

console.log(sum);