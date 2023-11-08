"use strict";

// let maxElem = 0;
// let key_maxElem = 0;

// const { name } = require("browser-sync");

// let arr = [1, 2, 6, 4, 5, 3];
// for(let i = 0;  i < arr.length - 1; i++) {
//   if(arr[i] > maxElem) {
//     maxElem = arr[i];
//     key_maxElem = i;
//   }
//     if( arr[i] !== maxElem && i !== key_maxElem) {
//       arr[i] = 0;
//     }

// }
// console.log(maxElem);
// console.log(key_maxElem);
// // for(let i = 0;  i <= arr.length - 1; i++) {

// // }

// console.log(arr);

/*  HOMEWORK 9 
Переписати код нижче з використанням конструкції switch…case*/

/*   ИСХОДНЫЙ КОД:

let numOrStr = prompt('input number or string');
console.log(numOrStr)

if(numOrStr === null) {
console.log('ви скасували')
} else if( numOrStr.trim() === '' ) {
console.log('Empty String');
} else if ( isNaN( +numOrStr ) ) {
console.log(' number is Ba_NaN')
} else {
console.log('OK!')
}

        РЕШЕНИЕ ДОМАШНЕГО ЗАДАНИЯ С ИСПОЛЬЗОВАНИЕМ switch / case    */
/*
let numOrStr = prompt('input number or string');
console.log(numOrStr)

switch(true) {
  case numOrStr === null:
    console.log('ви скасували');
  break;
  case  numOrStr === '':
    console.log('Empty String');
  break;
  case isNaN( +numOrStr ):
    console.log(' number is Ba_NaN');
  break;
  default:
    console.log('OK!');
  break;
}

*/

/*      Hometask additional "Check - list"
        
       FALSE
console.log(Boolean(0));         // false
console.log(Boolean(+0));        // false
console.log(Boolean(-0));        // false
console.log(Boolean(null));      // false
console.log(Boolean(''));        // false
console.log(Boolean(NaN));       // false
console.log(Boolean(undefined)); // false
          
          TRUE

console.log(Boolean('string'));   // true
console.log(Boolean(+Infinity));  // true  
console.log(Boolean(-Infinity));  // true
console.log(Boolean('number'));   // true

        ACHTUNG,  STRING!!!

console.log(Boolean('0'));         // true
console.log(Boolean('false'));     // true
console.log(Boolean('NaN'));       // true
console.log(Boolean('null'));      // true
console.log(Boolean('undefined')); // true
*/

/*
  1 const/let
  2 variable names
  3 correct output
*/

// HOME TASK - TO READ BY YOURSELF
/*number.toString()

10.toString();

JS воспринмимает эту запись как попытку обратьтся к числу с плавающей точкой
то есть к десятичной дроби. 
Что бы избежать этого надо использовать один из методов изменения записи ЦЕЛЫХ чисел перед 
toString() 

var number = 10;
number.toString(); или
10..toString();     или
10 .toString();    или
(10).toString();   

В то же время проблем с действительными дробными числами не возникает и 
запись может быть такова: 

12.5.toString(); // 12.5 преобразовывается в строку без проблем.




// javascript number literal to string problem 

/*
number
number -> string
number -> boolean (0, NaN -> false / ALL -> true)

// const number = 10;
// const string1 = number.toString(); // вернет '10'
// const string2 = String(number);    // вернет '10'
// const string3 = number + '';       // вернет '10'
// const string4 = `${number}`;       // вернет '10'
// const boolean = Boolean(number);   // // вернет true (Boolean)
*/
/*
string
string -> number
string -> boolean ('' -> false / all other -> true)

// const string = '10';
// const number1 = Number(string);  // вернет 10 как число.
// const number2 = +string;         // вернет 10 как число.
// const number3 = string / 5;      // вернет 2 как число
// const boolean = Boolean(string); //вернет true как булево значение
*/
/*
const a;
String(a);
Number(a);
Boolean(a);

undefined -> string -> 'undefined' 
undefined -> number -> NaN
undefined -> boolean -> false
*/
/*
null -> string -> 'null'
null -> number -> 0
null -> boolean -> false
*/
/*
boolean -> string -> 'true'/'false'
boolean -> number -> 1 / 0
*/
// HOMETASK 2 - > create a table with all transformations
// ------ 
// WTF JS  ---------------  просмотрено но не осознано )))

// const a = 10;
// const b = '10';
// const c = true;

// let check1 = '1' == boolean;

// const check2 = check1 == Boolean(check1); // true

// const checkToNumber1 = a === Number(b);  // false
// const checkToString1 = String(a) === b;  // true
// const checkToNumber2 = a !== Number(b);  // false
// const checkToString2 = String(a) !== b;  // false
// const checkToNumber3 = a != Number(b);   // false
// const checkToString3 = String(a) != b;   // false

// a === b => true  ???? //false так как ф - число а b - строка!!!!
// 1 !== 1 => false
// 1 === 2 => false
// 1 !== 2 => true

// if (check1) {
//   alert('YES, THEY ARE EQUAL!');
// }

// if (check2) {
//   // DO THIS
// }

// const a = 10;
// const b = '10';
// const equal = a === b; // false
// // const notEqual = a !== b; // true
// const notEqual1 = !a; // false
// const notEqual2 = !b; // false
// const notEqual3 = !equal; // true

// const a = !!alert(1); // false
// const b = !!10; // true
// const c = !!'10'; // true
// const d = !!''; // false

// Boolean(myVariable);
// const a = !myVar; // true/false
// const b = !a; // false/true
// const c = +b; // 0/1
// const d = (+(!(!myVar)));

// const string = 'a';
// const number = Number(string);

// const a = true || ...; // -> true
// const c = false && ...; // -> false

// let arr = [1, 2, 3, 4, 5];
// let count;
// for(let item of arr) {
//   console.log(item);

// }
// console.log(arr.length + '  length');

/*
let key1; 
let obj = {a: 11, b: 22, c: 33, d: 44};

for( let key in obj) {
  console.log(key);
  console.log(`${key} ${obj[key]}`);
}

let f = 7;
let count = 0;
while(f < 20) {
  console.log(f);
  f += 5;
  count++
}
console.log(count + ' count');


let bred = 8;
let count = 0;

while(bred >=4) {
  console.log(bred);
  bred--
  count++
}
console.log(count + '  count');

*/
// let cvvt = 9;
// let count = 0;

// while(cvvt <= 12) {
//   console.log(cvvt);
//   cvvt++
//   count++
// };
// console.log(count);

/*
for(let num = 100; num >=0; num--) {
  console.log(num);
}
*/
//Найдите произведение целых чисел от 1 до 20.
/*
let mult = 1;

for(let k = 1; k <=20; k++) {
  mult = mult * k;
}
console.log(mult);
*/
// https://forms.gle/bodpDxEVVAAhdwmH7
// const minimalAge = 18;
// var ageConfirmed = confirm('Are you ${minimalAge}?')

// if (ageConfirmed) {
//   alert('Go to website');
// }

// // Cykle FOR ... OF only for arrow 
// let arr = ['q','' , 'w','' ,'e', '7'];

// for(let item of arr) {
//   console.log(item);
// }

// let newarr = new Array(5);
// console.log(newarr);
// newarr[0] = 1;
// console.log(newarr);

// let arr1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(arr1);
// for(let item of arr1) {
//   console.log(item);
// }

// Цикл FOR ...IN  предназначен для объектов! 
// let obj = {x: 1, y: 2, z: 3};
// for(let key in obj) {
//   console.log(key);
//   console.log(obj[key]);
// }

// let num = 500;

// while (num > 10) {
// 	num = num / 2;
// }

// console.log(num); // результат

// let num = 0;
// while(num <= 99 ) {
//   num++
//   console.log(num);
// }

// Выведите в консоль числа от 11 до 33.

// let num1 = 33;
// while(num1 >=11) {
//   console.log(num1);
//   num1--
// }

/*Дано число num с неким начальным значением.
Умножайте его на 3 столько раз, пока результат умножения не
станет больше 1000. Какое число получится? Посчитайте количество
итераций, необходимых для этого. */

// let num = 1000;
// let count = 0;
// while(num >= 1 ) {
//   console.log(num);
//   num = num / 3;
//   count++
// }
// console.log(count);

// let num5 = 500;

// while (num5 > 10) {
// 	num5 = num5 / 2;
// }

// console.log(num5); // результат

// С помощью цикла for выведите в консоль числа от 1 до 100.

// for(let num = 1; num <=100; num++) {
//   if(num % 2 ===0) {
//     console.log(num);
//   }
// }

// С помощью цикла for выведите в консоль нечетные числа в промежутке от 1 до 99.

// for(let num = 1; num <= 100; num++) {
//   if(num % 2 !== 0) {
//     console.log(num);
//   }
// }

// С помощью цикла for выведите в консоль числа от 100 до 0.

// for( let num = 100; num >= 1; num--) {
//   console.log(num);
// }

// Цикл for для массивов 

// let arr = [2, 5, 9, 15, 1, 4];

// for(let j = 0; j <= arr.length - 1; j++) {

//   if( arr[j] > 3 && arr[j] < 10) {
//     console.log(arr[j]);
//   }
// }
/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// Выведите в консоль те элементы объекта, значения которых - нечетные числа.

for(let key in obj) {
  console.log(obj[key]);
  console.log(key);

  // if((obj[key]) % 2 !== 0) {
  //   console.log(obj[key]);
  // }
} 
  console.log(obj)
  */

/* Найдите сумму четных чисел от 2 до 100.

let res = 0;

for(let j = 2; j <= 100; j++) {
  if( j % 2 ===0 ) {
    res += j;
  }
}
console.log(res);
*/

/*
Найдите сумму нечетных чисел от 1 до 99.
*/
// let sum = 0;
//   for(let j = 1; j <= 99; j++) 
//   if(j % 2 !== 0){
//   sum += j;
//   }
// console.log(sum);

/*
Найдите произведение целых чисел от 1 до 20.
*/
// let mult = 1;
// for( let j = 1; j <= 20; j++) {
//   if( j % 1 === 0) {
//     mult = mult*j;
//   }
// }
// console.log(mult);
/*
let arr = [2, 5, 9, 3, 1, 4];
// Найдите сумму элементов этого массива.
let res = 0;
for(let elem of arr) {
  res += elem;
}
console.log(res);
*/

// let arr = [2, 5, 9, 3, 1, 4];
// // Найдите сумму элементов элементов, являющихся четными числами.
// let res = 0;
// for(let elem of arr) {
//   if( elem % 2 === 0) {
//     res += elem;
//   }
// }
// console.log(res);

/*
Найдите сумму квадратов элементов этого массива.
*/
// let arr = [2, 5, 9, 3, 1, 4];
// let sumSqrt = 0;
// for(let elem of arr) {
//   sumSqrt += elem ** 2;
// }
// console.log(sumSqrt);

/*
Найдите произведение элементов этого массива.
*/
// let arr = [2, 5, 9, 3, 1, 4];
// let res = 1;
// for(let elem of arr) {
//     res *= elem;
//   }
//   console.log(res);

// let str = '';

// for (let i = 1; i <= 5; i++) {
// 	str += i;
// }

// console.log(str); // выведет '12345'

// С помощью цикла сформируйте строку, заполненную 5-тью дефисами.

// let str = '';
// let res;
// for(let i = 0; i <= 5; i ++) {
// str += '-';
// }
// console.log(str);

// let str = '';
// for(let i = 1; i <= 9; i++) {
//   str += i;
// }
// console.log(str);

//  123456789'. '987654321' С помощью цикла сформируйте строку '-1-2-3-4-5-6-7-8-9-'.

//  let str = ' ';
//  for(let i = 1; i <= 9; i++) {
//   str +='-' + i;
//  }
// console.log(str);
//  урок 153  начать

// for (let i = 1; i <= 100; i++) {
// 	let str = String(i); // преобразуем число в строку

// 	if (str[0] === '1' || str[0] === '2') {
// 		console.log(i);
// 	}
// }

// for(let k = 1; k <= 100; k++) {
//   let str1 = String(k);
//   if(str1[0] === '1' || str1[0] === '2') {
//     console.log(str1)
//   }
// }

// Переберите циклом числа от 10 до 1000 и выведите в консоль первую цифру каждого числа.
// let result = '';

// for(let j = 10; j <= 100; j++) {
//   let str2 = String(j);
//   result += str2[0] + ", ";
//   console.log(result);
// }

/*
// Переберите циклом числа от 10 до 1000 и выведите в консоль 
// сумму первой и второй цифры каждого числа.
// */
// let result = 0;
// for (let j = 10; j <= 1000; j++) {
//   let str = String(j);
//   if(str.length >=2) {
//     result = Number(str[0]) + Number(str[1]);
//     console.log(result);
//   }
// }

/*
Переберите циклом числа от 10 до 1000 и выведите
 те числа, первая цифра которых равна 1.
*/

// for(let j = 10; j <= 1000; j++)  {
//   let str = String(j);
//   if(str[0] === '1') {
//     console.log(str);
//   }
// }
/*
Переберите циклом числа от 10 до 1000 и 
выведите на экран те числа, сумма двух первых цифр которых равна 5.
*/

// let result;
// for(let j = 10; j <= 1000; j++) {
//   let str = String(j);
//   if (Number(str[0]) + Number(str[1]) === 5) {
//     console.log(str);
//   }
// }

/*
Дан массив с числами. Запустите цикл, который будет по очереди выводить
элементы этого массива в консоль до тех пор, пока не встретится элемент
со значением 0. После этого цикл должен завершить свою работу.
*/

// let result;
// let arr = [1, 2, 3, 0, 40, 9];

// for(let j = 0;  j <= arr.length -1; j++) {
//   let str = String(arr[j]);
//   if(str.includes('0')) {
//     console.log(arr[j]);
//     // break;
//   }
// }
/*
Дан массив с числами. Найдите сумму элементов, 
расположенных от начала массива до первого отрицательного числа.
*/

// let arr = [1, 2, 3, -4, -5, 9, 90, 78];
// let result;

/*
Дан массив с числами. 
Найдите позицию первого числа 3 в этом массиве 
(считаем, что это число обязательно есть в массиве).
*/
// let arr = [1, 2, 3, -4, -5, 9, 3, 78];
// let result;
// for( let j = 0; j <= arr.length - 1; j++) {

// if(arr[j] === 3) {
//   console.log(j);
// }

// }
/*
Определите, сколько целых чисел, начиная с числа 1, нужно сложить, 
чтобы сумма получилась больше 100.
*/
// let count = 0;
// let result = 0;
// for(let j = 1; j <= 100; j++) {
// result += j;
// count++;
// if(result >= 100 ) {
//   console.log(count)
//   break;
// }
// }

// for (let i = 1; i <= 3; i++) {
// 	for (let j = 1; j <= 2; j++) {
// 		document.write(i);

// 	}
// }

/*
С помощью двух вложенных циклов выведите на экран следующую строку:

111222333444555666777888999
// */
// for(let i = 1; i <= 9; i++) {
//   for(let j = 1; j <= 3; j++) {
//     document.write(i);
//   }
// }

// for(let i = 1; i <= 9; i++) {
//   for(let j = 1; j <= 3; j++) {
//     console.log(i, j);
//   }
// }
/* 
С помощью двух вложенных циклов выведите на экран следующую строку:

11 12 13 21 22 23 31 32 33
*/
//  for( let i = 1; i <=3; i++) {
//   for(let j = 1; j <= 3; j++) {
//     document.write(`${i}${j}   `);
//   }
//  }

// заполнение массива 159 задание 

/*
Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
Визначити кількість його парних дільників.
Знайти суму його парних дільників.
*/

// let naturNumber = +prompt("Slava, enter here any natural number, please", '');
// let count1 = 0;
// let sumOfDivis = 0;
// let divisString = "Делители введенного числа: ";
// let pairDiv;

// for (let divis = 1; divis <= naturNumber; divis++) {
//   if(naturNumber % divis === 0) {
//     sumOfDivis += divis;
//     divisString += divis +',  ';
//     count1++;
//       if(divis % 2 === 0) {
//         divis = PairDiv;
//       }
//     }
//   }
// console.log(`Парные делители данного числа это: ${pairDiv}`)
// console.log(`${divisString}`);
// console.log(`Количество делителей: ${count1}`);
// // console.log(`Summ of divisors is ${sumOfDivis}`);
// // console.log(`NUMBER OF DIVISORS OF THIS NATURAL NUMBER IS ${count1}`);

// let naturNumber = +prompt("Slava, enter here any natural number, please", '');
// let count1 = 0;
// let sumOfDivis = 0;
// let divisString = "Делители введенного числа: ";
// let pairDiv = '';
// let sumPairDiv = 0;

// for (let divis = 1; divis <= naturNumber; divis++) {
//   if (naturNumber % divis === 0) {
//     divisString += divis + ', ';
//     count1++;
//     if (divis % 2 === 0) {
//       pairDiv += divis + ', ';
//       sumPairDiv  += divis;
//     }
//   }
// }

// console.log(`Парные делители данного числа: ${pairDiv}`);
// console.log(`${divisString}`);
// console.log(`Количество делителей: ${count1}`);
// console.log(`Сумма парных делителей: ${sumPairDiv}`)

// let arr = [];
// let symb = 'x';
// for( let i = 0;  i <= 10; i++)  {
//   arr.push('x');
// }
// console.log(arr);
/*
const keys = ['name', 'age', 'city', 'gender', 'occupation'];
const values = ['John', 30, 'New York', 'Male', 'Engineer'];
let obj = {};
for(let i = 0; i <= 6; i++) {
  obj[keys[i]] = values[i];
}
console.log(obj);
*/

/* 
С помощью цикла создайте объект, ключами которого будут названия
дней, а значениями - их номера.
*/
/*
let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
let arr2 = [1, 2, 3, 4, 5, 6, 7];
let week = {};
let maxLength = Math.max(arr1.length, arr2.length);

for(let i = 0; i < maxLength; i++) {
  week[arr2[i]] = arr1[i];
}
console.log(week);
*/
/*
Переберите этот объект циклом и запишите в новый объект 
те элементы, которые являются четными числами.
*/
/*

let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};

let keysArray = Object.keys(obj);
console.log(keysArray);

let maxLength_keys = keysArray.length;
console.log(maxLength_keys);

let valuesArray = Object.values(obj);
console.log(valuesArray);

let maxLength_values = valuesArray.length;
console.log(maxLength_values);

let obj1 = {};

for(let i = 0; i < maxLength_keys && i < maxLength_values; i++) {
  if( valuesArray[i] % 2 === 0) {
    obj1[keysArray[i]] = valuesArray[i];
  }
}
console.log(obj1);
*/

/*
Переберите этот объект циклом и создайте новый объект так, 
чтобы его ключами стали элементы старого объекта, 
а значениями - ключи старого объекта.
*/
/*
let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
console.log(obj);
let keyArray_obj = Object.keys(obj);
let valueArray_obj = Object.values(obj);

let obj_new = {};

for(let i = 0; i < keyArray_obj.length; i++) {
  obj_new[valueArray_obj[i]] = keyArray_obj[i];
}
console.log(obj_new);

function myName(){
  console.log('Jarne');
}

myName();
*/
// let sum = 0;
// function summ_1_100() {
//   for(let i = 1; i<=100; i++) {
//   sum += i;
//   console.log(sum);
//   }
//   console.log(sum);
// }
// summ_1_100() 
// console.log(sum);

// let sum = 0;

// function summ_1_100() {
//   for (let i = 1; i <= 100; i++) {
//     sum += i; // Накапливаем сумму, используя глобальную переменную
//     // console.log(sum); // Выводим сумму на каждой итерации
//   }
//   console.log(sum); // Выводим окончательную сумму после цикла
// }

// summ_1_100(); // Вызываем функцию для вычисления суммы
// console.log(sum); // Выводим глобальную переменную sum вне функции
/*
let numInKub;
let num = 3;
function inKub() {
  // Math.pow(base, exponent) 3**2 =>>>> Math.pow(3,2);
  numInKub = Math.pow(num, 3);
  console.log (numInKub);
}
inKub(num);
*/
/*
Сделайте функцию, которая параметром принимает число и проверяет,
 положительное это число или отрицательное. В первом 
случае пусть функция выводит в консоль текст '+++', а во втором '---'.
*/
// let res;
// let exp = 3;
// function paramFunc(num) {
//   res = Math.pow(num, exp);
//   console.log(res);
//   console.log(num);
//   console.log(exp);
// }
// let param = -2;
// paramFunc(param);

// function check_num() {
//   (res >0) ? console.log('+++++++') : console.log(' ------ ');
// }
// check_num();

/*
Сделайте функцию func, которая параметром будет принимать 3 числа
 и выводить в консоль их сумму. Пусть даны 3 переменные с числами:

let param1 = 1;
let param2 = 2;
let param3 = 3;
С помощью созданной вами функции выведите в консоль сумму значений эти переменных.
*/

// function well(num) {

//   return num**3
// }

// let r = 4;
// let res = well(r)
// console.log(res);
// let res1 = well(2);
// console.log(res1);

// let res;
// let n = 30;
// function ref(num) {
//   res = num * 3;
//   return num * 4;
// }
// console.log(n);
// let res1 = ref(5);
// console.log(res1);
// console.log(res1 + res);

/*
Сделайте функцию, которая параметром принимает число,
а возвращает куб этого числа. С помощью этой функции найдите куб числа 3 
и запишите его в переменную res.
*/

// function kub(num) {
//   let res = Math.pow(num, 3);
//   console.log(res);
//   return res;
// }
// let res1 = kub(3);
// console.log(res1);

/* 
Сделайте функцию, которая параметром принимает число, 
а возвращает квадратный корень из этого числа. С помощью этой функции найдите корень числа 3, 
затем найдите корень числа 4. Просуммируйте полученные результаты и выведите их в консоль.
*/

// function geo(num1, num2) {
// let sum = Math.sqrt(num1) + Math.sqrt(num2);
// return sum;
// }

// console.log(geo(3,4));
/*
Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, 
округляющая дробь до трех знаков в дробной части:

function sqrt(num) {
	return Math.sqrt(num);
}

function round(num) {
	return num.toFixed(3);
}
С помощью этих функций найдите квадратный корень из числа 2 
и округлите его до трех знаков в дробной части.
*/

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// let result = Number(round(sqrt(3)));
// console.log(result);

/*
Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция,
возвращающая сумму трех чисел:
function sqrt(num) {
	return Math.sqrt(num);
}
function sum(num1, num2, num3) {
	return num1 + num2 + num3;
}
С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и запишите ее в переменную res.
*/

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// let res = sum(sqrt(2), sqrt(3), sqrt(4));
// console.log(res);

/*
Пусть у вас есть функция, округляющая дробь до трех знаков в дробной части:

function round(num) {
	return num.toFixed(3);
}
С помощью этой функции модифицируйте предыдущую задачу так, 
чтобы в переменную res записывалась дробь, округленная 
до 3-х знаков в дробной части.
*/

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }

// function round(num) {
//   return num.toFixed(3);
// }
// let ressum = sum(sqrt(2), sqrt(3), sqrt(4));
// let res = parseInt(round(ressum));
// console.log(res);

// function func(num) {
// 	let sum = 0;

// 	for (let i = 1; i <= num; i++) {
// 		sum += i;
// 	}
//   return sum;
// }

// console.log( func(5) );

// =====================================================

// const pushIntoArray = function(arr) {

// };

// sum([], 1,2,3) // [1,2,3]
// sum([0], 1,2,3,4,5,6) // [0, .....6]
// использование arguments не объявленные параметры в вызове функции
// повторить преобразования явные и неявные 
// ========================================================

// Реалізуйте функцію generateKey(length, characters), яка повертає рядок випадкових 
// символів із набору characters довжиною length. span>

// Наприклад:

// const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

// адание предполагает создание функции generateKey, которая возвращает строку случайных символов 

// из заданного набора characters заданной длины length.

// function generateKey(length, characters) {
//   let result = '';
//   const charactersLength = characters.length;

//   for (let i = 0; i < length; i++) {
//     const randomIndex = Math.floor(Math.random() * charactersLength);
//     result += characters.charAt(randomIndex);
//   }

//   return result;
// }

// Эта функция принимает два параметра: length - длина генерируемой строки и 
// characters - строка, содержащая символы, из которых будет формироваться случайный ключ.

// Функция создает пустую строку result и в цикле добавляет случайные символы из 
// characters до достижения нужной длины, используя Math.random() для выбора случайного 
// индекса в строке characters.

// Обратите внимание, что это лишь пример реализации. В реальных системах для генерации 
// ключей безопасности лучше использовать специализированные библиотеки или функции, 
// которые обеспечивают высокий уровень безопасности и случайности в ключах.

// // Пример использования функции:
// const chars = 'abcdefghijklmnopqrstuvwxyz1234567890!@#$%';
// const generatedKey = generateKey(10, chars); // Генерация ключа из символов chars длиной 10 символов

// console.log(generatedKey); // Вывод сгенерированного ключа
/*
let num;
function getRandomNum(min, max) {

  num = Math.random() * (max - min) + min;
	return num;
}
getRandomNum(10, 100);
console.log(num);
*/

// let arr = [1, 2, 3, 4, 5];

// console.log(arr[1] + arr[2] + arr[3] + arr[4] + arr[0]);

// let arr1 = {1, 2, 3, 4, 5};
// console.log(arr1.length);

// let result = 0;
// let sum = function(num1, num2) {
//   for( let i = num1; i <= num2; i++) {
//     result += i;
//   }
//   console.log(result);
//   return result;
// };
// sum(1,100);

// let summ = function(a, b) {
//   console.log(a * b);
//   return a * b;
// }
// summ(4, 6)
// let sum1 = summ(4,5) - summ(2, 3);

// console.log(sum1);
// console.log(sum1 - 8);

// Сделайте функцию, которая параметром принимает число, 
// а возвращает куб этого числа. С помощью этой функции найдите
//  куб числа 3 и запишите его в переменную res.

// let exp = function(num, expNum = 3) {
//     let result = Math.pow(num, expNum);
//     console.log(result);
//     return result;
// };
// let res = exp(3, 5);
// console.log(res);

// let numSqrt = function(num1, sqrtNum) {
//   let resultSqrt = Math.sqrt(num1, sqrtNum);
//   console.log(resultSqrt);
//   return resultSqrt;
// };
// let allRes = numSqrt(3, 2) + numSqrt(4,2);
// console.log(numSqrt(3, 2),  numSqrt(4,2));

// console.log(allRes);

/*
Пусть у вас есть функция, возвращающая квадратный корень из числа, и функция, 
возвращающая сумму трех чисел:
С помощью этих функций найдите сумму корней чисел 2, 3 и 4 и 
запишите ее в переменную res.
*/

// function sqrt(num) {
// 	return Math.sqrt(num);
// }

// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let num1 = 2;
// let num2 = 3;
// let num3 = 4;
// let res = Number((sum(sqrt(num1), sqrt(num2), sqrt(num3))).toFixed(1));
// console.log(typeof res);
// console.log(res);
// console.log(num1, num2, num3);

function func() {
  console.log('!');
}
var test = func;
console.log(func());
console.log(test());

// Сделайте функцию func1, которая будет возвращать через return число 3.

var func1 = function func1(num1) {
  return num1;
};
console.log(func1(3));
var func2 = func1;
console.log(func2);