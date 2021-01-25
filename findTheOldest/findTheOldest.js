let findTheOldest = function(people) {
let oldest = "";
let arr = [];
let age = 0;

indexOfTheOldest = 0;
  for(let i = 0; i < people.length; i++) {
    arr = Object.values(people[i]);
    if(arr[2] === undefined){
      arr[2] = new Date();  
      age = arr[2].getFullYear() - arr[1];
        
    } else {
        age = arr[2] - arr[1]; 
        }   
    
    if(age > oldest) {
    oldest = age;     
    indexOfTheOldest = i;
    } 
  }
  return people[indexOfTheOldest];
}


module.exports = findTheOldest
