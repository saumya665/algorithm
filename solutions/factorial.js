const factorial=(num,product=1)=>{
  if (num==1){
      return product;
  }
  else{
    product = product*num;
  }
  return factorial(num-1,product);
}
module.exports = factorial;
