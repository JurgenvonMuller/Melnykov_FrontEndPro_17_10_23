"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
// console.log( typeof {} );
// (10).toString()

// console.log(null);

// Створити скрипт який має визначити середнє арифметичне 
// трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

//  Variant 1  - simple;
var firstNum1 = +prompt('put your forst number, please', '10');
var secondNum1 = +prompt('Put your second number, please', '20');
var thirdNum1 = +prompt('Put you third number, please', '40');
var quantityNumber1 = 3;
var arithmeticMean1 = (firstNum1 + secondNum1 + thirdNum1) / quantityNumber1;
alert("Your arithmeticMean is equal ".concat(arithmeticMean1));

// Variant 2 advanced; (Это так, для себя для тренировки)
var firstNum2 = +prompt('put your forst number, please', '20.9');
if (isNaN(firstNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
var secondNum2 = +prompt('Put your second number, please', '20.4');
if (isNaN(secondNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
var thirdNum2 = +prompt('Put you third number, please', '45');
if (isNaN(thirdNum2)) {
  alert('Please put a NUMBER', 'for exaple 12.5');
}
var arithmeticMean2 = (firstNum2 + secondNum2 + thirdNum2) / quantityNumber1;
var decimalQuantity = +prompt('What level of precision do you require for rounding?', '0 - 3');
var arithmeticMean;
if (decimalQuantity === 0) {
  // toFixed возвращает СТРОКУ!!!
  arithmeticMean = +arithmeticMean2.toFixed(0); // не явное преобразование строки в number.
  console.log(_typeof(arithmeticMean), arithmeticMean);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else if (decimalQuantity === 1) {
  arithmeticMean = +arithmeticMean2.toFixed(1);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else if (decimalQuantity === 2) {
  arithmeticMean = +arithmeticMean2.toFixed(2);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else if (decimalQuantity === 3) {
  arithmeticMean = +arithmeticMean2.toFixed(3);
  alert("Your arithmeticMean is equal ".concat(arithmeticMean));
} else {
  alert('Please put correct level of precision', '0 -3');
}