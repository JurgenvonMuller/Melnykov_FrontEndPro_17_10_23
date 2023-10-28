"use strict";

/* 
                  HOMEWORK 10 
Вивести на сторінку в один рядок через кому числа від 10 до 20.
*/
// for( let num = 10; num <=20; num++) {

//   document.write(` ${num}`); // вывод на страницу сайта как в задании НЕ В КОНСОЛЬ!
// }
/*
Вивести квадрати чисел від 10 до 20.
*/

for (var num1 = 10; num1 <= 20; num1++) {
  var exp = 2;
  var res1 = Math.pow(num1, exp);
  //let res1 = num1 **2;  ----- , без доп переменной exp.
  document.write('  ' + res1 + '  ');
}
document.write("<br>");
/*
Вивести таблицю множення на 7.

*/

var num2 = 7;
for (var multip = 0; multip <= 10; multip++) {
  var result2 = num2 * multip;
  document.write("\n  ".concat(num2, " * ").concat(multip, " = ").concat(result2, " <br>"));
}
document.write("<br>");

/*
Знайти суму всіх цілих чисел від 1 до 15.
*/

var result3 = 0;
for (var num3 = 1; num3 <= 15; num3++) {
  result3 += num3;
}
document.write(result3);
document.write("<br>");

/*
Знайти добуток усіх цілих чисел від 15 до 35.
*/

var result4 = 1;
for (var num4 = 15; num4 <= 35; num4++) {
  result4 *= num4;
}
document.write(result4);
document.write("<br>");

/*
Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
*/
var count = 0;
var summ = 0;
for (var num5 = 1; num5 <= 500; num5++) {
  summ += num5;
  count++;
  // console.log(summ, count);
}

console.log(summ / count);

/* 

Вивести суму лише парних чисел в діапазоні від 30 до 80.
*/

/*

Вивести всі числа в діапазоні від 100 до 200 кратні 3.


Дано натуральне число. Знайти та вивести на сторінку всі його дільники.


Визначити кількість його парних дільників.


Знайти суму його парних дільників.


Надрукувати повну таблицю множення від 1 до 10.
*/