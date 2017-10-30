const findMax=(linkedL,head=linkedL,max=0)=>{
  if(linkedL==null||linkedL.next===head){
    return max;
  }
  if(linkedL.value>max){
    max = linkedL.value;
  }
  return findMax(linkedL.next,max);
}

module.exports = findMax;

