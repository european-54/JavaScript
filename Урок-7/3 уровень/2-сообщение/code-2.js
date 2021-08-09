'use strict';
let notification = new Audio('notification.mp3');
let message = document.querySelector('.message');
let button = document.querySelector('button');
button.addEventListener('click', function () {
    let messageHeight = message.clientHeight;
    message.style.transform = `translateY(-${40 + messageHeight}px)`;
    notification.play();
});