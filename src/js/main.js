// JavaScript
var cart = [];

function addToCart() {
  var productId = document.getElementById("productId").value;
  var productName = document.getElementById("productName").value;
  var productPrice = parseFloat(document.getElementById("productPrice").value);
  var quantity = parseInt(document.getElementById("quantity").value);

  // Validate input values
  if (productId.trim() === "" || productName.trim() === "" || isNaN(productPrice) || isNaN(quantity)) {
    console.log("Invalid input values. Please enter valid values.");
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
  let tbody = document.getElementById('tbody')
  let ptag = document.getElementById("ptagg")
  console.log("Shopping Cart:");
  console.log("--------------");

  cart.forEach(item => {
    // ptag.value = item.productId;
    console.log("Product ID: " + item.productId);
    console.log("Product Name: " + item.productName);
    console.log("Price: $" + item.productPrice);
    console.log("Quantity: " + item.quantity);
    console.log("Subtotal: $" + item.subtotal);
    console.log("--------------");
  });
}

console.log(cart);



// // JavaScript
// var cart = [];

// function addToCart() {
//   var productId = document.getElementById("productId").value;
//   var productName = document.getElementById("productName").value;
//   var productPrice = parseFloat(document.getElementById("productPrice").value);
//   var quantity = parseInt(document.getElementById("quantity").value);

//   // Validate input values
//   if (productId.trim() === "" || productName.trim() === "" || isNaN(productPrice) || isNaN(quantity)) {
//     console.log("Invalid input values. Please enter valid values.");
//     return;
//   }

//   // Check if the product already exists in the cart
//   var existingItem = cart.find(item => item.productId === productId);

//   if (existingItem) {
//     existingItem.quantity += quantity;
//     existingItem.subtotal = existingItem.quantity * existingItem.productPrice;
//   } else {
//     var newItem = {
//       productId: productId,
//       productName: productName,
//       productPrice: productPrice,
//       quantity: quantity,
//       subtotal: productPrice * quantity
//     };

//     cart.push(newItem);
//   }

//   displayCart();
//   window.location = "../../index.html"
// }

// function displayCart() {
//   let tbody = document.getElementById("tbody");
//   console.log("Shopping Cart:");

//   alert("hello")

// //     for(product of cart){
// //       tbody.innerHTML += `<tr>
// //   <td
// //     class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
// //   >
// //     <div class="flex">
// //       <div class="ml-3">
// //         <p class="text-gray-900 whitespace-no-wrap" id="pName">
// //           ${product.productName}
// //         </p>
// //         <p class="text-gray-600 whitespace-no-wrap">${product.productId}</p>
// //       </div>
// //     </div>
// //   </td>
// //   <td
// //     class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
// //   >
// //     <p class="text-gray-900 whitespace-no-wrap">$${product.productPrice}</p>
// //     <p class="text-gray-600 whitespace-no-wrap">USD</p>
// //   </td>
// //   <td
// //     class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
// //   >
// //     <p class="text-gray-900 whitespace-no-wrap">
// //       ${product.quantity}
// //     </p>
// //   </td>
// //   <td
// //     class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
// //   >
// //   <p class="text-gray-900 whitespace-no-wrap">$${product.subTotal}</p>
// //     <p class="text-gray-600 whitespace-no-wrap">USD</p>
// //   </td>
// //   <td
// //     class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
// //   >
// //     <button
// //       type="button"
// //       class="inline-block text-gray-500 hover:text-gray-700"
// //     >
// //       Add To Card
// //     </button>
// //   </td>
// // </tr>`
// //   }
// }

// console.log(cart);