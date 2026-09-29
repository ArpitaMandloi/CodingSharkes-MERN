// Use Object.keys to create an array of keys and iterate over them to print each key - value pair.

let obj = {
    a: 1,
    b: 2,
    c: 3
};

let keys = Object.keys(obj);

for(let i = 0; i < keys.length; i++){
    console.log(keys[i], ":", obj[keys[i]]);
}