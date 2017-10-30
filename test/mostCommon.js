const solution = require("../solutions/mostCommon.js");

const test =(arr,num)=>{
  if (solution(arr)==num){
    console.log("Output is correct");
  }
  else{
     console.log("Output is incorrect");
  }
}
test([1,1,1,2,2,3],1);
test([2,2,2,3,1],2);
test([4,4,1,2],1);
