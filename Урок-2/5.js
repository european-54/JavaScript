'use strict';
/**
 * Функция складывает переданные параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function addition(a, b) {
    return a + b;
}

/**
 * Функция из параметра "a" вычитает параметр "b".
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function subtraction(a, b) {
    return a - b;
}

/**
 * Функция делит параметр "a" на параметр "b".
 * @param {number} a 
 * @param {number} b 
 * @returns {number} 
 */
function division(a, b) {
    return a / b;
}

/**
 * Функция умножает параметры.
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function multiplication(a, b) {
    return a * b;
}

/**
 * Функция получает 2-а числа и осуществляет над ними математическую операцию.
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+", "-", "/", "*". 
 * @returns
 * @throws {Error} если передана непредусмотренная операция, то будет
 * выброшена ошибка.
 * @returns {number} 
 */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return addition(arg1, arg2);
        case "-":
            return subtraction(arg1, arg2);
        case "/":
            return division(arg1, arg2);
        case "*":
            return multiplication(arg1, arg2);
        default:
            throw new Error("Операция" + operation + "не предусмотрена");
    }
}

console.log(mathOperation(8, 4, "+"));
console.log(mathOperation(8, 4, "-"));
console.log(mathOperation(8, 4, "/"));
console.log(mathOperation(8, 4, "*"));
console.log(mathOperation(8, 4, "Lorem"));