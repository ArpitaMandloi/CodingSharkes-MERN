// 4. Write a function that accepts multiple objects and merges them into a single object using Object.assign.

function mergeObjects(obj1, obj2, obj3) {
    return Object.assign({}, obj1, obj2, obj3);
}

let obj1 = { a: 1 };
let obj2 = { b: 2 };
let obj3 = { c: 3 };

let result = mergeObjects(obj1, obj2, obj3);

console.log(result);