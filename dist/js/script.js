"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* 
HOME TASK 2

Tреба реалізувати просту програму з наступними умовами:

За допомогою prompt запитати ім'я користувача.
За допомогою alert вивести "Hello, John! How are you?" , 
де John це те, що ввів користувач */

// 1 вариант
var userName = prompt('Put your name, please', 'John');
alert("Hello, ".concat(userName, "! How are you?"));

// 2 вариант
var UserName1 = prompt('Put your name, please', '');
alert("Hello, " + UserName1 + "! " + "How are you?");

/*  HOME TASK 3
В якості ДЗ, необхідно вирішити дві наступні задачі:

Отримати від користувача 3 рядки та вивести їх у 
довільному порядку однією командою (конкатенація);

*/

var str1 = prompt('Put please your first string part', 'xxx');
var str2 = prompt('Put please your second string part', 'yyy');
var str3 = prompt('Put please your third  string part', 'zzz');

// checking type of date for compilling:

// console.log(typeof str1);  //return STRING
// console.log(typeof str2);  //return STRING
// console.log(typeof str3);  //return STRING

console.log(str1 + str2 + str3);
console.log("In order 213: ".concat(str2).concat(str1).concat(str3));

/*Розбити за цифрами п'ятизначне число і вивести у вихідному 
порядку через пробіл.*/

var i = 45678;
var num = i.toString();
// 1 вариант
var a = num[0];
var b = num[1];
var c = num[2];
var d = num[3];
var e = num[4];
console.log(a + ' ' + b + ' ' + c + ' ' + d + ' ' + e);
// // 2 вариант
var num1 = num.split('').join(' ');
console.log(num1);

/*  HOME TASK 4
Створити скрипт для додавання, віднімання, множення та поділу 
двох чисел та виведення результатів.

Користувач вводить два числа через два промпти, 
і повідомлення виводиться алертом з таким результатом:

//Користувач ввів 2 і 2:
*/
var firstNum = prompt('Put first number', '');
var secNum = prompt('Put second number', '');

// // ' for  Division put"/",  for Multiplication put "+", for Addition put "+", for Subtraction put "-"

var ab = Number(firstNum);
console.log(_typeof(ab)); // I am checking type of date *string to Number*
var cd = Number(secNum);
alert("User put frst number ".concat(ab, " and the second number ").concat(cd));
var divNum = ab / cd;
console.log(divNum);
alert("Division equal: ".concat(ab, " / ").concat(cd, " = ").concat(divNum));
var multiNum = ab * cd;
console.log(multiNum);
alert("Multiplication equal: ".concat(ab, " * ").concat(cd, " = ").concat(multiNum));
var addNum = ab + cd;
console.log(addNum);
alert("Addition equal: ".concat(ab, " + ").concat(cd, " = ").concat(addNum));
var subtrNum = ab - cd;
console.log(subtrNum);
alert("Subtraction equal: ".concat(ab, " - ").concat(cd, " = ").concat(subtrNum));

/* HOMETASK 5

Створити скрипт який повинен виконувати наступне:

питаємо у користувача, що він хоче зробити (add, sub, mult, div);
питаємо у користувача перше число;
запитуємо у користувача друге число;
виводимо результат дії (add, sub, mult, div) з усіма операндами 
(Наприклад "2 + 3 = 5").*/

// let userChoice = prompt('What do you whant to do? Make you choice please.', `"add', "sub", "mult", "div"`);
// console.log(userChoice);

// console.log(ac);

// let UserAdd = 'add';

/* HOME TASK 6
Напишіть скрипт, який переводить години в секунди і має робити насутпне:

запитати у користувача кількість годин;
порахувати, скільки секунд у цій кількості годин;
записати обчислене значення у змінну;
вивести цю змінну користувачеві через alert.*/

var userHourChoise = prompt('How manu hour do you want calculate to sec?', '');
var userHours = Number(userHourChoise);
// console.log(typeof userHours);

var secInHour = 360;
var secInUserHours = userHours * secInHour;
alert("Your hour chioce include ".concat(secInUserHours, " seconds"));