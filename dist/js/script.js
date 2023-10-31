"use strict";

/* 
                  HOMEWORK 10 
Вивести на сторінку в один рядок через кому числа від 10 до 20.
*/
for (var num = 10; num <= 20; num++) {
  document.write(" ".concat(num, ",  ")); // вывод на страницу сайта как в задании НЕ В КОНСОЛЬ!
}

document.write("<br> <br>");
/*
Вивести квадрати чисел від 10 до 20.
*/

for (var num1 = 10; num1 <= 20; num1++) {
  var exp = 2;
  var res1 = Math.pow(num1, exp);
  //let res1 = num1 **2;  ----- , без доп переменной exp.
  document.write('  ' + res1 + '  ');
}
document.write("<br> <br>");

/*
Вивести таблицю множення на 7.
*/

var num2 = 7;
for (var multip = 0; multip <= 10; multip++) {
  var result2 = num2 * multip;
  document.write("\n  ".concat(num2, " * ").concat(multip, " = ").concat(result2, " <br>"));
}
document.write("<br> <br>");

/*
Знайти суму всіх цілих чисел від 1 до 15.
*/

var result3 = 0;
for (var num3 = 1; num3 <= 15; num3++) {
  result3 += num3;
}
document.write(result3);
document.write("<br><br>");

/*
Знайти добуток усіх цілих чисел від 15 до 35.
*/

var result4 = 1;
for (var num4 = 15; num4 <= 35; num4++) {
  result4 *= num4;
}
document.write(result4);
document.write("<br> <br>");

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

console.log(summ / count); // тут можно бы было ввеси еще одну переменную но зачем?

/* 
Вивести суму лише парних чисел в діапазоні від 30 до 80.
*/

for (var num6 = 30; num6 <= 80; num6++) {
  // как вариант  num6 = num6 + 2
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
for (var divis = 2; divis <= naturNumber; divis++) {
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

/* HOMEWORK 11 
Написати цикли, які роблять наступне:\
Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
*/

for (var numberOne = 20; numberOne <= 30; numberOne += 0.5) {
  var resultNumber = numberOne;
  console.log(resultNumber);
}

/*
Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
*/
// let oneUsdInUah = 27;

// for (let oneUsd = 10; oneUsd <= 100; oneUsd = oneUsd + 10) {
//  let usdInUah = oneUsdInUah * oneUsd;
//  console.log(` ${usdInUah} `);
// }

/*
Дане ціле число. Вивести всі цілі числа від 1 до 100, 
квадрат яких не перевищує числа N.
*/

var numberN = +prompt("enter you number", '');
for (var j = 1; j <= 100; j++) {
  var result = Math.pow(j, 2);
  if (result < numberN && result % 1 === 0) {
    /*
    ( result < numberN && Number.isInteger(result)) - стандартная функция Number 
    можно использовать------------------------------
                          для проверки является ли число целым 
    и доп информация:
    Math.sqrt (result) - возвращает корень от result. то есть j.
    */
    console.log(result);
  }
}

/*
Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1,
які не мають інших дільників крім 1 і себе).
*/

var numberM = +prompt("Put your number from 2 ", '');
var numSimp = true; // работаем через булевы значения если тру - то  выводим результат.

if (numberM <= 1) {
  numSimp = false;
  console.log(" It is not a valid number", '');
} else {
  for (var k = 2; k <= Math.sqrt(numberM); k++) {
    // проверка выполнения числа на простоту 
    //  1. делитель должен начинаться с 2 (не может быть меньше 2); 
    // 2. делитель не должен превышать квадратного корня из данного нам числа;
    // 3. шаг поиска делителя - 1 так как ищем простое число (не дробное)
    if (numberM % k === 0) {
      numSimp = false;
      break; // можно и нужно использовать для ускорения итераций при нахождении первого ТРУ цикл прерывается
      //хотя как по мне - начинается новая итерация. 
    }
  }

  if (numSimp) {
    console.log("the number ".concat(numberM, " is a simple number"));
  }
  if (!numSimp) {
    console.log("the number ".concat(numberM, " is  NOT a simple number"));
  }
}

/// ЭТО БЫЛ ЗАВОРОТ МОЗГОВ И КОШМАР!!! 

/*
Дане деяке число. Визначити, чи можна одержати це число шляхом 
зведення числа 3 у деякий ступінь. 
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/
// ТУТ Я ЧЕСТНО ПРОБОВАЛ ЧЕРЕЗ ЛАГОРИФМЫ )))) 
// let userNumberAny = +prompt(`Put your number`, '');
// let checkSqrt = Math.log(userNumberAny) / Math.log(3);
// console.log(checkSqrt); // возвращает 2.0000000000000004 поэтому округляем??? ) 
// и ничего не получится ))))) 

// if (userNumberAny > 0 && checkSqrt % 1 === 0) {
//     console.log(`${userNumberAny} может быть получено путем возведения числа 3 в степень.`);
// } else {
//     console.log(`${userNumberAny} Не может быть получено путем возведения числа 3 в степень.`);
// }
// способ деревянный но верный )))) Хотя долгий при вводе больших чисел.

var userNumberAny = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E", '');
var x = 1;
while (x < userNumberAny) {
  x *= 3;
}
if (x === userNumberAny) {
  console.log("".concat(userNumberAny, " \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u043F\u0443\u0442\u0435\u043C \u0432\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0447\u0438\u0441\u043B\u0430 3 \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C."));
} else {
  console.log("".concat(userNumberAny, " \u041D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u043F\u0443\u0442\u0435\u043C \u0432\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0447\u0438\u0441\u043B\u0430 3 \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C."));
}

// KONIEC)