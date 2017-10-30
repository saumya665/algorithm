const find7m=(num)=>{
  if(num%7==0){ //if number is divisible by 7
    return num;
  }
  return find7m(num+1);
}

module.exports = find7m;
