var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var itemPrice = Math.floor(Math.random()*100)+1;
  var item = {itemName: itemName, itemPrice: itemPrice};
  cart.push(item);
  console.log(cart);
  return ` ${itemName} has been added to your cart.`
}
addToCart("bananas");
addToCart("nuts");





















/*
function addToCart(item) {
  var itemObj = {};
  var price = Math.floor(Math.random()*100)+1;
  itemObj = {[item]:price};
  cart.push(itemObj);
  //console.log(cart);
  return item + " has been added to your cart."
}
function viewCart() {
  if (cart.length===0) {
    return "Your shopping cart is empty."
  }
  else {
    var output = "In your cart, you have ";
    let value = "";
    for (var i = 0; i< cart.length; i++ ) {
      //var object = cart[i];
      //console.log(object);
      output +=  `${cart[0]['itemName']} at $${cart[0]['price']}`;
      if (i === cart.length-1) {
        output += "."
      }
      else if(i===cart.length-2) {
        output += ", and "
      }
      else {
        output += ", "
      }
    }
    console.log(output);
    return output;
  }
}

function total() {
   var sum = 0;
for (var i = 0; i< cart.length; i++ ) {
      var object = cart[i];
      sum += parseInt(Object.values(object)[0]);
}
//console.log(sum)
return sum;
}

function removeFromCart(itemName) {
  for(var i=0;i<cart.length;i++) {
    var object = cart[i];
    if (Object.keys(object)[0] === itemName) {
      cart.splice(i,1);
     // console.log(cart);
      return cart;
    }
  }
 // console.log(cart);
  return "That item is not in your cart."
}
function placeOrder() {
  return "Sorry, we don't have a credit card on file for you."
}
function placeOrder(cardNumber) {
  var cost = total();
  cart = [];
  console.log(`Your total cost is ${cost}, which will be charged to the card ${cardNumber}.`)
  return `Your total cost is $${cost}, which will be charged to the card ${cardNumber}.`
}

addToCart("bananas");
addToCart("nuts");
addToCart("oatmeal");
viewCart();
removeFromCart("nuts");
placeOrder(123123123);
*/