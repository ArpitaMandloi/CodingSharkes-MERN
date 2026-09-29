// 5. Create a nested object and use Object.assign to copy it.Modify the nested object in the copy and observe the effect on the original object.
let target = { a: 1, b: {c : 3 , d : 4} };
let source = {};


function copy(target , source){
  Object.assign(source,target);
  source.a = 3;
  source.b.c = 4;
  console.log(target , "<---------original");
  console.log(source , "<---------modified");
}

copy(target , source);