module.exports = function getZerosCount(number, base) {
  let num = number;
  let b = base;
  for(let i = 2; i <= b; i++){
    let a = 0;
      while(b % i == 0){
        a++;
        b = Math.floor(b/i);
      }
    let x = 0;
    let  num2 = number;
      while (num2/i > 0){
        x+=Math.floor(num2/i);
        num2 = Math.floor(num2/i);
      }
    if(num > x/a){ 
      num=x/a;
    } 

  }
return Math.floor(num);
}