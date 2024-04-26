'use strict';
import * as api from './modules/fetchAPI.js';
import * as html from './modules/render.js';
import * as cat from './modules/categoryHandler.js';
import * as cart from './modules/cartHandler.js';
import * as search from './modules/searchHandler.js';

const burgerBtn = document.getElementById('js-burger');
const menuNav = document.getElementById('js-menu');
const navItems = document.querySelectorAll('.menu-btn__burger');


(async function () {
   const data = await api.fetchData(api.APICategoties);
   if (data) {
      html.categoryHolder.insertAdjacentHTML('beforeend',
         html.resetSelectionTemplate);

      api.processAPIData(data, html.categoryHolder,
         ({ id, title }) => html.getCategoryHTML(id, title));
   }
})();

(async function () {
   const data = await api.fetchData(api.APICatalog);
   if (data) {
      api.processAPIData(data, html.productCardsHolder,
         ({ img, id, title, price, oldprice }) => html.getProductsHTML(img, id, title, price, oldprice));
      html.displayProductCount(data.length);
   }
})();

(async function () {
   const data = await api.fetchData(api.APICatalogHotOffers);
   if (data) {
      api.processAPIData(data, html.hotOffersCardsHolder,
         ({ img, id, title, price, oldprice }) => html.getProductsHTML(img, id, title, price, oldprice));
   }
})();

cat.categoryList.addEventListener('click', cat.displayCategoryProducts);
cat.categoryBtn.addEventListener('click', cat.toggleCategoryList);
html.productCardsHolder.addEventListener('click', cart.handleCartClicks);
html.hotOffersCardsHolder.addEventListener('click', cart.handleCartClicks);
cart.cartBtn.addEventListener('click', cart.toggleCartBtn);
cart.cartStaticHolder.addEventListener('click', cart.handleCartClicks);
search.inputSearch.oninput = search.searchProducts;



burgerBtn.addEventListener('click', function () {
   menuNav.classList.toggle('show');
   navItems.forEach((item) => item.classList.toggle('open'));
});






