"use strict";

/* 
                  HOMEWORK 10 
Вивести на сторінку в один рядок через кому числа від 10 до 20.
*/
// for( let num = 10; num <=20; num++) {
//   document.write(` ${num},  `); // вывод на страницу сайта как в задании НЕ В КОНСОЛЬ!
// }
// document.write(`<br> <br>`);
/*
Вивести квадрати чисел від 10 до 20.
*/

// for(let num1 = 10; num1 <= 20; num1++) {
//   let exp = 2;
//   let res1 = num1 ** exp;
//   //let res1 = num1 **2;  ----- , без доп переменной exp.
//   document.write('  ' + res1 + '  ');
// }
// document.write(`<br> <br>`);

/*
Вивести таблицю множення на 7.
*/

// let num2 = 7;
// for( let multip = 0; multip <= 10; multip++) {
//   let result2 = num2 * multip;
//   document.write(`
//   ${num2} * ${multip} = ${result2} <br>`);
// }
// document.write(`<br> <br>`);

/*
Знайти суму всіх цілих чисел від 1 до 15.
*/

// let result3 = 0;
// for(let num3 = 1; num3 <=15; num3++) {
//   result3 += num3;
// }
// document.write(result3);
// document.write(`<br><br>`);

/*
Знайти добуток усіх цілих чисел від 15 до 35.
*/

// let result4 = 1;
// for(let num4 = 15; num4 <= 35; num4++) {
//   result4 *= num4;
// }
// document.write(result4);
// document.write(`<br> <br>`);

/*
Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
*/
// let count = 0; 
// let summ = 0;
// for( let num5 = 1; num5 <= 500; num5++) {
//   summ += num5;
//   count++
//   // console.log(summ, count);
// }
// console.log( summ / count); // тут можно бы было ввеси еще одну переменную но зачем?

/* 
Вивести суму лише парних чисел в діапазоні від 30 до 80.
*/

// for(let num6 = 30; num6 <= 80; num6++) { // как вариант  num6 = num6 + 2
//   if(num6 % 2 === 0) {
//     console.log (num6);
//   }
// }

/*
Вивести всі числа в діапазоні від 100 до 200 кратні 3.
*/

// for (let num7 = 100; num7 <=200; num7++) {
//   if(num7 % 3 === 0 )  {
//     console.log(num7);
//   }
// }

/*
Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
Визначити кількість його парних дільників.
Знайти суму його парних дільників.
*/

// // ИСПРАВЛЕН КОД И ВЫПОЛНЯЕТ ЗАДАНИЕ 
// let naturNumber = +prompt("Enter here any natural number, please", '');
// let count1 = 0;
// let sumOfDivis = 0;
// let divisString = "Делители введенного числа: ";
// let pairDiv = '';
// let sumPairDiv = 0;
// // делитель не изменен на  '2' так как число "1" тоже является делителем 
// // но это больше математический спор о количестве делителей натурального числа.
// for (let divis = 1; divis <= naturNumber; divis++) {
//   if (naturNumber % divis === 0) {
//     divisString += divis + ', ';
//     if (divis % 2 === 0) {
//       pairDiv += divis + ', ';
//       sumPairDiv  += divis;
//       count1++;
//     }
//   }
// }

// console.log(`${divisString}`);
// console.log(`Количество парных делителей: ${count1}`);
// console.log(`Парные делители данного числа: ${pairDiv}`); // опция
// console.log(`Сумма парных делителей: ${sumPairDiv}`)

/*
Надрукувати повну таблицю множення від 1 до 10.
*/

// for(let firstNumber = 1; firstNumber <=10; firstNumber++ ) {
//   for(let secondNumber = 1; secondNumber <=10; secondNumber++ ) {
//     let multResult = firstNumber * secondNumber;
//     console.log(` ${firstNumber} * ${secondNumber} = ${multResult} `);
//   }
// }

/* HOMEWORK 11 
  
Написати цикли, які роблять наступне:\
Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
*/
// ================ ПРОСТО ДОБАВИЛ ОПЦИЮ ВЫВОДА В СТРОКУ ДЛЯ СЕБЯ ============

var string = '';
for (var numberOne = 20; numberOne <= 30; numberOne += 0.5) {
  console.log(numberOne); // возвращает numbers с шагом 0,5 от 20 до 30

  var resultNumber = numberOne.toString(); //опция
  string += resultNumber + ' '; // опция
}

console.log(string); // опция - красиво выводит строку)))

/*
Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
*/

// ==========    ИЗМЕНИЛ НАЗВАНИЯ ПЕРЕМЕННЫХ НА БОЛЕЕ ЛОГИЧНЫЕ ===========

var oneUsdInUah = 27; // курс гривны к доллару
var uahInUsdQuantity;
for (var usdQuantity = 10; usdQuantity <= 100; usdQuantity = usdQuantity + 10) {
  var _uahInUsdQuantity = oneUsdInUah * usdQuantity;
  console.log(" ".concat(_uahInUsdQuantity, " "));
}

/*
Дане ціле число. Вивести всі цілі числа від 1 до 100, 
квадрат яких не перевищує числа N.
*/

// ==========    ИЗМЕНИЛ НАЗВАНИЯ ПЕРЕМЕННЫХ НА БОЛЕЕ ЛОГИЧНЫЕ ===========

var userNumber = +prompt("enter you number", '');
for (var sqrt = 1; sqrt <= 100; sqrt++) {
  var _resultNumber = Math.pow(sqrt, 2);
  if (_resultNumber <= userNumber) {
    console.log(_resultNumber);
  }
}

/*
Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1,
які не мають інших дільників крім 1 і себе).
*/
// ==========    ИЗМЕНИЛ НАЗВАНИЯ ПЕРЕМЕННЫХ НА БОЛЕЕ ЛОГИЧНЫЕ ===========

var userNumberSimple = +prompt("Put your number from 2 ", '');
var numberIsSimple = true; // работаем через булевы значения если тру - то  выводим результат.

if (userNumberSimple <= 1) {
  numberIsSimple = false;
  console.log(" It is not a valid number");
} else {
  for (var k = 2; k <= Math.sqrt(userNumberSimple); k++) {
    // проверка выполнения числа на простоту 
    // 1. делитель должен начинаться с 2 (не может быть меньше 2); 
    // 2. делитель не должен превышать квадратного корня из данного нам числа;
    // 3. шаг поиска делителя - 1 так как ищем простое число (не дробное)
    if (userNumberSimple % k === 0) {
      numberIsSimple = false;
      break;
    }
  }
  // if(numberIsSimple) {
  //   console.log( `the number ${userNumberSimple} is a simple number`)
  // } else {
  //   console.log( `the number ${userNumberSimple} is  NOT a simple number`)
  // }

  //==============ПЕРЕПИСАЛ ЧЕРЕЗ ТРЕНАРНЫЙ ОПЕРАТОР===========
  console.log(numberIsSimple ? "the number ".concat(userNumberSimple, " is a simple number") : "the number ".concat(userNumberSimple, " is NOT a simple number"));
}

/*
Дане деяке число. Визначити, чи можна одержати це число шляхом 
зведення числа 3 у деякий ступінь. 
(Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
*/

var userNumberAny = +prompt("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0448\u0435 \u0447\u0438\u0441\u043B\u043E", '');
var x = 1;
while (x < userNumberAny) {
  x *= 3;
}
var message = x === userNumberAny ? "".concat(userNumberAny, " \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u043F\u0443\u0442\u0435\u043C \u0432\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0447\u0438\u0441\u043B\u0430 3 \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C.") : "".concat(userNumberAny, " \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u043E\u043B\u0443\u0447\u0435\u043D\u043E \u043F\u0443\u0442\u0435\u043C \u0432\u043E\u0437\u0432\u0435\u0434\u0435\u043D\u0438\u044F \u0447\u0438\u0441\u043B\u0430 3 \u0432 \u0441\u0442\u0435\u043F\u0435\u043D\u044C.");

// KONIEC)

/*  ЗАМЕЧАНИЯ ПРЕПОДАВАТЕЛЯ


2 - назви зминніх дуже нелогічні

let oneUsd = 10

3

let result = j ** 2; - ім"я змінної погане
не перевищує- це дорівнює або більше. в js для такого порівняння є оператор
result % 1 === 0 який сенс несе це порівняння? :)
4

if(numSimp) {
console.log( `the number ${numberM} is a simple number`)
}
if(!numSimp) {
console.log( `the number ${numberM} isNOT a simple number`)
}
можна вивести красиво через тернарний оператор

якщо не подобається - хоча б if else використати
*/