'use strict';
let inputel = document.querySelector('input');
        let divEl = document.querySelector('div');
        inputel.addEventListener('input', function(event) {
            divEl.style.fontSize = event.target.value + 'px';
        })