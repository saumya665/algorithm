const isPrime=(num,i=2)=>{
  if(num===i){
    return true;
  }
  if(num%i==0){
    return false;
  }
  return isPrime(num,i+1);
}

const iterate=(num,arr=[])=>{
  if(num==1){
    return arr;
  }
  if (isPrime(num)==true){
    arr.push(num);
  }
  return iterate(num-1,arr);
}
module.exports = iterate;
