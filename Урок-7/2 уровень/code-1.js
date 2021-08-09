'use strict';
let buttons = document.querySelectorAll('button');
buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        console.log(event.target.dataset.id);
        console.log(event.target.dataset.value);
    });
});