const getDiv=(num,max,i=1)=>{
  if(i==num){
    return max;
  }
  if(num%i==0){
    max =i;
  }
 return getDiv(num,max,i+1);
}
module.exports = getDiv;
