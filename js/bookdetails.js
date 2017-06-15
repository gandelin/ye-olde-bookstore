
(function() {
  'use strict;'
  
var BOOKS_PERSISTENCE_KEY = 'bookstorage';
var CART_PERSISTENCE_KEY = 'shoppingcartstorage'; 
  
var books = getBooks();
var selectedBook = {};
var cart = getCart();

var bookDetailsTemplate = Handlebars.compile($('#bookDetailsTemplate').html());
  
window.onload = function displayBookDetails(evt) {
  evt.preventDefault();
  var url = evt.target.URL; 
  var id = url.substr(url.indexOf('?id=')+4);
  selectedBook = books[id];
  
  var data = {
    book: selectedBook
  }
  var html = bookDetailsTemplate(data);
  $('#bookDetails').html(html);
  $('#addToCart').on('click', addBookToCart);
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
  
function addBookToCart(evt) {
  evt.preventDefault();
  var order = searchCart(selectedBook.title);
  if (order) {
    order.quantity++;
    order.totalPrice = (parseFloat(order.price) * order.quantity).toFixed(2);
  }
  else {
    order = new Order(selectedBook);
    cart.orders.push(order);
  }
  saveCart(cart);
}

function getCart() {
  var c = localStorage[CART_PERSISTENCE_KEY];
  
  if (c !== "undefined" || c !== undefined) {
    return JSON.parse(c);
  }
  else {
    return new Cart();
  }  
}

function initializeCart() {
  cart.orders = [];
}
  
function saveCart(cart) {
  localStorage[CART_PERSISTENCE_KEY] = JSON.stringify(cart);
}

function Order(book) {
  this.title = book.title,
  this.price = book.price,
  this.quantity = 1,
  this.totalPrice = book.price
}
  
function Cart() {
  this.orders = [];
  this.orderPrice = 0;
  this.tax = 0;
  this.shipping = 0;
  this.totalPrice = 0;
}

  function searchCart(title) {
    var order;
    for (var ix = 0; ix < cart.orders.length; ix++) {
      if (title == cart.orders[ix].title) {
        order = cart.orders[ix];
        break;
      }
    }
    return order;
  }
})();