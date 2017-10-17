const find7m=(num, i=num)=>{
  if(i%7==0){
    return i;
  }
  return find7m(num, i+1);
}

module.exports = find7m;
