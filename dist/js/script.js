"use strict";

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
for (var i = 1; i <= 3; i++) {
  for (var j = 1; j <= 3; j++) {
    document.write("".concat(i).concat(j, "   "));
  }
}

// заполнение массива 159 задание