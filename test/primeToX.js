const solution = require('../solutions/primeToX.js');

const test=(num,result)=>{
  if(solution(num).toString()==result.toString()){
    console.log("Both arrays are the same");
  }
  else{
    console.log("Arrays are incorrect");
  }
}
test(7,[7,5,3,2]);
test(15,[13,11,7,5,3,2]);
test(5,[5,3,2]);
