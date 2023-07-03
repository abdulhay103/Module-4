if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready() {
  readProducts();
}

let products = [
  {
    id : "111",
    name : "Samsung",
    img : "./src/images/img1.avif",
    unitPrice : "300",
    qty : "2",
  },
  {
    id : "112",
    name : "Samsung1",
    img : "./src/images/img2.avif",
    unitPrice : "500",
    qty : "5",
  },
  {
    id : "113",
    name : "Samsung3",
    img : "./src/images/img3.avif",
    unitPrice : "1000",
    qty : "12",
  },
  {
    id : "114",
    name : "Samsung4",
    img : "./src/images/img4.avif",
    unitPrice : "1200",
    qty : "22",
  },
  {
    id : "115",
    name : "Samsung5",
    img : "./src/images/img5.avif",
    unitPrice : "700",
    qty : "20",
  }
]


let readProducts = () => {
  let tbody1 = document.getElementById("tbody1");

  products.forEach((product) => {
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
        <p class="text-gray-900 whitespace-no-wrap">$${product.unitPrice * product.qty}</p>
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


function addToCart(id,unitPrice, qty,) {
  let tbody2 = document.getElementById("tbody2");
  tbody2.insertAdjacentHTML(
    "beforeBegin",
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
        <p class="text-gray-900 whitespace-no-wrap">$${unitPrice * qty}</p>
        <p class="text-gray-600 whitespace-no-wrap">USD</p>
      </td>
    </tr>`
    );

}

ready();
