const prime=(num,i=2)=>{
  if(num===i){
    return true;
  }
   if(num%i==0){
    return false;
  }
  return prime(num,i+1);
}
module.exports = prime;
