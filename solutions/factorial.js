const factorial=(num,product=1,i=1)=>{
  if (i==num+1){
      return product;
  }
  else{
    product = product*i
  }
  return factorial(num,product,i+1);
}
module.exports = factorial;
