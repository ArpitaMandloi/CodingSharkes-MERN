// 3. Find the Maximum Number
//    Given a list of numbers, use reduce to find the maximum number.
//    Example:
//    Input: [4, 5, 1, 9, 2]
//    Output: 9

let arr = [4, 5, 1, 9, 2];

let newArr = arr.reduce((maxi , val)  =>{
      if(val > maxi) maxi = val;
      return maxi;
},arr[0] );
console.log(newArr);