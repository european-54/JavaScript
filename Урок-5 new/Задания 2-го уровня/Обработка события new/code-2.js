/* 
    Задание.
    1. Назначьте обработку клика по параграфу, у функции обработчика объявите
    параметр event.
    2. При клике выведите в консоль event.target.classList
    3. Переберите с помощью forEach event.target.classList и выведите каждый класс
    в консоль.
*/
'use strict';

var paragraph = document.getElementById("p1");

paragraph.addEventListener("click", function (event) {
    console.log(event.target.classList);
});

