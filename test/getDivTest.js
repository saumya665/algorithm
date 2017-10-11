const solution = require('../solutions/getDiv.js');

const test=(a,b)=>{
  if(solution(a)===b){
    console.log('The solution is correct');
  }
  else{
    console.log('Incorrect output');
  }
}

test(10,5)
test(20,10);
test(28,14);
