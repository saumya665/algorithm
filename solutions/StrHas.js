const checkChar=(string,char,i=0)=>{
  if(i==string.length){
    return false;
  }
  if(string[i]==char){
    return true;
  }
  return checkChar(string,char,i+1);
}
module.exports = checkChar;
