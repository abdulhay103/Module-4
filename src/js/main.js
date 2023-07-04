import {products} from "./data.js";

let readProducts = () => {
  let tbody1 = document.getElementById("tbody1");

  products.forEach((product) => {
    let subTotal = product.unitPrice * product.qty;
    tbody1.innerHTML += `<tr>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <div class="flex">
          <div class="flex-shrink-0 w-10 h-10">
            <img
              class="w-full h-full rounded-full"
              src="${product.img}"
              alt="Product Image"
              id="pImg"
            />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap" id="pName">${product.name}</p>
            <p class="text-gray-600 whitespace-no-wrap">${product.id}</p>
          </div>
        </div>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">$${product.unitPrice}</p>
        <p class="text-gray-600 whitespace-no-wrap">USD</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">${product.qty}</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p class="text-gray-900 whitespace-no-wrap">$${subTotal}</p>
        <p class="text-gray-600 whitespace-no-wrap">USD</p>
      </td>
      <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm text-right">
        <button onclick="addToCart(${product.id},${product.unitPrice},${product.qty})" id="addToCartBtn" type="button" class="inline-block text-yellow-500 hover:text-white p-3 bg-slate-600 rounded">
          Add To Cart
        </button>
      </td>
    </tr>`;
  });
};


if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}


function ready() {
  readProducts();
}
ready();