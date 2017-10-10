const callX=(num,funct,i=0)=>{
  if(i==num){
    return;
  }
    funct();
  return callX(num,funct,i+1);
}

module.exports = callX;
