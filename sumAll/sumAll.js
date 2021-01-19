const sumAll = function(startInt, lastInt) {
  
  if(isNaN(startInt)===true||isNaN(lastInt)===true||startInt < 0||lastInt < 0||
  typeof(startInt) === "string" || typeof(lastInt) === "string")  {
    return "ERROR";
  }

  let s = startInt;
  let f = lastInt;
  let sumArray = [];
  let sum = 0;
  
  if(s > f) {
    let t = s;
    s = f;
    f = t;
  }

  for(let i = s; s <= f; s++) {
    sumArray.push(s);
    }
  
  for(i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];  
    }
  console.log(sum);
  return sum;
}



module.exports = sumAll
