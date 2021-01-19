let reverseString = function(parameter) {
  let splittedString = parameter.split("");
  

  

  let concatenatedString = "";

  for(let i = 0; i < splittedString.length; i++) {
    concatenatedString = concatenatedString + splittedString[(splittedString.length - 1) - i];
    
    }

    return concatenatedString;
}    
  

module.exports = reverseString
