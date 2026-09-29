 // Use Object.assign to add new properties to an existing object.

let target = { a: 1, b: 2 };
let source = { d: 4, c: 5 };
Object.assign(target, source);
target.a = 2;
target.b = 3;
console.log(target);