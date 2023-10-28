"use strict";

/* 
                  HOMEWORK 10 
Вивести на сторінку в один рядок через кому числа від 10 до 20.
*/
for (var num = 10; num <= 20; num++) {
  document.write(" ".concat(num)); // вывод на страницу сайта как в задании НЕ В КОНСОЛЬ!
}

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

for (var num6 = 30; num6 <= 80; num6++) {
  if (num6 % 2 === 0) {
    console.log(num6);
  }
}

/*
Вивести всі числа в діапазоні від 100 до 200 кратні 3.
*/

for (var num7 = 100; num7 <= 200; num7++) {
  if (num7 % 3 === 0) {
    console.log(num7);
  }
}

/*
Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
Визначити кількість його парних дільників.
Знайти суму його парних дільників.
*/

var naturNumber = +prompt("Slava, enter here any natural number, please", '');
var count1 = 0;
var sumOfDivis = 0;
for (var divis = 1; divis <= naturNumber; divis++) {
  if (naturNumber % divis === 0) {
    console.log(divis);
    sumOfDivis += divis;
    count1++;
  }
}
console.log("Summ of divisors is ".concat(sumOfDivis));
console.log("NUMBER OF DIVISORS OF THIS NATURAL NUMBER IS ".concat(count1));

/*
Надрукувати повну таблицю множення від 1 до 10.

 ПЕРВАЯ ЖАЛКАЯ ПОПЫТКА ))))) 
              let firstNumber = 1;

              for(let secondNumber = 1; secondNumber <= 10 && firstNumber <= secondNumber ; secondNumber++) {
                
              let multResult = firstNumber * secondNumber;
              console.log(` ${firstNumber} * ${secondNumber} = ${multResult} `);
              
              }
              firstNumber++ ??????? 

              ВЛОЖЕННЫЙ ЦИКЛ........ МДЯ....
*/

for (var firstNumber = 1; firstNumber <= 10; firstNumber++) {
  for (var secondNumber = 1; secondNumber <= 10; secondNumber++) {
    var multResult = firstNumber * secondNumber;
    console.log(" ".concat(firstNumber, " * ").concat(secondNumber, " = ").concat(multResult, " "));
  }
}