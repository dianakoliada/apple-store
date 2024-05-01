import * as cart from './cartHandler.js';
import * as html from './render.js';

const orderTotalHolder = document.getElementById('js-order-total');
const orderPageHolder = document.getElementById('js-order-page');
const phoneInput = document.getElementById("phone");
let errorMessage = document.getElementById('error-message');
const form = document.getElementById('js-form');
const submit = document.getElementById('js-submit');

function getOrderTotalSum() {
   let totalSum = 0;

   for (let item of cart.cartList) {
      totalSum += item.count * item.price;
   }
   return totalSum.toFixed(2);
}

function displayOrderList(array) {
   if (orderTotalHolder) {
      orderTotalHolder.innerHTML = '';
   }

   if (array.length === 0 && orderTotalHolder) {
      orderTotalHolder.innerHTML = html.emptyOrderCartTemplate;
   } else if (orderTotalHolder) {
      array.forEach(({ title, count, price, img }) => {
         orderTotalHolder.insertAdjacentHTML(
            'beforeend',
            html.getOrderedProductsHTML(title, count, price, img))
      })
      orderTotalHolder.innerHTML += `<p class="page-content total-sum">Total sum is: ${getOrderTotalSum()}</p>`
   }
}

function onTypeTelHandler(e) {
   let key = e.key;

   if (!(key >= '0' && key <= '9') && !['Backspace', 'ArrowLeft', 'ArrowRight', 'Delete'].includes(key)) {
      e.preventDefault();

      errorMessage.innerText = 'Please, enter your phone number';
   } else if (phoneInput.value.length !== 12) {
      errorMessage.innerText = 'The phone number should contain exactly 13 digits';
   } else {
      errorMessage.innerText = '';
   }
}

displayOrderList(cart.cartList);


export { displayOrderList, onTypeTelHandler, orderTotalHolder, phoneInput, orderPageHolder, form };