const categoryHolder = document.getElementById('js-category-list');
const productCardsHolder = document.getElementById('js-product-cards');
const hotOffersCardsHolder = document.getElementById('js-hot-offers');
const countProductsHolder = document.getElementById('js-count-products');


const getCategoryHTML = (id, title) => {
   return `
   <li>
      <a class="dropdown-item" href="${id}">${title}</a>
   </li>`
}

const getProductsHTML = (img, id, title, price, oldprice) => {
   return `
   <div class="card-product">
      <div class="card-product__img-hold">
         <img src="../src/img/catalog/${img}" alt="${title}" class="card-product__img js-product-img">
      </div>
      <div class="card-product__text-hold">
         <a href="#" class="card-product__title-link">${title}</a>
         <span class="card-product__price">${price} USD <small>${oldprice} USD</small></span>
         </div>
      <a href="#" class="btn js-icon-cart" data-id="${id}" data-title="${title}"
            data-price="${price}" data-img="${img}" data-count="1">Add to Cart</i></a>
   </div>`
}

const getCartProductsListHTML = (index, img, price, id, count, title) => {
   return `
   <div class="cart-added-list__item">
      <button class="cart-added-list__item-btn-delete js-btn-delete" data-index="${index}">
         <i class="fa-solid fa-xmark js-icon-delete"></i>
       </button>
      <img src="../src/img/catalog/${img}" alt="" class="cart-added-list__item-img">
      <p class="cart-added-list__item-text-hold">
         <a href="#" class="cart-added-list__item-title-link">${title}</a>
         <span class="cart-added-list__item-meta-list">
            <span class="cart-added-list__item-meta">${price} USD</span>
         </span>
      </p>
      <p class="cart-added-list__item-count js-display-count" id="js-display-count-${id}">${count}</p>
      <button class="cart-added-list__item-btn-plus js-count" data-type="plus" data-count="#js-display-count-${id}" data-index="${index}">
         <i class="fa-solid fa-plus js-count-icon"></i>
      </button>
      <button class="cart-added-list__item-btn-minus js-count" data-type="minus"
      data-count="#js-display-count-${id}" data-index="${index}">
         <i class="fa-solid fa-minus js-count-icon"></i>
      </button>
   </div>`
}

const getOrderedProductsHTML = (title, count, price) => {
   return `
   <div class="cart-ordered-list__item">
      <div class="cart-ordered-list__item-img-hold">
         <img src="./img/gallery-1.jpg" alt="${title}" class="cart-ordered-list__item-img">
      </div>
      <div class="cart-ordered-list__item-text-hold">
         <div class="cart-ordered-list__item-title">${title}</div>
         <div class="cart-ordered-list__item-price">amount ${count}</div>
         <div class="cart-ordered-list__item-price">${price} USD</div>
      </div>
   </div>`
}

const displayProductCount = (data) => {
   countProductsHolder.innerHTML = data;
}

export { getCategoryHTML, getProductsHTML, getCartProductsListHTML, getOrderedProductsHTML, displayProductCount, categoryHolder, productCardsHolder, hotOffersCardsHolder, countProductsHolder };