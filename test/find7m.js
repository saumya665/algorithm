const solution = require('../solutions/find7m.js');

const test =(num,result)=>{
  if(solution(num)==result){
    console.log("answer is correct");
  }
  else{
    console.log("Incorrect answer");
  }
}

test(12,14);
test(20,21);
test(20,17);
