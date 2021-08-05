'use strict';
        let iElems = document.querySelectorAll('i');
        iElems.forEach(function(i) {
            i.addEventListener('mouseover', function(event) {
                addGoldenClass(event.target);
            });
            i.addEventListener('mouseout', function(event) {
                removeGoldenClass(event.target);
            });
        })

        function addGoldenClass(i) {
            i.classList.add('golden');
            let previousElem = i.previousElementSibling;
            if (previousElem !== null && previousElem.tagName === 'I') {
                return addGoldenClass(previousElem);
            }
        }

        function removeGoldenClass(i) {
            i.classList.remove('golden');
            let previousElem = i.previousElementSibling;
            if (previousElem !== null && previousElem.tagName === 'I') {
                return removeGoldenClass(previousElem);
            }
        }