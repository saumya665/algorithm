const LL=(obj,refObj)=>{
  if(obj.next===refObj){
    return true;
  }
  if(!obj.next){ return false}
  return LL(obj.next,refObj);
  }
module.exports = LL;

