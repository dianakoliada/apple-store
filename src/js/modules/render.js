const categoryHolder = document.getElementById('js-category-list');
const productCardsHolder = document.getElementById('js-product-cards');
const hotOffersCardsHolder = document.getElementById('js-hot-offers');

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
         <a href="#" class="card-product__btn-add js-icon-cart" data-id="${id}" data-title="${title}"
         data-price="${price}" data-img="${img}" data-count="1"><svg class='icon icon-cart'>
            <use xlink:href='#icon-cart-add'></use>
         </svg></a>
      </div>
   </div>`
}

const getCartProductsListHTML = (index, price, id) => {
   return `
   <div class="cart-added-list__item">
      <button class="cart-added-list__item-btn-delete btn-light js-btn-delete" data-index="${index}">
         <i class="fa-solid fa-xmark"></i>
       </button>
      <img src="../img/gallery-3.jpg" alt="" class="cart-added-list__item-img">
      <p class="cart-added-list__item-text-hold">
         <a href="#" class="cart-added-list__item-title-link">Lorem ipsum dolor sit amet.</a>
         <span class="cart-added-list__item-meta-list">
            <span class="cart-added-list__item-meta">${price} USD</span>
         </span>
      </p>
      <p class="cart-added-list__item-count js-input" id="input-count-${id}">3</p>
      <button class="cart-added-list__item-btn-plus btn-light js-count" data-type="plus"
      data-input="#input-count-${id}" data-index="${index}">
         <i class="fa-solid fa-plus"></i>
      </button>
      <button class="cart-added-list__item-btn-minus btn-light js-count" data-type="minus"
      data-input="#input-count-${id}" data-index="${index}">
         <i class="fa-solid fa-minus"></i>
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

export { getCategoryHTML, getProductsHTML, getCartProductsListHTML, getOrderedProductsHTML, categoryHolder, productCardsHolder, hotOffersCardsHolder };