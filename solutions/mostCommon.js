const findBiggest= require("./biggestValue.js");

const mostCommon=(arr,map={},i=0)=>{
  if(i==arr.length){
    return findBiggest(map);
  }
  const val = arr[i];
  if(!map[val]){
    map[val]=1;
  }else{
    map[val] = map[val]+1;
  }
  return mostCommon(arr,map,i+1);
}
module.exports = mostCommon;
