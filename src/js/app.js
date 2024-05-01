'use strict';
import * as utils from './modules/utils.js';
import * as api from './modules/fetchAPI.js';
import * as html from './modules/render.js';
import * as cat from './modules/categoryHandler.js';
import * as cart from './modules/cartHandler.js';
import * as search from './modules/searchHandler.js';
import * as order from './modules/orderHandler.js';

const burgerBtn = document.getElementById('js-burger');
const menuNav = document.getElementById('js-menu');
const navItems = document.querySelectorAll('.menu-btn__burger');

burgerBtn.addEventListener('click', function () {
   menuNav.classList.toggle('show');
   navItems.forEach((item) => item.classList.toggle('open'));
});

(async function () {
   const data = await api.fetchData(api.APICategoties);
   if (data && html.categoryHolder) {
      html.categoryHolder.insertAdjacentHTML('beforeend',
         html.resetSelectionTemplate);

      utils.processAPIData(data, html.categoryHolder,
         ({ id, title }) => html.getCategoryHTML(id, title));
   }
})();

(async function () {
   const data = await api.fetchData(api.APICatalog);
   if (data && html.productCardsHolder) {
      utils.processAPIData(data, html.productCardsHolder,
         ({ img, id, title, price, oldprice }) => html.getProductsHTML(img, id, title, price, oldprice));
      utils.displayProductCount(data.length);
   }
})();

(async function () {
   const data = await api.fetchData(api.APICatalogHotOffers);
   if (data && html.hotOffersCardsHolder) {
      utils.processAPIData(data, html.hotOffersCardsHolder,
         ({ img, id, title, price, oldprice }) => html.getProductsHTML(img, id, title, price, oldprice));
   }
})();

utils.addEventListenerIfAvailable(cat.categoryList, 'click', cat.displayCategoryProducts);
utils.addEventListenerIfAvailable(cat.categoryBtn, 'click', cat.toggleCategoryList);
utils.addEventListenerIfAvailable(html.productCardsHolder, 'click', cart.handleCartClicks);
utils.addEventListenerIfAvailable(html.hotOffersCardsHolder, 'click', cart.handleCartClicks);
utils.addEventListenerIfAvailable(cart.cartBtn, 'click', cart.toggleCartBtn);
utils.addEventListenerIfAvailable(cart.cartStaticHolder, 'click', cart.handleCartClicks);

if (search.inputSearch) {
   search.inputSearch.oninput = search.searchProducts;
}

if (order.phoneInput) {
   order.phoneInput.onkeypress = order.onTypeTelHandler;
}












