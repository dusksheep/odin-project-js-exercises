const ftoc = function(tempF) {
  let tempC = (tempF - 32) / 1.8;
  let tempCRounded = Math.round(tempC * 10) / 10
  return tempCRounded;
}

const ctof = function(tempC) {
  let tempF = (tempC * 1.8) + 32;
  let tempFRounded = Math.round(tempF * 10) / 10
  return tempFRounded;
}


module.exports = {
  ftoc,
  ctof
}
