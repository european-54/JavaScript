'use strict';
let products = document.querySelectorAll('.product');
products.forEach(function (product) {
    product.style.background = 'yellow';
});

let productNames = document.querySelectorAll('.productName');
productNames.forEach(function (productName) {
    productName.style.fontSize = '24px';
});