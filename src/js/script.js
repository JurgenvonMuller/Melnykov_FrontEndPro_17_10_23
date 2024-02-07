// import _ from 'lodash';

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
// let test = function func() {

//   console.log('!');
//   test();

// }
// test();
// let obj = {
//   func1: function() {return 1},
//   func2: function() {return 2},
//   func3: function() {return 3},
//   func4: function() {return 4}
// };
// console.log(obj.func1() + obj.func2() + obj.func3() + obj.func4());

// for(let elem in obj) {
//   console.log(elem());
//   let summ = 0;
//   summ += elem();
// }

// let math = {
//   square: function(num) {return num + num},
//   cube: function(num) {return (num * num) + (num * num)},
//   cube1: function(num) {return (num * num* num) + (num * num * num)},
// };
// console.log(math.square(2));
// console.log(math.cube(2));
// console.log(math.cube1(2));

// let test = function(func1, func2, func3) {
// console.log(func1() + func2() + func3());
// };

// test(function() {return 1}, function() {return 2}, function() {return 3});

// let func1 = () => {return 1};
// let func2 = () => { return 2};
// let func3 = () => {return 88};

// let test = (fu1, fu2, fu3) => {

//   console.log(fu1() + fu2() + fu3());

// };
// test(func1, func2, func3);
// let test =(num, func1, func2) => {
//   console.log(func1(num) + func2(num));
// };
// let f1 = (num) => { return num * num };
// let f2 = (num) => { return num * num * num};
// test(3, f1, f2);

// let test = (arr, func) => {

//   for(let i = 0; i < arr.length; i++) {
//     arr[i] = func(arr[i]);
//   }
//   return arr
// };

// let arr = [3, 4, 5, 6, 7];
// let f1 = (num) => { return num ** 3};
// let result = test(arr, f1);
// console.log(result);

// let func = (num1, num2) => {
//   return num1 * num1 + num2 * num2;
// };
// console.log(func(2,3));

// let test =(num1, num2) => {
//   let square =(num) => {
//     return num * num
//   };
//   return square(num1) + square(num2);
// };

// let result = test(4,5);
// console.log(result);

/*Створити масив, довжину та елементи якого задає користувач.
Відсортувати масив за зростанням.
Видалити елементи з масиву з 2 по 4 (включно!).
У міру змін виводити вміст масиву на сторінку.
*/

// let array = [];
// arraylength  = Number(prompt('Put array length', ''));

// for (let i = 0; i < arraylength; i++) {
//   array.push(Number(prompt(`Put ${[i]} element of array`, '')));

// }
// console.log(array);

// function compare(a, b) {
//     return a - b;
//   };
//   array.sort(compare);
// console.log(array);
// let arrayShort = array.splice(1, 3);

// console.log(arrayShort);
// console.log(array);
/*
Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.

Наприклад:
*/
// const array = [1, 2, 3, 4, 5, 6, 7];
// removeElement(array, 5 );
// console.log(array);
// Результат: [1, 2, 3, 4, 6, 7]

// let removeElement = (array, item) => {
// index = item - 1;
// array.splice(index, 1);
// }
// removeElement(array, 5 );
// console.log(array);

/*
Реалізуйте функцію generateKey(length, characters), 
яка повертає рядок випадкових символів із набору characters 
довжиною length. span>

Наприклад:

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

const key = generateKey(16, characters);


console.log(key); // C

*/
/*
const characters = "abcdefghijklmnopqrstuvwxyz0123456789";

let a = "eg599gb60q926j8i";

const length = 16;
let key = [];
// characters[0];

let  key1 = '';
let generateKey = (length, characters) => {
  for (let i = 0; i < length; i++) {
    let randomNumber = Math.ceil(Math.random() * length);
    // console.log(randomNumber);
    // console.log(characters[randomNumber]);
    key.push(characters[randomNumber]);
  
    key1 += characters[randomNumber];

  };
  console.log(key1);
  console.log(key);
};


// console.log(characters);
generateKey(16, characters)
generateKey(16, characters)

generateKey(16, characters)


// const key = generateKey(16, characters);
// console.log(key); // eg599gb60q926j8i

// console.log(Math.floor(Math.random()));
// console.log(Math.ceil(Math.random()));
// function run() {
// let randomNumber = Math.ceil(Math.random() * 3);
// return  randomNumber;
// };
// console.log(run());
// console.log(run());
// console.log(run());
// console.log(run());
// console.log(run());
// console.log(run());
// console.log(run());
// console.log(run())
*/
/*
Дан масив об'єктів. Вивести масив телефонних номерів користувачів, 
у яких баланс більше 2000 доларів. 
І знайти суму всіх балансів користувачів
*/
/*
let users = [
{
"index": 0,
"isActive": true,
"balance": "$2,226.60",
"name": "Eugenia Sawyer",
"gender": "female",
"phone": "+1 (840) 583-3207",
"address": "949 John Street, Rose, Puerto Rico, 1857"
},
{
"index": 1,
"isActive": true,
"balance": "$2,613.77",
"name": "Pauline Gallegos",
"gender": "female",
"phone": "+1 (985) 593-3328",
"address": "328 Greenpoint Avenue, Torboy, North Dakota, 6857"
},
{
"index": 2,
"isActive": false,
"balance": "$3,976.41",
"name": "Middleton Chaney",
"gender": "male",
"phone": "+1 (995) 591-2478",
"address": "807 Fleet Walk, Brutus, Arkansas, 9783"
},
{
"index": 3,
"isActive": true,
"balance": "$1,934.58",
"name": "Burns Poole",
"gender": "male",
"phone": "+1 (885) 559-3422",
"address": "730 Seba Avenue, Osage, Alabama, 6290"
},
{
"index": 4,
"isActive": true,
"balance": "$3,261.65",
"name": "Mcfadden Horne",
"gender": "male",
"phone": "+1 (942) 565-3988",
"address": "120 Scholes Street, Kirk, Michigan, 1018"
},
{
"index": 5,
"isActive": false,
"balance": "$1,790.56",
"name": "Suzette Lewis",
"gender": "female",
"phone": "+1 (837) 586-3283",
"address": "314 Dunne Place, Bawcomville, Guam, 9053"
}
]

      // console.log(parseFloat(users[0].balance.replace(/[$,]/g, '')));

let userBalance = 0;
let userSumBalanse = 0;
let richUsersPhoneArray = [];
// console.log(users[0].phone);
// richUsersPhoneArray.push(users[0].phone)

for (let i = 0; i < users.length; i++) {
  
  userBalance = parseFloat(users[i].balance.replace(/[$,]/g, ''))
  userSumBalanse += userBalance;
  userSumBalanse = parseFloat(userSumBalanse.toFixed(2));
  (userBalance >= 2000) ? richUsersPhoneArray.push(users[0].phone) : undefined ;
}
console.log(richUsersPhoneArray);
console.log(userSumBalanse);

/*
Ця дз складається з чотирьох невеликих завдань, за реалізацію
кожної з них можна отримати 25 балів:
Дано масив з елементами різних типів. Створити функцію яка 
вираховує середнє арифметичне лише числових елементів даного масиву.
*/
/*
let array = [123, 45, 'u8',  'werwe', 789, '234', null, undefined, true, 236 ]
let summ = 0;
let count = 0;
let func1 = () => {
  for(let i = 0; i < array.length; i++) { 
    if (typeof array[i] === 'number' && !isNaN(array[i])) {
      count++
  summ += array[i];
  middleSumm = summ / count;
}
}
console.log(summ, count, middleSumm);
};

func1();
*/

/*
Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: 
числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ 
(ступінь ).Вивести результат математичної дії, вказаної в змінній znak.
Обидва числа і знак виходять від користувача.
*/
/*
let x = +prompt("Put first number", "");
let y = +prompt("Put second number", "");
let znak = prompt("Put math operation", "");
let result = 0;

let func2 = (x, y) => {
  switch (znak) {
    case "+":
      result = x + y;
      console.log(result);
      break;
    case "-":
      result = x - y;
      console.log(result);
      break;
    case "*":
      result = x * y;
      console.log(result);
      break;
  }
};
*/
/*
Написати функцію заповнення даними користувача двомірного масиву. 
Довжину основного масиву і внутрішніх масивів задає користувач. 
Значення всіх елементів всіх масивів задає користувач.
*/
/*
let array1 = [];
array1Length = +prompt("Put length of first array", "");
array2Length = +prompt("Put length of second array", "");

let insertArray = () => {
  for (let i = 0; i < array1Length; i++) {
    let array2 = [];
    for (let j = 0; j < array2Length; j++) {
      array2.push(prompt("Push to subArray something", ""));
    }
    array1.push(array2);
  }
};
insertArray();
console.log(array1);
*/

/*
Створити функцію, яка прибирає з рядка всі символи, які ми передали 
другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo 
wor". Вихідний рядок та символи для видалення задає користувач.
*/

// let stringModify = (string, array) => {
//   // string = string.trim().replace(/[array[0],array[1]]/g, '');

//  string = string.trim().replace(new RegExp(`[${array[0]}${array[1]}]`, 'g'),'');
//  console.log(string);
// }

// stringModify(" hello world", ['l', 'd']);
/*
Реалізувати рекурсивну функцію, яка зводить число в ступінь.
Число, яке треба піднести до ступеню, передається як перший аргумент у функції;
Ступінь передається як другий аргумент у функціюpow (num, degree)
*/
// function myFunc(number, stepen) {
//   if (stepen === 0) {
//     return 1; // Любое число в степени 0 равно 1
//   } else {
//     return number * myFunc(number, stepen - 1);
//   }
// }

// const result = myFunc(2, 3);
// console.log(result);
// function myObj(obj) {
//   for (let item in obj) {
//     if (typeof obj[item] === "object") {
//       myObj(obj[item]);
//     } else {
//       console.log(obj[item]);
//     }
//   }
// }

// let obj = {
//   a: 1,
//   b: { c: 2, d: 3, e: 4 },
//   f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
// };
// myObj(obj);
// console.log(obj.b.e);

/*
function func2(array) {
  let newArray = [];
  for (elem of array) {
    if (typeof elem === "object") {
      func2(elem);
    } else {
      newArray.push(elem);
    }
  }
}

console.log(func2([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));
*/

// Написати функцію, яка приймає 1 параметр. з тим,
// що передали перший раз і т. д. Все це із замиканнями, наприклад:

// sum(3) = 3

// sum(5) = 8

// sum(20) = 28

// function createSum() {
//   let num = 0;

//   function sum(number) {
//     console.log(`ЭТО НАМБЕР ${number}`);
//     num = number + num;
//     return num;
//   }

//   return sum;
// };

// let mySum = createSum();

// console.log(mySum(3));  // 3
// console.log(mySum(5));  // 8
// console.log(mySum(20)); // 28

// function getSum() {
//   let num = 0;

//   function sum(number) {
//     num = num + number;
//     return num;
//   };
//   return sum;
// };

// let res = getSum();
// console.log(res(4));
// console.log(res(9));

// document.addEventListener("DOMContentLoaded", function () {
//   let select = document.querySelector("#select");
//   let button = document.querySelector("#button");
//   let par = document.querySelector("#p");

//   button.addEventListener("click", function () {
//      par.textContent = select.value;
//   });
// });

/*
Сделайте выпадающий список годов от 2020 до 2030. 
При выборе какого-нибудь пункта списка выведите сообщение о том, 
високосный этот год или нет.
*/

// document.addEventListener("DOMContentLoaded", function () {
//   let select = document.getElementById("select");
//   let button = document.getElementById("button");
//   let options = select.querySelectorAll('option');

// for(let option of select) {
//   console.log(option);
// };
// console.log(select[0]);

// });

// document.addEventListener('DOMContentLoaded', function(){
// let ul = document.getElementById('ul');
// let button = document.getElementById('button');
// let liElements = ul.querySelectorAll('li');

// button.addEventListener('click', function(){
//   for(let li of liElements) {
//     console.log(li.textContent);
//   }
// })

// })

// document.addEventListener("DOMContentLoaded", function () {
//   let button = document.querySelector("#button");
//   let ul = document.querySelector("#ul");
//   let liElement = ul.querySelectorAll("li");

//   button.addEventListener("click", function () {
//     for (let li of liElement) {
//       console.log(li.textContent);
//       li.setAttribute('data-value', 'list');
//       console.log(li.getAttribute('data-value'));
//    }
//   });
// });

// document.addEventListener('DOMContentLoaded', function(){
//   let select = document.querySelector('#select');
//   console.log(select);
// let option = document.querySelector('option');
// let option1 = select[0];
// console.log(option);
// console.log(option1);
// console.log(option1.text);
// console.log(option1.value);
// console.log(option1.selected);
// });

/*
Переберите пункты списка циклом и для выбранного пункта 
в конец текста добавьте восклицательный знак, а для невыбранных
пунктов - вопросительный.
*/

// document.addEventListener("DOMContentLoaded", function () {
//   let select = document.querySelector("#select");
//   let option = select[0];
//   option.selected = true;
//   console.log(select.length)

//   for (item of select) {
//     // console.log(item);
//     if (item.selected) {
//       console.log(item);
//     }
//   }
// });

/*
Дан выпадающий список и кнопка. По клику на кнопку 
сделайте отмеченным последний пункт списка.
*/

// document.addEventListener('DOMContentLoaded', function(){

//   let select = document.querySelector('#select');
//   let option = select.querySelectorAll('option');
//   // console.log(option);
//   let button = document.querySelector('#button');
//   button.addEventListener('click', function(){
//     // console.log(select[option.length - 1]);
//     select[option.length - 1].selected = true;
//     console.log(select[option.length - 1].selected);
//     console.log(select[select.selectedIndex]);
//   });

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let select = document.querySelector("#select");
//   let button = document.querySelector("#button");
//   let option = select.querySelectorAll("option");
//   console.log(option);

//   button.addEventListener("click", function () {
//     console.log(`${select[select.selectedIndex].value} !`);
//     console.log(`${select[select.selectedIndex].text}!`);
//     console.log(`${select[select.selectedIndex].selected}`);
//   });
// });

// document.addEventListener('DOMContentLoaded', function() {
// let button = document.querySelector('#button');

// button.addEventListener('click', function (event){

// console.log(event);

// });

// });

// document.addEventListener('DOMContentLoaded', function(){
// let elem = this.querySelector('#divelem');
// let button = document.querySelector('#button');
// console.log(elem, button);
// document.addEventListener('mousemove', function(event){
//   elem.innerHTML = event.clientX + ':' + event.clientY;

// });

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let elem = document.querySelector("#divelem");
//   let elem1 = document.querySelector("#divpage");

//   document.addEventListener("mousemove", function (event) {
//     elem.innerHTML = event.clientX + ":" + event.clientY;
//     elem1.innerHTML = event.pageX + ":" + event.pageY;
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let elem = document.querySelector("#divpage");

//   document.addEventListener("click", function (event) {
//     elem.innerHTML = event.pageX + ":" + event.pageY;
//     console.log(event.type);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let div1 = document.querySelector("#div1");
//   // let div2 = document.querySelector('#div2');
//   let button = document.querySelector("#button");
//   // console.log(div1, div2, button);
//   div1.addEventListener('click', function(event){
//     console.log(event.target);
//     console.log(this);
//   })
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let ul = document.querySelector("#ul");

//   ul.addEventListener("click", function (event) {
//     if (event.target.tagName.toLowerCase() === "li") {
//       event.target.innerHTML = event.target.textContent + "!";
//     }
//     if(event.target.tagName.toLowerCase() === 'ul') {
//       console.log( 'You cklick on UL tag');
//     }
//   });
// });

// document.addEventListener('DOMContentLoaded', function(){

//   let input = document.querySelector('input');

//   input.addEventListener('keypress', function(event){
//     console.log(event.key);
//     console.log(event.code);
//   })

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let input = document.querySelector("input");
//   let div2 = document.querySelector("#div2");
//   console.log(input.value);

//   input.addEventListener("keypress", function (event) {
//     let string = input.value;
//     if (event.key === "Enter") {
//       div2.innerHTML = input.value;
//       input.value = null;
//     }
//   });
// });
// document.addEventListener('DOMContentLoaded', function(){

//   let button = document.querySelector('#button');

//   button.addEventListener('click', function(event){
//     if(event.ctrlKey) {
//       console.log('CTRL');
//     }
//     if (event.altKey) {
//       console.log('ALT');
//     }
//     if(event.shiftKey) {
//       console.log('SHIFT');
//     }
//   });

//   document.addEventListener('DOMContentLoaded', function(){
// let par = document.querySelector('p');
// console.log(par);
// par.addEventListener('click', function(event){
//   if(event.ctrlKey) {
//     par.style.color = 'red';
//   }
//   if (event.shiftKey) {
//     par.style.fontSize = '30px';
//   }

// });

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let ul = document.querySelector("#ul");
//   console.log(ul.tagName.toLowerCase());

//   ul.addEventListener("click", function (event) {
//     if (event.target.tagName.toLowerCase() === "li" && event.ctrlKey === true) {
//       event.target.innerHTML = event.target.textContent + "1";
//     }
//     if (
//       event.target.tagName.toLowerCase() === "li" &&
//       event.shiftKey === true
//     ) {
//       event.target.innerHTML = event.target.textContent + "2";
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {

//   let link = document.querySelector('#link');

//   console.log(new URL(link.href).origin);

//   link.addEventListener('click', function(event){
//     event.preventDefault();
//     console.log('NET');
//     event.target.textContent += ' '+ new URL(link.href).origin;
//   })

// });

//  ---------------------   420 -------------------------------

// document.addEventListener("DOMContentLoaded", function () {
//   let input1 = document.querySelector("#input1");
//   let input2 = document.querySelector("#input2");
//   let par = document.querySelector("p");
//   let link = document.querySelector("#link");

//   link.addEventListener("click", function (event) {
//     let numInput1 = parseFloat(input1.value) || 0;
//     let numInput2 = parseFloat(input2.value) || 0;
//     let sumInput = numInput1 + numInput2;
//     par.textContent = sumInput;

//     event.preventDefault();
//   });
// });

// document.addEventListener('DOMContentLoaded', function(){
//   let element1 = document.querySelector('#elem1');
//   let element2 = document.querySelector('#elem2');
//   let element3 = document.querySelector('#elem3');

//   element1.addEventListener('click', function(){
//     alert('КРАСНЫЙ')
//   })
//   element2.addEventListener('click', function(){
//   alert('ЖЕЛТЫЙ')
//   })
//   element3.addEventListener('click', function(){
//   alert('ЗЕЛЕНЫЙ');
//   })
// });

// --------------------------------- 422  --------------------------

// document.addEventListener('DOMContentLoaded', function(){
// let div = document.querySelector('#div1');
// let p = div.querySelector('p');
// console.log(p)

// div.addEventListener('click', function(event){
//   // console.log(event.target)
//   if(event.target.matches('DIV')) {
//     console.log('DIV');
//   }
//   if(event.target.matches('P')){
//     console.log('P')
//   }
// })

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let div = document.querySelector("#div");

//   div.addEventListener("click", function (event) {
//     if (event.target.matches("li")) {
//       // console.log(event.target.textContent);
//       event.target.textContent += "!!!!!";
//     }
//     if (event.target.matches("UL")) {
//       console.log("YOUR CHOISE IS UL!!!!!!!!!!!");
//     }
//   });
// });

// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой');
// 	event.stopPropagation(); // остановим всплытие
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });

// elem1.addEventListener('click', function() {
// 	console.log('зеленый');
// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой - первый обработчик');
// event.stopImmediatePropagation();

// });
// elem2.addEventListener('click', function(event) {
// 	console.log('голубой - второй обработчик');
//   event.stopPropagation()
// 		// все равно сработает
// });
// elem3.addEventListener('click', function() {
// 	console.log('красный');
// });
// document.addEventListener("DOMContentLoaded", function(){

// let parent1 = document.querySelector('#parent1');
// let parent2 = document.querySelector('#parent2');
// let parent3 = document.querySelector('#parent3');
// let button = document.querySelector('#child');

// parent1.addEventListener('click', function(event){
//   alert(this);
// })
// parent2.addEventListener('click', function(event){
//   alert('I AM PARENT NR2 ');
// })
// parent3.addEventListener('click', function(event){
//   alert('I AM PARENT NR3 ');
//  event.stopImmediatePropagation();
// })
// button.addEventListener('click', function(){
//   alert('I AM BUTTON');
// })

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let parent = document.querySelector("#parent");
//   let button = document.querySelector("button");
//   let block = document.querySelector("#block");

//   button.addEventListener("click", function (event) {
//     block.classList.add("active");
//     event.stopPropagation();
//   });

//   parent.addEventListener("click", function () {
//     block.classList.remove("active");
//   });
// });

// elem1.addEventListener('click', function() {
// 	console.log('зеленый - погружение');
// }, true);
// elem1.addEventListener('click', function() {
// 	console.log('зеленый - всплытие');
// }, false);

// elem2.addEventListener('click', function() {
// 	console.log('голубой - погружение');
// }, true);
// elem2.addEventListener('click', function() {
// 	console.log('голубой - всплытие');
// }, false);

// elem3.addEventListener('click', function() {
// 	console.log('красный - погружение');
// }, true);
// elem3.addEventListener('click', function() {
// 	console.log('красный- всплытие');
// }, false);

// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');
// console.log(button, list, items);
// function handler(){
//   this.textContent = this.textContent + '!';
// };

// for (let item of items) {
// 	item.addEventListener('click', handler);
// };

// button.addEventListener('click', function() {
// 	let item = document.createElement('li');
// 	item.textContent = 'item';
//   item.addEventListener('click', handler);
// 	list.appendChild(item);
// });
// console.log(items);

// let button = document.querySelector('button');
// let list   = document.querySelector('ul');
// let items  = list.querySelectorAll('li');

// list.addEventListener('click', function(event) {

//   event.target.textContent = event.target.textContent + '!';
// });
// button.addEventListener('click', function(){
// let item = document.createElement('li');
// item.textContent = 'item';
// list.appendChild(item);

// });

// document.addEventListener('DOMContentLoaded', function(){
// let ul = document.querySelector('ul');
// let items = ul.querySelectorAll('li');
// console.log(ul, items);

// ul.addEventListener('click', function(event){
//   console.log(event.target.tagName);
// let li = event.target.closest('li');
// if(li) {
//   li.textContent = li.textContent + '!';
// }

// })

// })

// "use strict";

// document.addEventListener("DOMContentLoaded", function () {

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//   let self = this;
// 	alert( square() );

// 	function square() {
// 		return self.value * self.value;
// 	}
// }
// });

"use strict";

// document.addEventListener("DOMContentLoaded", function () {
//   let elem1 = document.querySelector('#elem1');
//   let elem2 = document.querySelector('#elem2');
//   let elem3 = document.querySelector('#elem');

//   elem.addEventListener('blur', func);
//   elem1.addEventListener('blur', func);
//   elem2.addEventListener('blur', func);

//   function func() {
//     console.log(this.value);
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {

//   let elem = document.querySelector('#elem1');
//   elem.addEventListener('blur', func);

//   function func() {
//     let item = this;
//     alert( square() );
//     function square() {
//       return item.value * item.value;
//     }
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {

//   let elem = document.querySelector('#elem1');
//   elem.addEventListener('blur', func);

//   function func() {
//    console.log(this.value);
//    let child = () => {
//     console.log(this.value);
//    }
//    child();
//   }
// });

// document.addEventListener('DOMContentLoaded', function(){

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// function func(){
//   console.log(this.value);
// };
// func.call(elem1);
// func.call(elem2);
// func.call(elem3);

// });

// document.addEventListener('DOMContentLoaded', function(){
//   let elem = document.querySelector('#elem');

//   function func(surname, name1) {
//     console.log(this.value + ', ' + name1 + ' ' + surname);
//   }

//   func.call(elem, 'Smit', 'John'); // тут должно вывести 'hello, John Smit'

// });

// document.addEventListener('DOMContentLoaded', function(){
//   let elem = document.querySelector('#elem');

//   function func(surname, name1) {
//     console.log(this.value + ', ' + name1 + ' ' + surname);
//   }

//   func.apply(elem, ['Smit', 'John']); // тут должно вывести 'hello, John Smit'

// });

// document.addEventListener('DOMContentLoaded', function(){

//   let elem = document.querySelector('#elem');

//   function func(param1, param2){
//     console.log(this.value + param1 + param2);
//   };

//   let newFunc = func.bind(elem);

//   newFunc('1', '2');

// });

// document.addEventListener('DOMContentLoaded', function(){

//   let elem = document.querySelector('#elem1');

//   function func(name, surname) {
//     console.log(this.value + ', ' + name + ' ' + surname);
//   };

// func = func.bind(elem);

// func('John', 'Smit'); // тут должно вывести 'hello, John Smit'
// func('Eric', 'Luis'); // тут должно вывести 'hello, Eric Luis'

// });

// setInterval(function(){
//   console.log('!!!!!!!')}, 1000
// );

// setInterval(function() {
// console.log('I learn JS');
// }, 3000);

// document.addEventListener('DOMContentLoaded', function(){
//  let i = 0;

//  setInterval(() => {console.log(i++)}, 1000)

// });

// Пусть дана переменная, в которой изначально хранится число 100.
// Запустите таймер, который каждую секунду будет уменьшать значение
// этой переменной на 1 и выводить это значение в консоль.

// document.addEventListener('DOMContentLoaded', function(){
// let a = 100;
// setInterval(() => {console.log(a -= 20)}, 1000)
// });

// let timerId = setInterval(function() {
// 	console.log('!')
// }, 1000);

// alert(timerId); // выведет номер таймера

// document.addEventListener('DOMContentLoaded', function(){

//  let i = 0;

//  let timerId = setInterval(function(){
//   console.log(++i);

//  if(i >= 10) { clearInterval( timerId ) };
// }, 500);
// });

/*
Пусть дана переменная, в которой изначально хранится число 10. 
Запустите таймер, который каждую секунду будет уменьшать значение 
этой переменной на 1 и выводить это значение в консоль. 
Как только значение переменной достигнет нуля - остановите таймер.
*/

// document.addEventListener('DOMContentLoaded', function(){
// let a = 10;
// // let i = 0;
// let timerId = setInterval(function(){
//   a -= 1;
//   console.log(a);
//   if (a <= 0) {
//     clearInterval(timerId);
//   };
// });

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let button = document.querySelector("#button");

//   button.addEventListener("click", function func() {
//     let a = 100;
//     let timerId = setInterval(function () {
//       a -= 10;
//       console.log(a);
//       if (a <= 0) {
//         clearInterval(timerId);
//       }
//     }, 1000);
//     this.removeEventListener('click', func);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let button = document.querySelector("#button");

//   function handleClick() {
//     let a = 100;
//     let timerId = setInterval(function () {
//       a -= 10;
//       console.log(a);
//       if (a <= 0) {
//         clearInterval(timerId);
//       }
//     }, 1000);

//     // Удаляем обработчик события click
//     button.removeEventListener('click', handleClick);
//   }

//   button.addEventListener("click", handleClick);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let start = document.querySelector("#start");
//   let stop = document.querySelector("#stop");
//   let timerId;

//   start.addEventListener("click", function () {
//     timerId = setInterval(function () {
//       console.log("!");
//     }, 1000);
//     console.log("Таймер ПОШЕЛ");
//   });

//   stop.addEventListener("click", function () {
//     clearInterval(timerId);
//     console.log("Таймер остановлен");
//   });

// stop.addEventListener("click", function () {
//   // Проверяем, что timerId определен, прежде чем остановить таймер
//   if (timerId) {
//     clearInterval(timerId);
//     console.log("Таймер остановлен");
//   } else {
//     console.log("Таймер не был запущен");
//   }
// });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let start = document.querySelector("#start");
//   let stop = document.querySelector("#stop");
//   let timerId;
//   let countNumber = 100;

//   start.addEventListener("click", function () {
//     timerId = setInterval(function () {
//       countNumber = countNumber - 10;
//       console.log(countNumber);
//       if (countNumber <= 0) {
//         clearInterval(timerId);
//       }
//     }, 1000);
//   });

//   stop.addEventListener("click", function () {
//     clearInterval(timerId);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let start = document.querySelector("#start");
//   let stop = document.querySelector("#stop");
//   let timerId;

// function func1() {
//     timerId = setInterval(function () {
//       let date = new Date();
//       console.log(date.getMinutes() + " " + date.getSeconds());
//     }, 1000);
//       start.removeEventListener('click', func1);
//   };

//   start.addEventListener("click", func1);

//   stop.addEventListener("click", function () {
//     clearInterval(timerId);
//     start.addEventListener('click', func1);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let input = document.querySelector("#elem");

//   input.addEventListener("click", function () {
//     let self = this;
//     setInterval(function () {
//       console.log(self.value);
//     }, 1000);
//   });
// });

/*
Дана кнопка. Дан абзац, текстом которого является число. 
По нажатию на кнопку запустите таймер, который каждую секунду 
будет увеличивать текст абзаца на 1.
*/

// document.addEventListener("DOMContentLoaded", function () {
//   let button = document.querySelector("#elem");
//   let par = document.querySelector("#p");
//   let number = parseInt(par.textContent);

//   button.addEventListener("click", function () {
//     setInterval(function () {
//       number = number + 1;
//       par.textContent = number;
//     }, 1000);
//   });
// });

/*
Дана кнопка. Дан абзац, текстом которого является 
число, например, 10. По нажатию на кнопку запустите 
таймер, который каждую секунду будет уменьшать текст 
абзаца на 1. Как только значение абзаца станет
 равно нулю - остановите таймер.

*/

// document.addEventListener("DOMContentLoaded", function () {
//   let button = document.querySelector("#elem");
//   let par = document.querySelector("#p");

//   button.addEventListener("click", function () {
//     let timerId = setInterval(function () {
//       let number = parseInt(par.textContent);
//       number = number - 1;
//       par.textContent = number;
//       if (number <= 0) {
//         clearInterval(timerId);
//       }
//     }, 1000);
//   });
// });

/*

Дан инпут с числом. Сделайте так, чтобы каждую секунду 
в нем появлялся квадрат того числа, которое в нем записано.

*/

// document.addEventListener("DOMContentLoaded", function () {

// let button = document.querySelector('#elem');
// let number = document.querySelector('#num');

// button.addEventListener('click', function(){
//   let num = parseFloat(number.value);

//   let timerId = setInterval(function(){
//     number.value = num * num;
//   }, 1000);
// });

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let button = document.querySelector('#elem');
//   let number = document.querySelector('#num');

//   button.addEventListener('click', function () {
//     // Парсим введенное значение в число
//     let num = parseInt(number.value);

//     // Проверяем, является ли введенное значение числом
//     if (!isNaN(num)) {
//       let timerId = setInterval(function () {
//         // Возводим число в квадрат и присваиваем результат полю #num
//         number.value = num * num;
//       }, 1000);

//       // Через 5 секунд останавливаем таймер
//       setTimeout(function () {
//         clearInterval(timerId);
//         console.log("Таймер остановлен");
//       }, 5000);
//     } else {
//       console.log("Введите корректное числовое значение");
//     }
//   });
// });

/*
Дан инпут. В него вводится число. По потери фокуса 
сделайте так, чтобы в абзаце ниже начал тикать обратный 
отсчет, начиная с введенного числа. 
Когда отсчет дойдет до нуля - он должен закончится.
*/

// document.addEventListener("DOMContentLoaded", function () {
//   let input = document.querySelector("#myText");
//   let par = document.querySelector("#p");
//   console.log(typeof input.value);

//   input.addEventListener("blur", function () {
//     let num = parseFloat(input.value);
//     let timeOff = setInterval(function func1() {
//       num = num - 1;
//       input.value = num;
//       if (num <= 0) {
//         clearInterval(timeOff);
//       }
//     }, 1000);
//   });
// });

/*
Дан абзац. Напишите код, который 
выведет сообщение в этот абзац через 10 секунд
после загрузки страницы.
*/

// document.addEventListener('DOMContentLoaded', function (){
// let par = document.querySelector('#p');
// setTimeout(function(){
// par.classList.add('pviz');
// }, 10000);

// let i = 0;

// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);

// 		if (i < 10) { // запускаем, только если счетчик меньше 10
// 			timer();
// 		}
// 	}, 1000);
// }
// timer();

// let i = 1;
// let a = 1000;

// function timer(){
//   a += 1000;
//   setTimeout(function(){
//     console.log(i++)
//   timer();
//   }, a);

// };
// timer();

// document.addEventListener('DOMContentLoaded', function(){

// let div = document.querySelector('#parent');
// let p = document.createElement('p');

// p.textContent = 'OOOPPPPOOOO';
// div.appendChild(p);
// });
// Вставьте ему в конец li с текстом 'item'.
// document.addEventListener('DOMContentLoaded', function(){
// let ol = document.querySelector('#elem');
// let li = this.createElement('li');
// li.textContent = 'item';
// ol.appendChild(li);
// })
// document.addEventListener('DOMContentLoaded', function(){
//   let ol = document.querySelector('#elem');
//   let button = document.querySelector('#button');
//   button.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = 'text';
//     ol.appendChild(li);
//   });
//   });

// document.addEventListener('DOMContentLoaded', function(){
// let div = document.querySelector('#parent');
// let par = document.createElement('p');
// par.textContent = 'TEXT';

// par.addEventListener('click', function(){
// console.log(this.textContent);
// });

// div.appendChild(par);

// });

/*
Дан ol и кнопка. Сделайте так, чтобы по клику на кнопку в 
конец ol добавлялся тег li. Сделайте так, чтобы по клику 
на любой из добавленных li в конец его текста записывался 
восклицательный знак.
*/

// document.addEventListener("DOMContentLoaded", function () {
//   let ol = document.querySelector("#parent");
//   let button = document.querySelector("#button");

//   button.addEventListener("click", function () {
//     let li = document.createElement("li");
//     li.textContent = "Created JS";
//     ol.appendChild(li);
//     li.addEventListener("click", function () {
//       this.textContent += "!";
//     });
//   });
// });

// document.addEventListener('DOMContentLoaded', function(){
//   let ol = document.querySelector('#parent');
//   let button = document.querySelector('#button');

//   // Функция для добавления обработчика к элементу li
//   function addClickHandler(li) {
//     li.addEventListener('click', function(){
//       this.textContent += "!";
//     });
//   }

//   // Обработчик события для кнопки
//   button.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = 'Created JS';
//     ol.appendChild(li);

//     // Добавление обработчика к новому элементу li
//     addClickHandler(li);
//   });

//   // Добавление обработчика ко всем существующим элементам li
//   let liAll = document.querySelectorAll('li');
//   liAll.forEach(addClickHandler);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let ol = document.querySelector("#parent");
//   let button = document.querySelector("#button");

//   function addClickHandler(li) {
//     li.addEventListener("click", function () {
//       this.textContent += "!";
//     });
//   }

//   button.addEventListener("click", function () {
//     let li = document.createElement("li");
//     li.textContent = "Created JS";
//     ol.appendChild(li);
//     addClickHandler(li);
//   });

//     let liAll = document.querySelectorAll('li');
//     liAll.forEach(addClickHandler);

// });

/*
Дан див. Запустите цикл, который добавит в наш див 5 инпутов.
 Пусть дан также абзац. Сделайте так, чтобы каждый из новых 
 инпутов по потери фокуса записывал свой текст в абзац.
*/

// document.addEventListener('DOMContentLoaded', function(){

//   let div = document.querySelector('#div');
//   let par = document.querySelector('#par');

// for(let i = 1; i <= 5; i++) {
//   let input = document.createElement('input');
//   input.value = 'hello';
//   div.appendChild(input);

//   input.addEventListener('blur', function(){
//     par.textContent = input.value
//   });
//  };

// document.addEventListener('DOMContentLoaded', function(){

//   let elements = document.querySelectorAll('p');
//   console.log(elements);

//   for(let elem of elements) {
//     elem.addEventListener('click', function(){
//       elem.remove();
//     });
//   };
// });

//   let elems = document.querySelectorAll('p');

// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		elem.remove();
// 	});
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let ul = document.querySelector("#ul");
//   let lis = ul.querySelectorAll("li");
//   console.log(lis);

//   for (let elem of lis) {
//     elem.addEventListener("click", function () {
//       elem.remove();
//     });
//   }
// });

// document.addEventListener('DOMContentLoaded', function(){
//   let button = document.querySelector('#button');
// let ul = document.querySelector('#parent');
// let lis = ul.querySelectorAll('li');
// let liArray = Array.from(lis);

// button.addEventListener('click', function(){
//   if(liArray.length > 0) {
//     let lastLi = liArray.pop()
//     lastLi.remove();
//   }
// });

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let ul = document.querySelector("#elem");
//   let li1 = document.createElement("li");
//   let li2 = document.createElement("li");

//     li1.textContent = "TEXT1";
//   ul.append(li1);

//     li2.textContent = "TEXT2";
//   ul.prepend(li2);

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let div = document.querySelector("#parent");
//   let arr = [1, 2, 3, 4, 5];
//   for (let elem of arr) {
//     let p = document.createElement("p");
//     p.textContent = elem;
//     div.appendChild(p);

//     p.addEventListener("click", function () {
//       p.textContent += 1;
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let ul = document.querySelector("#elem");
//   let arr = [1, 2, 3, 4, 5];

//   for (let elem of arr) {
//     let li = document.createElement("li");
//     li.textContent = elem;
//     ul.appendChild(li);

//     li.addEventListener('click', function func1(){
//     li.append('!!!');
//     li.removeEventListener('click', func1);
//   })
//   };

// });

// document.addEventListener('click', function(){
// let table  = document.querySelector('#table');

// for( let i = 1; i <=3; i++) {
//   let tr = document.createElement('tr');

//   for(let j = 1; j <= 4; j++) {
//     let td = document.createElement('td');
//     tr.appendChild(td);

//   }
//   table.appendChild(tr);
// }

// });

// document.addEventListener("DOMContentLoaded", function () {
//   let table = document.querySelector("#table1");
//   let inputRow = document.querySelector("#row");
//   let inputColumn = document.querySelector("#col");
//   let button = document.querySelector("#button");

//   button.addEventListener("click", function () {
//     for (let i = 0; i < inputRow.value; i++) {
//       let tr = document.createElement("tr");

//       for (let j = 0; j < inputColumn.value; j++) {
//         let td = document.createElement("td");
//         tr.appendChild(td);
//         td.textContent = "text";
//       }
//       table.appendChild(tr);
//     }
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let table = document.querySelector("#table1");
//   let k = 0;

//   for (let i = 0; i < 5; i++) {
//     let tr = document.createElement("tr");

//     for (let j = 0; j < 5; j++) {
//       let td = document.createElement("td");
//       tr.appendChild(td);

//         while (k % 2 !== 0) {
//           k++;
//         }
//         td.textContent = k;
//         k++
//       }
//       table.appendChild(tr);
//     }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let arr = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//   ];
//   let table = document.querySelector("#table1");

//   for (let subArr of arr) {
//     let tr = document.createElement("tr");

//     for (let item of subArr) {
//       let td = document.createElement("td");
//       td.textContent = item;
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let arr = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//     [10, 11, 12],
//   ];

//   let table = document.querySelector("#table1");

//   for (let subArr of arr) {
//     let tr = document.createElement('tr');

//     for(let elem of subArr) {
//       let td = document.createElement('td');
//       td.textContent = Math.pow(elem,2);
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }
// });

// document.addEventListener('DOMContentLoaded', function(){
//   let table = document.querySelector('#table1');
// let users = [
// 	{
// 		name: 'name1',
// 		surname: 'surname1',
// 		patronymic: 'patronymic1'
// 	},
// 	{
// 		name: 'name2',
// 		surname: 'surname2',
// 		patronymic: 'patronymic2'
// 	},
// 	{
// 		name: 'name3',
// 		surname: 'surname3',
// 		patronymic: 'patronymic3'
// 	},
// ];
// console.log(users[1].name);

// for(let user of users) {
//   let tr = document.createElement('tr');

//   let td1 = document.createElement('td');
//   td1.textContent = user.name;
//  tr.appendChild(td1);
//  let td2 = document.createElement('td');
//  td2.textContent = user.surname;
//  tr.appendChild(td2);
//  let td3 = document.createElement('td');
//  td3.textContent = user.patronymic;
//  tr.appendChild(td3);

//   table.appendChild(tr);
// }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let employees = [
//     { name: "employee1", age: 30, salary: 400 },
//     { name: "employee2", age: 31, salary: 500 },
//     { name: "employee3", age: 32, salary: 600 },
//   ];

//   let table = document.querySelector("#table1");

//   for (let object of employees) {
//     let tr = document.createElement("tr");
//     let td1 = document.createElement("td");
//     td1.textContent = object.name;
//     tr.appendChild(td1);

//     let td2 = document.createElement("td");
//     td2.textContent = object.age;
//     tr.appendChild(td2);
//     td2.addEventListener('click', function(){
//       td2.textContent = Number(td2.textContent) + 1;
//       console.log(typeof td2.textContent)

//     })

//     let td3 = document.createElement("td");
//     td3.textContent = object.salary;
//     tr.appendChild(td3);

//     console.log(object.name);

//     table.appendChild(tr);
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let table = document.querySelector("#table1");
//   let button = document.querySelector("#button");

//   for (let i = 0; i < 3; i++) {
//     let tr = document.createElement("tr");
//     table.appendChild(tr);
//     for (let j = 0; j < 4; j++) {
//       let td = document.createElement("td");
//       td.textContent = "DDDDDEEEERRRRR";
//       tr.appendChild(td);
//     }
//   }
//   function createTd() {
//     let tr = document.createElement("tr");
//     for (let i = 1; i < 4; i++) {
//       let td = document.createElement("td");
//       td.textContent = "DDDDDEEEERRRRR";
//       tr.appendChild(td);
//     }
//     table.appendChild(tr);
//   }

//   button.addEventListener("click", createTd);
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let div = document.querySelector("#parent");

//   for (let i = 0; i < 6; i++) {
//     let par = document.createElement("p");
//     par.textContent = "EEEEEEEEEEE";
//     par.addEventListener("click", function () {
//       this.remove();
//     });
//     div.appendChild(par);
//   }
// });
/*
Сделайте так, чтобы по клику на кнопку в список 
добавлялся новый элемент. Сделайте так, чтобы любая 
li удалялась по клику на нее. Речь идет как о тех li, которые уже есть в списке, так о новых, созданных после нажатия на кнопку.
*/

// document.addEventListener('DOMContentLoaded', function(){

//   let ul = document.querySelector('#parent');
//   let button = document.querySelector('#button');
//   let count = 3;

//   button.addEventListener('click', function(){
//     let li = document.createElement('li');
//     li.textContent = ++count;
//     ul.appendChild(li);
//     li.addEventListener('click', function(){
//       li.remove();
//     });
//   })
//   ul.querySelectorAll('li').forEach(function(li){
//     li.addEventListener('click', function(){
//       li.remove();
//     })
//   })

// document.addEventListener('DOMContentLoaded', function(){
// let parent = document.querySelectorAll('#parent p');

// for(let elem of parent) {
// let remove = document.createElement('a');
// remove.href = '#';
// remove.textContent = 'remove';
// elem.appendChild(remove);

// remove.addEventListener('click', function(event){
//   elem.remove();
//   event.preventDefault();

// });
// };
// });

// let parent = document.querySelectorAll('#parent p');

// for (let elem of parent) {
//   let remove = document.createElement('a');
//   remove.href = '#'; // Установите корректное значение href
//   remove.textContent = 'remove';
//   elem.appendChild(remove);

//   remove.addEventListener('click', function(event) {
//     elem.remove();
//     event.preventDefault();
// //   });
// // };

// document.addEventListener("DOMContentLoaded", function () {
//   let parent = document.querySelectorAll("#parent p");

//   for (let elem of parent) {
//     let remove = document.createElement("a");
//     remove.href = "#";
//     remove.textContent = "remove";
//     elem.appendChild(remove);
//     remove.addEventListener("click", function (event) {
//       elem.remove();
//       event.preventDefault();
//     });
//   }
// });

// document.addEventListener("DOMContentLoaded", function () {
//   let ul = this.querySelectorAll("#ul li");
//   console.log(ul);

//   for (let item of ul) {
//     let usun = document.createElement("a");
//     usun.href = "#";
//     usun.textContent = "delete";
//     item.appendChild(usun);
//     usun.addEventListener("click", function (event) {
//       item.remove();
//       event.preventDefault();
//     });
//   }
// });



// document.addEventListener('DOMContentLoaded', function(){

//   let rows = document.querySelectorAll('#tb tr');
//   console.log(rows);

//   for (let row of rows) {
//     let cells = row.querySelectorAll('td');
//     console.log(cells);
//     for (let cell of cells) {
//       console.log(cell);
//       let del = document.createElement('a');
//       del.href = '#';
//       del.textContent = 'delete';
//       cell.appendChild(del);
//       del.addEventListener('click', function(event){
//         let parentCell = event.target.parentNode;
//         parentCell.remove();
//         event.preventDefault();
//       });

//     };

//   };

// });

// document.addEventListener('DOMContentLoaded', function(){
// let parent = document.querySelector('#parent');
// let par = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = par.textContent;

// input.addEventListener('blur', function(){
//   par.textContent = this.value;
// })

// });

let i = 0;
for(; i < 5;) {
  console.log(++i);
}
