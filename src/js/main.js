let products = [
    {
        details:{
            name : "Samsung",
            img : "./src/images/img1.avif",
            id : "001"

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
        details:{
            name : "Samsung1",
            img : "./src/images/img2.avif",
            id : "002"

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
        details:{
            name : "Samsung3",
            img : "./src/images/img3.avif",
            id : "003"

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
        details:{
            name : "Samsung4",
            img : "./src/images/img4.avif",
            id : "004"

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
        details:{
            name : "Samsung5",
            img : "./src/images/img5.avif",
            id : "005"

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    }
]


let readProducts = () => {
    let tbody = document.getElementById("tbody");
    
    for(product of products){
        tbody.innerHTML += `<tr>
        <td
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
          <div class="flex">
            <div class="flex-shrink-0 w-10 h-10">
              <img
                class="w-full h-full rounded-full"
                src="${product.details.img}"
                alt="Produc Image"
                id="pImg"
              />
            </div>
            <div class="ml-3">
              <p class="text-gray-900 whitespace-no-wrap" id="pName">
                ${product.details.name}
              </p>
              <p class="text-gray-600 whitespace-no-wrap">${product.details.id}</p>
            </div>
          </div>
        </td>
        <td
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
          <p class="text-gray-900 whitespace-no-wrap">$${product.unitPrice}</p>
          <p class="text-gray-600 whitespace-no-wrap">USD</p>
        </td>
        <td
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
          <p class="text-gray-900 whitespace-no-wrap">
            ${product.qty}
          </p>
        </td>
        <td
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
        >
        <p class="text-gray-900 whitespace-no-wrap">$${product.subTotal}</p>
          <p class="text-gray-600 whitespace-no-wrap">USD</p>
        </td>
        <td
          class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right"
        >
          <button
            type="button"
            class="px-4 py-2 border rounded-md text-slate-950 bg-amber-500 inline-block font-medium hover:text-gray-700"
          >
            Add To Card
          </button>
        </td>
      </tr>`
    }
}
readProducts();

// // Array to store generated numbers
// let generatedNumbers = [];
// function generateRandomUniqueNumber(min, max) {
//   let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     if (generatedNumbers.includes(randomNumber)) {
//       return generateRandomUniqueNumber(min, max);
//     }
//     generatedNumbers.push(randomNumber);
//     return randomNumber;
// }
// let randomUniqueNumber = generateRandomUniqueNumber(1, 1000000000);
// console.log(randomUniqueNumber);


// Define the shopping cart array
var cart = [];

// Function to add items to the cart
function addToCart(productId, productName, productPrice, quantity) {
  // Check if the product already exists in the cart
  var existingItem = cart.find(item => item.productId === productId);

  if (existingItem) {
    // If the product already exists, update the quantity
    existingItem.quantity += quantity;
    existingItem.subtotal = existingItem.quantity * existingItem.productPrice;
  } else {
    // If the product does not exist, add it to the cart
    var newItem = {
      productId: productId,
      productName: productName,
      productPrice: productPrice,
      quantity: quantity,
      subtotal: productPrice * quantity
    };

    cart.push(newItem);
  }

  // Display the updated cart
  displayCart();
}

// Function to display the cart
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

// Usage example
addToCart(1, "T-shirt", 15.99, 2);
addToCart(2, "Jeans", 29.99, 1);
addToCart(1, "T-shirt", 15.99, 1);



// html code 
<!-- HTML -->
<div>
  <label for="productId">Product ID:</label>
  <input type="text" id="productId">
</div>
<div>
  <label for="productName">Product Name:</label>
  <input type="text" id="productName">
</div>
<div>
  <label for="productPrice">Product Price:</label>
  <input type="text" id="productPrice">
</div>
<div>
  <label for="quantity">Quantity:</label>
  <input type="text" id="quantity">
</div>
<div>
  <button onclick="addToCart()">Add to Cart</button>
</div>


// javascript

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
