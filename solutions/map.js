
const map = (obj, func,i=0)=>{
  key = Object.keys(obj);
  objVal = Object.values(obj);
  if(i==key.length){
    return;
  }
  func1(key[i],objVal[i]);
  map(obj,func1,i+1);
}

module.exports = map;
