import * as html from './render.js';

const cartListHolder = document.getElementById('js-cart-list');
const cartBtn = document.getElementById('js-cart-btn');
const cartStaticHolder = document.querySelector('.cart-added-list');
let cartCount = document.querySelectorAll('.js-cart-count');
const cartList = [];

function isProductInCart(cart, productId) {
   return cart.some(el => el.id === productId);
}

function toggleCartBtn() {
   cartListHolder.classList.toggle('show');
}

function displayCartCount(array) {
   let totalCount = 0;

   for (let item of array) {
      totalCount += parseInt(item.count);
   }

   cartCount.forEach(el => el.innerHTML = totalCount);
}

function displayCartList(array) {
   cartListHolder.innerHTML = '';
   if (array.length === 0) {
      cartListHolder.innerHTML = `<h2 class="no-result">Cart is empty</h2>`
   } else {
      array.forEach(({ img, price, id, count, title }, index) => {
         cartListHolder.insertAdjacentHTML(
            'beforeend',
            html.getCartProductsListHTML(index, img, price, id, count, title));
      });
      cartListHolder.insertAdjacentHTML('beforeend', `<a href="order-page.html?page=order-page" class="to-order-text no-result-cart-sm">Place an order</a>`);
   }
}

function addProductToCart(item) {
   const productInfo = item.dataset;

   if (isProductInCart(cartList, productInfo.id)) {
      return;
   }
   cartList.push(productInfo);

   displayCartList(cartList);
   displayCartCount(cartList);
}

function removeProductFromCart(item) {
   const idToRemove = item.dataset.index;
   cartList.splice(idToRemove, 1);

   displayCartList(cartList);
   displayCartCount(cartList);
}

function changeProductCartCount(item) {
   const btnTypeValue = item.getAttribute('data-type');
   const dataInputValue = item.getAttribute('data-count');
   let input = document.querySelector(dataInputValue);
   let countValue = input.innerText;


   if (btnTypeValue === 'plus') {
      input.innerText++;
   } else if (btnTypeValue === 'minus' && countValue > 1) {
      input.innerText--;
   }

   let cartIndex = item.getAttribute('data-index');
   cartList[cartIndex].count = input.innerText;
   displayCartCount(cartList);
}

function handleCartClicks(e) {
   e.preventDefault();
   let clickedEl = e.target;

   if (clickedEl.classList.contains('js-icon-cart')) {
      addProductToCart(clickedEl);
   }

   if (clickedEl.nodeName === 'I' && clickedEl.classList.contains('js-icon-delete')) {
      clickedEl = clickedEl.parentNode;
      removeProductFromCart(clickedEl);
   }

   if (clickedEl.nodeName === 'I' && clickedEl.classList.contains('js-count-icon')) {
      clickedEl = clickedEl.parentNode;
      changeProductCartCount(clickedEl);
   }
}

export { cartList, cartListHolder, cartBtn, cartStaticHolder, addProductToCart, toggleCartBtn, handleCartClicks };

