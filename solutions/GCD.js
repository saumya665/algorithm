const GCD=(a,b,i=0,ans=0)=>{
  if(i>a||i>b){
    return ans;
  }
  if(a%i==0&&b%i==0){
    ans = i;
  }
  return GCD(a,b,i+1,ans);
}
module.exports = GCD;
