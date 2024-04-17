'use strict';
const categoryBtn = document.getElementById('js-category-btn');
const categoryList = document.getElementById('js-category-list');
const burgerBtn = document.getElementById('js-burger');
const menuNav = document.getElementById('js-menu');
const navItems = document.querySelectorAll('.menu-btn__burger');


categoryBtn.addEventListener('click', function () {
   categoryList.classList.toggle('show');
});

burgerBtn.addEventListener('click', function () {
   menuNav.classList.toggle('show');

   navItems.forEach((item) => item.classList.toggle('open'));
});



