const findMax=(linkedL,max=0)=>{
  if(linkedL==null){
    return max;
  }
  if(linkedL.value>max){
    max = linkedL.value;
  }
  return findMax(linkedL.next,max);
}

module.exports = findMax;

