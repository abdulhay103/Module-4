if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', ready)
} else {
  ready()
}

function ready(){
  readProducts();

  // let addToCartBtn = document.getElementById("addToCartBtn");
  // for(let i=0; i < addToCartBtn.length; i++){
  //   let btn = addToCartBtn[i]
  //   console.log(btn);
  // }

}

let products = [
    {
      id : "111",
        details:{
            name : "Samsung",
            img : "./src/images/img1.avif",

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
      id : "112",
        details:{
            name : "Samsung1",
            img : "./src/images/img2.avif",

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
      id : "113",
        details:{
            name : "Samsung3",
            img : "./src/images/img3.avif",

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
      id : "114",
        details:{
            name : "Samsung4",
            img : "./src/images/img4.avif",

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    },
    {
      id : "115",
        details:{
            name : "Samsung5",
            img : "./src/images/img5.avif",

        },
        unitPrice : "1000",
        qty : "2",
        subTotal : "2000",
    }
]

console.log(typeof products);


let readProducts = () => {
    let tbody1 = document.getElementById("tbody1");
    
    products.map((product, index) =>{
        tbody1.innerHTML = `<tr>
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
              <p class="text-gray-600 whitespace-no-wrap">${product.id}</p>
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
            onclick = "addToCart(${product.id}, ${product.subTotal}, ${product.details.img},${product.details.name})"
            id = "addToCartBtn"
            type="button"
            class="inline-block text-yellow-500 hover:text-white p-3 bg-slate-600 rounded"
          >
            Add To Cart
          </button>
        </td>
      </tr>`
    })
}

function addToCart(id, subTotal, img, name) {
  let tbody2 = document.getElementById("tbody2");
  console.log(img);
  
      tbody2.innerHTML += `<tr>
      <td
        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
      >
        <div class="flex">
          <div class="flex-shrink-0 w-10 h-10">
            <img
              class="w-full h-full rounded-full"
              src="${img}"
              alt="Produc Image"
              id="pImg"
            />
          </div>
          <div class="ml-3">
            <p class="text-gray-900 whitespace-no-wrap" id="pName">
              ${name}
            </p>
            <p class="text-gray-600 whitespace-no-wrap">${id}</p>
          </div>
        </div>
      </td>
      <td
        class="px-5 py-5 border-b border-gray-200 bg-white text-sm"
      >
      <p class="text-gray-900 whitespace-no-wrap">$${subTotal}</p>
        <p class="text-gray-600 whitespace-no-wrap">USD</p>
      </td>
    </tr>`
  }