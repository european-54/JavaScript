'use strict';
        let btn = document.querySelector('button');
        let msg = document.querySelector('.message');
        btn.addEventListener('click', function() {
            msg.style.display = 'block';
            msg.classList.add('animate__animated', 'animate__fadeInLeftBig');
        });