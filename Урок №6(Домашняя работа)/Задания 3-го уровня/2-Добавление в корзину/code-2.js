'use strict';
        let buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.addEventListener('click', buttonClickHandler);
        });

        function buttonClickHandler(event) {
            event.target.parentNode.style.background = 'orange';
            event.target.textContent = 'Добавлено';
        }