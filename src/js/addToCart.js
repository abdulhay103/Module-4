function addToCart(id, unitPrice, qty) {
  let tbody2 = document.getElementById("tbody2");
  let grandTotal = document.getElementById('grandTotal');
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