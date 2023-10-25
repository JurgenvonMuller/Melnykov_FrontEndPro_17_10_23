"use strict";

// console.log( typeof {} );
// (10).toString()

// console.log(null);

// Створити скрипт який має визначити середнє арифметичне 
// трьох чисел з насутпними умовами:

// отримати від користувача через три prompt три числа
// показати через alert середнє арифметичне цих чисел

//  Variant 1  - simple
var firstNum = +prompt('put your forst number, please', '10');
var secondNum = +prompt('Put your second number, please', '20');
var thirdNum = +prompt('Put you third number, please', '40');
var quantityNumber = 3;
var arithmeticMean = (firstNum + secondNum + thirdNum) / quantityNumber;
alert("Your arithmeticMean is equal ".concat(arithmeticMean));