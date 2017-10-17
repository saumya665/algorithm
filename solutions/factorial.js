const factorial=(num,product=1)=>{
  if (num==1){
      return product;
  }
  else{
    product = product*num;
  }
  return factorial(num-1,product);
}
console.log(factorial(5));
  console.log(factorial(4));
console.log(factorial(3));
module.exports = factorial;
