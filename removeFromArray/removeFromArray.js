
const removeFromArray = function(...args) {
  const arr = args[0];
  let i = 1;
  
  for(i = 1; i < args.length; i++) {
    let indexToRemove = arr.indexOf(args[i]);
    
    if(indexToRemove === -1) {
      continue;
      
    } else {
      arr.splice(indexToRemove, 1);
    }  
  }
  return arr;
}




module.exports = removeFromArray
