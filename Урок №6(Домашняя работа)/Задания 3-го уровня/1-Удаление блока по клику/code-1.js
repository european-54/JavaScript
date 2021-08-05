'use strict';
        let buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
            button.addEventListener('click', closeClickHandler);
        });

        function closeClickHandler(event) {
           event.currentTarget.parentNode.style.display = 'none';
        }