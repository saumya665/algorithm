const solution =require('../solutions/biggestValue.js');

const test=(obj,tObj)=>{
  if(solution(obj)==tObj){
    console.log("Correct value");
  }
  else{
  console.log("Incorrect value");
  }
}
test({1:3,2:5,10:7},10);
test({1:10,3:5,7:7},1);
test({3:3,5:5,1:1},1);
