"use strict";

//        Ця дз складається з чотирьох невеликих завдань, за реалізацію кожної з них можна отримати 25 балів:

/*
Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише 
числових елементів даного масиву.
*/

var a = 12;
var print = function print() {
  console.log(a + 'Yes');
};
var mixArray = [832, 'defender', print, 23, NaN, 543, a, 987, undefined, 56, true, 456, false, "bignumber"];
var calcArithmeticMean = function calcArithmeticMean(arr) {
  var filterNumber = arr.filter(function (item) {
    return typeof item === 'number' && !isNaN(item);
  });
  var summOfNumbers = filterNumber.reduce(function (accu, currentValue) {
    return accu + currentValue;
  }, 0);
  var arithmeticMean = summOfNumbers / filterNumber.length;
  console.log(filterNumber);
  console.log(arithmeticMean);
  return arithmeticMean;
};
calcArithmeticMean(mixArray);

/*
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y,
 рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).
 Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак
  виходять від користувача.
*/

/*
Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.
*/

/*
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.
*/