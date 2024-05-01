function saveToLocalStorage(key, value) {
   localStorage.setItem(key, JSON.stringify(value));
}

function getFromLocalStorage(key) {
   return JSON.parse(localStorage.getItem(key)) ?? [];
}

function isProductInCart(cart, productId) {
   return cart.some(el => el.id === productId);
}

function processAPIData(data, container, getHTMLfunc) {
   if (data) {
      data.forEach((item) => {
         container.insertAdjacentHTML('beforeend', getHTMLfunc(item));
      })
   }
}

function addEventListenerIfAvailable(el, event, handler) {
   if (el) {
      el.addEventListener(event, handler);
   }
}

const countProductsHolder = document.getElementById('js-count-products');
const displayProductCount = (data) => {
   countProductsHolder.innerHTML = data;
}

export { saveToLocalStorage, getFromLocalStorage, isProductInCart, processAPIData, displayProductCount, addEventListenerIfAvailable };

