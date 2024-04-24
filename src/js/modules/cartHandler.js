import * as html from './render.js';

const cartListHolder = document.getElementById('js-cart-list');
const cartBtn = document.getElementById('js-cart-btn');
const cartStaticHolder = document.querySelector('.cart-added-list');
let cartCount = document.querySelectorAll('.js-cart-count');
const cartList = [];

cartListHolder.innerHTML = `<h2 class="no-result">Cart is empty</h2>`

function isProductInCart(cart, productId) {
   return cart.some(el => el.id === productId);
}

function toggleCartBtn() {
   cartListHolder.classList.toggle('show');
}

function updateCartCount() {
   let count = cartList.length !== 0 ? cartList.length : 0;
   return cartCount.forEach(el => el.innerHTML = count);
}

function addProductToCart(e) {
   e.preventDefault();
   let clickedEl = e.target;

   //get selected product info and add it into cart
   if (clickedEl.classList.contains('js-icon-cart')) {
      const productInfo = clickedEl.dataset;
      if (isProductInCart(cartList, productInfo.id)) {
         return;
      }

      cartList.push(productInfo);
   }

   //display cart list in cart
   cartListHolder.innerHTML = '';
   if (cartList) {
      cartList.forEach(({ index, img, price, id, count, title }) => {
         cartListHolder.insertAdjacentHTML(
            'beforeend',
            html.getCartProductsListHTML(index, img, price, id, count, title));
      });
   }

   //display cart count
   updateCartCount();
}

function removeProductFromCart(e) {
   e.preventDefault();
   let clickedEl = e.target;
   console.log("clickedEl: ", clickedEl);

   const idToRemove = clickedEl.dataset.index;
   console.log("idToRemove: ", idToRemove);
   console.log("idToRemove: ");
}

export { cartList, cartListHolder, cartBtn, cartStaticHolder, addProductToCart, toggleCartBtn, removeProductFromCart };

