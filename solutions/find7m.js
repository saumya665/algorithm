const find7m=(num, i=num)=>{
  if(i%7==0){ //if number is divisible by 7
    return i;
  }
  return find7m(num, i+1);
}

module.exports = find7m;
