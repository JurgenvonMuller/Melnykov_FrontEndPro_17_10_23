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
let string = '';
for( let numberOne = 20; numberOne <= 30; numberOne += 0.5) {
  console.log(numberOne); // возвращает numbers с шагом 0,5 от 20 до 30

  let resultNumber = numberOne.toString(); //опция
  string += resultNumber +' '; // опция
}
console.log(string); // опция - красиво выводит строку)))

/*
Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
*/
let oneUsdInUah = 27; // курс гривны к доллару
uahInUsdQuantity;
for (let usdQuantity = 10; usdQuantity <= 100; usdQuantity = usdQuantity + 10) {
let uahInUsdQuantity = oneUsdInUah * usdQuantity; 
console.log(` ${uahInUsdQuantity} `);
}


/*
Дане ціле число. Вивести всі цілі числа від 1 до 100, 
квадрат яких не перевищує числа N.
*/

let userNumber = +prompt (`enter you number`, '');

for (let sqrt = 1; sqrt <= 100; sqrt++) {
 let resultNumber = sqrt ** 2; 
  if(resultNumber <= userNumber)  {  

    console.log(resultNumber);
  }
}



/*
Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1,
які не мають інших дільників крім 1 і себе).
*/

let userNumberSimple = +prompt(`Put your number from 2 `, '');
let numberIsSimple = true; // работаем через булевы значения если тру - то  выводим результат.

if(userNumberSimple <= 1) {
  numberIsSimple = false;
  console.log(` It is not a valid number`, '');
} else {
  for(let k = 2; k <= Math.sqrt(userNumberSimple); k++) { // проверка выполнения числа на простоту 
    //  1. делитель должен начинаться с 2 (не может быть меньше 2); 
    // 2. делитель не должен превышать квадратного корня из данного нам числа;
    // 3. шаг поиска делителя - 1 так как ищем простое число (не дробное)
    if(userNumberSimple % k === 0) {
      numberIsSimple = false;
      break;  // можно и нужно использовать для ускорения итераций при нахождении первого ТРУ цикл прерывается
      //хотя как по мне - начинается новая итерация. 
    }
  }
  if(numberIsSimple) {
    console.log( `the number ${userNumbersimple} is a simple number`)
  } else {
    console.log( `the number ${userNumbersimple} is  NOT a simple number`)
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

// let userNumberAny = +prompt(`Введите ваше число`, '');
// let x = 1;

// while (x < userNumberAny) {
//     x *= 3;
// }
// if (x === userNumberAny) {
//     console.log(`${userNumberAny} может быть получено путем возведения числа 3 в степень.`);
// } else {
//     console.log(`${userNumberAny} Не может быть получено путем возведения числа 3 в степень.`);
// }

// KONIEC)

/*
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
