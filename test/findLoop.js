const solution = require("../solutions/findLoop.js");
const b = {val:1};
const a ={val:2};
a['next']=b;
b['next']=a;

const r = {val:5};

const z={val:2};
const n = {val:1};
n['next']=z;
const test=(obj1,obj2,TF)=>{
  if (solution(obj1,obj2)==TF){
    console.log("expected output");
  }
  else{
    console.log("Unexpected output");
  }
}
test(r,r,false);
test(b,b,true);
test(z,z,false);
