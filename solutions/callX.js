const callX=(num,funct,i=1)=>{
  if(i==num+1){
    return;
  }
  else{
    funct(i);
  }
  return callX(num,funct,i+1);
}

module.exports = callX;
