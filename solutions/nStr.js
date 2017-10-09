const nStr=(inStr,num,i=0,outStr='')=>{
  if(i==num){
    return outStr;
  }
  outStr=outStr+inStr;
  return nStr(inStr,num,i+1,outStr);
}


module.exports = nStr;
