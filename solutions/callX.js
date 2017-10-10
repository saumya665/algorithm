const callX=(num,funct,i=0)=>{
  if(i<num){
    funct();
    callX(num,funct,i+1);
  }
}

module.exports = callX;
