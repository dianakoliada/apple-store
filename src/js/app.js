'use strict';
import * as api from './modules/fetchAPI.js';
import * as html from './modules/render.js';
import * as cat from './modules/categoryHandler.js';

const burgerBtn = document.getElementById('js-burger');
const menuNav = document.getElementById('js-menu');
const navItems = document.querySelectorAll('.menu-btn__burger');

const cartList = [];


api.fetchData(api.APICategoties)
   .then(data => {
      if (data) {
         html.categoryHolder.insertAdjacentHTML(
            'beforeend',
            `<a href="#" class="dropdown-item">Reset selection</a>`);
         data.forEach(({ id, title }) => {
            html.categoryHolder.insertAdjacentHTML('beforeend', html.getCategoryHTML(id, title));
         });
      }
   });

api.fetchData(api.APICatalog)
   .then(data => {
      if (data) {
         data.forEach(({ img, id, title, price, oldprice }) => {
            html.productCardsHolder.insertAdjacentHTML(
               'beforeend',
               html.getProductsHTML(img, id, title, price, oldprice));
         });
         html.displayProductCount(data.length);
      }
   });

api.fetchData(api.APICatalogHotOffers)
   .then(data => {
      if (data) {
         data.forEach(({ img, id, title, price, oldprice }) => {
            html.hotOffersCardsHolder.insertAdjacentHTML(
               'beforeend',
               html.getProductsHTML(img, id, title, price, oldprice));
         });
      }
   });

cat.categoryList.addEventListener('click', cat.displayCategoryProducts);
cat.categoryBtn.addEventListener('click', cat.toggleCategoryList);

burgerBtn.addEventListener('click', function () {
   menuNav.classList.toggle('show');
   navItems.forEach((item) => item.classList.toggle('open'));
});


