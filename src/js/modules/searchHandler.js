import * as api from './fetchAPI.js';
import * as html from './render.js';

const inputSearch = document.getElementById('js-input-search');
let idTimeout = 0;

function fetchSearchedProducts(inputValue) {
   html.productCardsHolder.innerHTML = '';

   api.fetchData(api.APISearch + inputValue)
      .then(data => {
         if (!Array.isArray(data)) {
            html.productCardsHolder.innerHTML = '<h2>No products found</h2>';
            html.displayProductCount(0);
         } else {
            api.processAPIData(data, html.productCardsHolder, ({ img, id, title, price, oldprice }) => html.getProductsHTML(img, id, title, price, oldprice));

            html.displayProductCount(data.length);
         }
      })
}

function searchProducts(e) {
   clearTimeout(idTimeout);

   idTimeout = setTimeout(() => {
      const inputValue = e.target.value;
      fetchSearchedProducts(inputValue);
   }, 700)
}

export { inputSearch, searchProducts };