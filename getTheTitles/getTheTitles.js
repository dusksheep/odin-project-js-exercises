const getTheTitles = function(books) {
let arr = [];
  for(let i = 0; i < books.length; i++) {
    let bookObj = books[i]; 
      arr.push(Object.values(bookObj)[0]);
      console.log(arr);
  }
  return arr;
} 




module.exports = getTheTitles;
