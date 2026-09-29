let arr = [1, 2, 2, 3, 4, 4 , 5 , 1 , 6];
let arr1 = [];
let element = 0;

for (let i = 0; i < arr.length; i++) {
   for(let j = i+1 ; j < arr.length;j++){
    if(arr[i] == arr[j]){
        arr1.push(arr[i]);
        break;
    }
   }
  

    element = arr[i];
}
 console.log(arr1);