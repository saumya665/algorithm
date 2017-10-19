const solution = require('../solutions/StrHas.js');

const test=(str,char)=>{
  if (solution(str,char)){
    console.log("character was found");
  }
  else{
    console.log("Char was not found");
  }
}
test('Saumya','a');
test('friends','s');
test('table','r');
