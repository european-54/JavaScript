'use strict';
let inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.insertAdjacentHTML('afterend', '<br>');
    input.style.borderWidth = '4px';
    input.style.borderColor = 'red';
});