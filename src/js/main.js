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
            class="inline-block text-gray-500 hover:text-gray-700"
          >
            Add To Card
          </button>
        </td>
      </tr>`
    }
}

readProducts();