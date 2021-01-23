const palindromes = function(string) {
let concatenatedString = string.toLowerCase().replace(/ /g, "");
let processedString = concatenatedString.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
let reversedString = "";
for(let i = 0; i < processedString.length; i++) {
  reversedString = reversedString + processedString.charAt((processedString.length -1) - i);
}
console.log(reversedString);
if(processedString === reversedString) {
  return true;
}
return false;
}


module.exports = palindromes
