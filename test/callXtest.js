const solution = require('../solutions/callX.js');

sum=0;
const t =()=>{
  return sum = sum+1;
}

solution(5,t);
if(sum===5){
  console.log('Correct');
}

solution(3,t);
if(sum===3){
  console.log('correct');
}

solution(2,t);
if(sum===2){
  console.log('correct');
}
