(function() {
  'use strict;'
  
  var CART_PERSISTENCE_KEY = 'shoppingcartstorage'; 
  
  var cart = getCart();
  
  var shoppingCartTemplate = Handlebars.compile($('#shoppingCartTemplate').html());
  
  window.onload = function displayCart() {
    var data = {
      cart: cart
    }
    var html = shoppingCartTemplate(data);
    $('#shoppingCartDiv').html(html);
    $('#placeOrder').on('click', placeOrder);
  }
  
  function placeOrder() {
    alert("Thank you for your order")
    clearCart();
  }
  
  function getCart() {
    var c = localStorage[CART_PERSISTENCE_KEY];
    var myCart = new Cart();
    if (c !== "undefined" || c !== undefined) {
      myCart = JSON.parse(c);
    }
    return updateOrderTotals(myCart);
  }
  
  function updateOrderTotals(cart) {
    var myCart = new Cart();
    var orderPrice = 0.0;
    
    for (var ix = 0; ix < cart.orders.length; ix++) {
      var origOrder = cart.orders[ix];
      orderPrice += parseFloat(origOrder.totalPrice);
      var order = new Order();
      order.title = origOrder.title;
      order.price = parseFloat(origOrder.price);
      order.quantity = parseInt(origOrder.quantity);
      order.totalPrice = parseFloat(origOrder.totalPrice);
      myCart.orders.push(order);
    }
    myCart.orderPrice = orderPrice.toFixed(2);
    myCart.tax = parseFloat((0.09 * orderPrice).toFixed(2));
    myCart.shipping = 5.0;
    myCart.totalPrice = (orderPrice + myCart.tax + myCart.shipping).toFixed(2);
    
    return myCart;
  }
  

  function clearCart() {
    cart = new Cart();
    saveCart();
  }
  
  function saveCart() {
    localStorage[CART_PERSISTENCE_KEY] = JSON.stringify(cart);
  }
  
  function Order(book) {
    this.title = book.title;
    this.price = book.price;
    this.quantity += 1;
    this.totalPrice = book.price;
  }

  function Order() {
    this.title = "";
    this.price = 0.0
    this.quantity = 0;
    this.totalPrice = 0.0;
  }
  
  function Cart() {
    this.orders = [];
    this.orderPrice = 0;
    this.tax = 0;
    this.shipping = 0;
    this.totalPrice = 0;
  }
  
})();