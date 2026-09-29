// Create a shallow copy of an object using Object.assign.Then modify the copied object and verify the result.
let target = { a: 1, b: 2 };
let source = {};


function copy(target , source){
  Object.assign(source,target);
  source.a = 3;
  source.b = 4;
  console.log(target , "<---------original");
  console.log(source , "<---------modified");
}

copy(target , source);