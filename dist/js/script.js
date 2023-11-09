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
var numberX = +prompt('Put your first number', '');
var numberY = +prompt('Put your second number', '');
var znak = prompt("What mathematical operation do you want to do", '+, -, *, /, %, ^');
var userMathOperation = function userMathOperation(numberX, numberY, znak) {
  if (!isNaN(numberX) && !isNaN(numberY)) {
    if (znak === '+') {
      var addition = numberX + numberY;
      console.log("Result of addition:    ".concat(numberX, " ").concat(znak, " ").concat(numberY, " =  ").concat(addition));
    } else if (znak === '-') {
      var subtraction = numberX - numberY;
      console.log("Result of subtraction:    ".concat(numberX, "  ").concat(znak, " ").concat(numberY, " =  ").concat(subtraction));
    } else if (znak === '/') {
      var division = numberX / numberY;
      console.log("Result of division:  ".concat(numberX, " ").concat(znak, " ").concat(numberY, " =  ").concat(division));
    } else if (znak === '%') {
      var modulo = numberX % numberY;
      console.log("Result of modulo:   ".concat(numberX, " ").concat(znak, " ").concat(numberY, " =  ").concat(modulo));
    } else if (znak === '^') {
      var exponentiation = Math.pow(numberX, numberY);
      console.log("Result of exponentiation: ".concat(numberX, " ").concat(znak, " ").concat(numberY, " =  ").concat(exponentiation));
    } else {
      console.log('Invalid mathematical operation');
    }
  } else {
    console.log('One or both of the entered values are not numbers');
  }
};
userMathOperation(numberX, numberY, znak);

/*
Написати функцію заповнення даними користувача двомірного масиву.
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.
*/

var mainArray = [];
var userTwoDimArray = function userTwoDimArray() {
  var longOfMainArray = +prompt("Put length of main array (srtings)", '4');
  var longSecondaryArray = +prompt("Put length of seconday array (colums)", '4');
  for (var i = 0; i < longOfMainArray; i++) {
    var secondaryArray = [];
    for (var j = 0; j < longSecondaryArray; j++) {
      var elemSecondaryArray = +prompt("Put element number ".concat(j + 1, " to string number ").concat(i + 1));
      secondaryArray.push(elemSecondaryArray);
    }
    mainArray.push(secondaryArray);
  }
  return mainArray;
};
userTwoDimArray();
console.log(mainArray);

/*
Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
Вихідний рядок та символи для видалення задає користувач.
*/