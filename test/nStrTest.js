const solution = require('../solutions/nStr.js');

const test=(inStr,num,finalStr)=>{
  if(solution(inStr,num)===finalStr){
    console.log('Correct');
  }
  else{
    console.log('Incorrect');
  }
}
test('hello',3, 'hellohellohello');
test('eat',2,'eateat');
test('bye',2,'bye');
