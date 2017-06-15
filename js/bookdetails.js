
(function() {
  'use strict;'
  
var BOOKS_PERSISTENCE_KEY = 'bookstorage';  
var books = getBooks();
var bookDetailsTemplate = Handlebars.compile($('#bookDetailsTemplate').html());

window.onload = function displayBookDetails(evt) {
  evt.preventDefault();
  var url = evt.target.URL; 
  var id = url.substr(url.indexOf('?id=')+4);

  var data = {
    book: books[id]
  }
  var html = bookDetailsTemplate(data);
  $('#bookDetails').html(html);
}
  
function getBooks() {
  var b = localStorage[BOOKS_PERSISTENCE_KEY];
  if (b) {
    return JSON.parse(b);
  }
  else {
    return [];
  }  
}
  
})();