const solution = require('../solutions/factorial.js');

const test =(a,b)=>{
  if(solution(a)==b){
    console.log("Answer is correct");
  }
  else{
  console.log("Answer is incorrect");
  }
}

test(5,120);
test(3,6);
test(4,20);
