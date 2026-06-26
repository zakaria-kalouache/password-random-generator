const low ="qwertyuiopasdfghjklzxcvbnm";
const uper="ZXCVBNMLKJHGFDSAQWERTYUIOP";
const number="0123456789";
const symb="!@#$%^&*()_+=-";


const arry=  [low,uper,number,symb];
document.getElementById("Gen").addEventListener("click",function (){
  let x;
  let pass="";
  for (let i=0;i<12;i++)
  {
    const pool = Math.floor(Math.random()*4);
   x = Math.floor(Math.random()*arry[pool].length)

   pass =pass + arry[pool][x];




  }

console.log(pass);





});
