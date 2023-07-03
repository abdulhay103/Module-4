// JavaScript
var cart = [];

function addToCart() {
  var productId = document.getElementById("productId").value;
  var productName = document.getElementById("productName").value;
  var productPrice = parseFloat(document.getElementById("productPrice").value);
  var quantity = parseInt(document.getElementById("quantity").value);

  // Validate input values
  if (productId.trim() === "" || productName.trim() === "" || isNaN(productPrice) || isNaN(quantity)) {
    alert("wrong input")
    return;
  }

  // Check if the product already exists in the cart
  var existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    existingItem.quantity += quantity;
    existingItem.subtotal = existingItem.quantity * existingItem.productPrice;
  } else {
    var newItem = {
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      quantity: quantity,
      subtotal: productPrice * quantity
    };

    cart.push(newItem);
  }

  displayCart();
}

function displayCart() {
  console.log("Shopping Cart:");
  console.log("--------------");

  cart.forEach(item => {
    console.log("Product ID: " + item.productId);
    console.log("Product Name: " + item.productName);
    console.log("Price: $" + item.productPrice);
    console.log("Quantity: " + item.quantity);
    console.log("Subtotal: $" + item.subtotal);
    console.log("--------------");
  });
}
