/*
Задание.
1. Получите кнопку и сохраните ее в переменную.
2. Назначьте кнопке обработку клика.
3. У функции-обработчика клика сделайте параметр event
4. При клике из event.target выведите в консоль: id, имя класса (используйте
свойство className), текст на кнопке.
*/
'use strict';
var button = document.getElementById("addButton")

button.addEventListener("click", function () {
    console.log(button.id);
    console.log(button.className);
    console.log(button.value);
});

