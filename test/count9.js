const solution = require('../solutions/count9.js');

const test =(arr,count)=>{
  if (solution(arr)==count){
    console.log("Count is correct");
  } 
  else{
    console.log("count is incorrect");
  }
}
console.log(test([9,9,2,2],2));
console.log(test([9,1,1,1],1));
console.log(test([9,9,9,1]),2);
