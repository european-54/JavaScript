'use strict';
let span = document.querySelector('span');
let fromEl = document.querySelector('input');
fromEl.addEventListener('change', function (event) {
    span.textContent = event.target.value;
});