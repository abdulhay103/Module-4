let tbody2 = document.getElementById("tbody2");
let priceArea = document.getElementById("tFooter");

function addToCart(id, unitPrice, qty) {
    let totalPrice = unitPrice * qty;
    let sum = []
  
    tbody2.insertAdjacentHTML(
      "beforeend",
      `<tr>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <div class="flex">
            <div class="ml-3">
              <p class="text-gray-900 whitespace-no-wrap" id="pName">Product Id</p>
              <p class="text-gray-600 whitespace-no-wrap">${id}</p>
            </div>
          </div>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-600 whitespace-no-wrap">${unitPrice}</p>
          <p class="text-gray-600 whitespace-no-wrap">USD</p>
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <input type="text" id="qty" value="${qty}" />
        </td>
        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p class="text-gray-900 whitespace-no-wrap">$${totalPrice}</p>
          <p class="text-gray-600 whitespace-no-wrap">USD</p>
        </td>
      </tr>`
    );
  
    if (!isNaN(totalPrice)) {
        let currentPrice = parseFloat(totalPrice);
        let newTotal = currentPrice + totalPrice;
        priceArea.innerHTML = `<h2 class="text-center">
        Total Price:${newTotal.toFixed(2)}</h2>`
    }
  }

function confirmPurchase(){
    tbody2.innerText = "";
    priceArea.innerHTML = `<h2 class="text-center text-lg text-amber-600">Congratulation Your Purchase Done!</h2>`;
}