const solution = require("../solutions/findMax.js");

const LL1={
  value:1,next:{value:2,
    next:{value:3,
      next:{value:4,
        next:null}}}};

const LL2={value:1,next:null};

const LL3={value:5, next:{
  value:7,next:{
    value:9, next:null}}};

const test=(ll,val)=>{
  if(solution(ll)===val){
    console.log("Right output");
  }
  else{
    console.log("Incorrect output");
  }
}

test(LL1,4);
test(LL2,4);
test(LL3,9);
