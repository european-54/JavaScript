'use strict';
setTimeout(function () {
    let images = document.querySelectorAll('img');
    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute('src', `images/${i + 1}.jpg`);
    }
}, 3000);