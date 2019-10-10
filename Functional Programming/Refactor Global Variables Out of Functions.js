// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];



function add (arr, bookName) {
  var editedBookList = [...arr];
  editedBookList.push(bookName);
  return editedBookList;
  
}


function remove (arr, bookName) {
  var editedBookList = [...arr];
  if (editedBookList.indexOf(bookName) >= 0) {
    
    editedBookList.splice(editedBookList.indexOf(bookName),1);
    return editedBookList

    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(bookList);