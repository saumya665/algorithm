const solution = require('../solutions/primeToX.js');

const compareArr=(a1,a2,i=0)=>{
    if(i==a1.length){
      return true;
    }
    if(a1[i]!=a2[i]){
      return false;
    }
  return compareArr(a1,a2,i+1);
}

const test=(num,result)=>{
  const expected=solution(num);
  compareArr(expected,result);
  if(compareArr(expected,result)==true){
     console.log("Both arrays are the same");
  }
  else{
    console.log("Arrays are incorrect");
  }
}
test(7,[7,5,3,2]);
test(15,[13,11,7,5,3,2]);
test(5,[5,3,2]);
