'use strict';
        let formEl = document.querySelector('form');
        let firstInput = document.getElementById('first');
        let secondInput = document.getElementById('second');

        formEl.addEventListener('submit', function(event) {
            let firstInputEmpty = firstInput.value === '';
            let secondInputEmpty = secondInput.value === '';

            if (firstInputEmpty) {
                firstInput.style.borderColor = 'red';
                firstInput.style.borderWidth = '5px';
            }
            if (secondInputEmpty) {
                secondInput.style.borderColor = 'red';
                secondInput.style.borderWidth = '5px';
            }
            if (firstInputEmpty || secondInputEmpty) {
                event.preventDefault();
            }
        });