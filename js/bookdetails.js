(function() {
  'use strict;'
  
var bookDetailsTemplate = Handlebars.compile($('#bookDetailsTemplate').html());

window.onload = displayBookDetails;
  
function displayBookDetails(bookIx) {
     var data = {
      book: books[bookIx]
    }
    var html = bookDetailsTemplate(data);
    $('#bookTemplate').html(html);
}
  
})();