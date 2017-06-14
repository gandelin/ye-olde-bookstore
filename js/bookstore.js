(function() {
  'use strict';

var books = 
      [
        { "id": 0,
          "ISBN": "978-0441569595",
          "title": "Neuromancer",
          "description": "Case had been the sharpest data-thief in the business, until vengeful former employees crippled his nervous system. But now a new and very mysterious employer recruits him for a last-chance run.",
          "author": "William Gibson",
          "genre": "scifi",
          "price": "8.99",
          "image": "neuromancer.jpg"
        },
        {
          "id": 1,
          "ISBN": "978-0553293357",
          "title": "Foundation",
          "description": "For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. But only Hari Sheldon, creator of the revolutionary science of psychohistory, can see into the future--to a dark age of ignorance, barbarism, and warfare that will last thirty thousand years." ,
          "author": "Isaac Asimov",
          "genre": "scifi",
          "price": "14.50",
          "image": "foundation.jpg"
        },
        { "id": 2,
          "ISBN": "978-0553380163",
          "title":"A Brief History of Time",
          "description": "A landmark volume in science writing by one of the great minds of our time, Stephen Hawkingâ€™s book explores such profound questions as: How did the universe begin-and what made its start possible?",
          "author": "Stephen Hawking",
          "genre": "non-fiction",
          "price": "12.00",
          "image": "abriefhistoryoftime.jpg"
        },
        { "id": 3,
          "ISBN": "978-1503280786",
          "title": "Moby Dick",
          "description": "Ishmael narrates the monomaniacal quest of Ahab, captain of the whaler Pequod, for revenge on the albino sperm whale Moby Dick",
          "author": "Herman Melville",
          "genre": "classic",
          "price": "19.99",
          "image": "moby__dick.jpg"
        },
        { "id": 4,
          "ISBN": "978-0316769488",
          "title": "Catcher In The Rye",
          "description": "The novel's protagonist Holden Caulfield has become an icon for teenage rebellion. The novel also deals with complex issues of identity, belonging, loss, connection, and alienation.",
          "author": "J. D. Salinger",
          "genre": "classic",
          "price": "6.49",
          "image": "catcherintherye.jpg"
        },
        { "id": 5,
          "ISBN": "978-0812550702",
          "title": "Ender's Game",
          "description": "Ender's Game presents an imperiled mankind after two conflicts with the buggers, an insectoid alien species. In preparation for an anticipated third invasion, children, including the novel's protagonist, Ender Wiggin, are trained from a very young age through increasingly difficult games including some in zero gravity, where Ender's tactical genius is revealed.",
          "author": "Orson Scott Card",
          "genre": "sci-fi",
          "price": "8.20",
          "image": "endersgame.png"
        },
        { "id": 6,
          "ISBN": "978-0547928227",
          "title": "The Hobbit",
          "description": "The Hobbit follows the quest of home-loving hobbit Bilbo Baggins to win a share of the treasure guarded by the dragon, Smaug.",
          "author": "JRR Tolkien",
          "genre": "fantasy",
          "price": "18.59",
          "image": "thehobbit.jpg"
        }
      ];
  
  var bookTableTemplate = Handlebars.compile($('#bookTableTemplate').html());
  
  $('#viewBtn').on('click', displayBookTable);
  
  function displayBookTable() {
    var data = {
      books : books
    }
    var html = bookTableTemplate(data);
    $('#bookTableDiv').html(html);
  }
  
})();