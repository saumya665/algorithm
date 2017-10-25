const b = {val:2};
const a = {val:1,next:b};
b.next = a;
const LL=(obj,refObj)=>{
  if(obj.next===refObj){
    return true;
  }
  if(!obj.next){ return false}
  return LL(obj.next,refObj);
  }
module.exports = LL;

//console.log(LL(a,a));
//console.log(LL(b,b));
