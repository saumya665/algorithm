const solution = require('../solutions/GCD.js');

const test = (a,b,t)=>{
  if(solution(a,b)==t){
    console.log('Correct output');
  }else{
  console.log('Incorrect output');
  }
}
test(10,20,10);
test(10,15,5);
test(3,9,6);
