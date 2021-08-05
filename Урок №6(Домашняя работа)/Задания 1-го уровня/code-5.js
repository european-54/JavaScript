/*
    Задание. Сделайте, чтобы у всех инпутов снизу был внешний отступ (margin-bottom).
    1. Получите все инпуты, например с помощью querySelectorAll
    2. Переберите полученную коллекцию например с помощью forEach
    2.1 У функции-обработчика, которая будет передаваться в forEach определите
    параметр input
    2.2 Чтобы менять стили обращайтесь к свойству style у параметра input
*/
'use strict';
let inputs = document.querySelectorAll('input');
inputs.forEach(function (input) {
    input.style.marginBottom = '25px';
    input.style.borderWidth = '3px';
});