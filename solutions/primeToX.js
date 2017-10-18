const isPrime = require('../solutions/prime.js');

const iterate=(num,arr=[])=>{
  if(num==1){
    return arr;
  }
  if (isPrime(num)){
    arr.push(num);
  }
  return iterate(num-1,arr);
}
module.exports= iterate;
