const fibonacci = function(index) {
  if(index < 1) {
    return "OOPS";
  }

  let fibonacci = 0;
  let i = 0;
  let number = 1;
  let lastNumber = 0;
  for(i = 0; i < +index; i ++) {
    lastNumber = fibonacci;
    fibonacci = number + fibonacci;
    number = lastNumber; 
}

return fibonacci;
}


module.exports = fibonacci
