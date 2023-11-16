

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

















/*
Сделайте функцию func, которая параметрами будет принимать два 
числа, а возвращать сумму квадрата первого числа с кубом второго числа.
 Сделайте для этого вспомогательную функцию square, возводящую число в 
 квадрат, и вспомогательную функцию cube, возводящую число в куб.
*/

// let func =(num1, num2) => {

// let square = (num) => {return num * num};

// let cube = (num) => {return Math.pow(num, 3)};
//   return square(num2) + cube(num1);
// };
// let result = func(23,3);
// console.log(result);
// let func1 = () => {
//   let func2 =() => {
//     let func3 = () => {
//       let func4 = () => {
//         return '!';
//       };
//       return func4;
//     };
//     return func3;
//   };
//   return func2;
// };

// let result = func1()()()();
// console.log(result);

// let func1 = (num1) => {
//   return function(num2) {
//     return num1 + num2;
//   }
// };

// console.log( func1(4)(5));

















// let func = (num1) => {
//   return function(num2) {
//     return function (num3) {
//       return num1 + num2 + num3;
//     }
//   }
// };
// console.log(func(2)(3)(4));

// Сделайте функцию func, которая будучи вызвана вот 
// так: func(2)(3)(4)(5)(), вернет массив переданных в параметры чисел.
// let func2 = (num1) => {
//   let arr = [num1];
//   return function (num2) {
//     arr.push(num2);
//     return function (num3) {
//       arr.push(num3)
//       return function (num4) {
//         arr.push(num4);
//         return arr;
//       };
//     };
//   };
// };


// let func1 = (num1) => {
//   let arr = [num1];

//   return function (num2) {
//     arr.push(num2);

//     return function (num3) {
//       arr.push(num3);

//       return function (num4) {
//         arr.push(num4);

//         return arr;
//       };
//     };
//   };
// // };

// let result = func2(2)(3)(4)(5);
// console.log(result); // Выведет: [2, 3, 4, 5]

// function each(arr, callback) {
//   res = [];
//   for(let elem of arr) {
//     res.push(callback(elem));
//   }
//   return res;
// }

// let all = each(['abc', 'cde', 'fge'], function callback(str) {return str.charAt(0).toUpperCase() + str.slice(1)});
// console.log(all);

// let func2 = (num1, num2) => num1 * num2;
// console.log(func2(2, 8));

// let func = num => num * num;
// console.log(func(50));

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result = filter([1, 2, 3, 4, 5], elem => elem > 0);
// console.log(result);

// function test() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 	}
// }

// let func = test();
// func(); // выведет 1
// console.log(test()());

// let counter =() => {
//   let num = 1;
//   return function() {
//     console.log(num);
//     num++
//     return num;
//   }
// };
// let res = counter();
// res();
// // console.log(res());console.log(res());console.log(res());console.log(res());console.log(res());

// let countmin = () => {
//   let num = 10;
//   let innerCounter = () => {
//     if( num <= 0) {
//       console.log('Current count  '  + num);
//       num--
//       innerCounter();
//     } else {
//       console.log ('All is empty');
//     }
//   }
//   return  innerCounter
// };
// let res = countmin();
// res();

/*
let countmin = () => {
  let num = 10;
  let innerCounter = () => {
    if (num > 0) {
      console.log('Current count:', num);
      num--;
      innerCounter(); // Рекурсивный вызов innerCounter
    } else {
      console.log('All is empty');
    }
  };

  return innerCounter;
};

let res = countmin();
res(); // Вызывает цикл, выводя текущий счетчик от 10 до 1
// // Теперь код будет выполнять цикл и выводить текущее значение счетчика до тех пор, пока num не станет меньше или равным 0, после чего будет выведено 'All is empty'.

*/



//  ЗАМЫКАНИЯ 


// let counter = 0;
		
// function test() {
// 	return function() {
// 		console.log(counter);
// 		counter++;
// 	};
// }

// let func = test;

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2()

// // let res = (() => {
// //   return (num1) => {
// //     return (num2) => {
// //       let sum = num1 + num2;
// //       return sum;
// //     }
// //   }
// // }) ()(1)(2);

// function curryAdd(x) {
//   return function(y) {
//     return function(z) {
//       return x + y + z;
//     };
//   };
// }
// // / Использование функции без каррирования
// // let resultWithoutCurry = add(1, 2, 3);
// // console.log(resultWithoutCurry); // Выведет 6

// // Использование функции с каррированием
// let curryAddResult = curryAdd(1)(2)(3);
// console.log(curryAddResult); // Выведет 6

/*


В JavaScript существует несколько способов создания массива. Вот несколько из них:

Литерал массива:

javascript
Copy code
const array1 = [1, 2, 3, 4, 5];
С использованием конструктора Array:

javascript
Copy code
const array2 = new Array(1, 2, 3, 4, 5);
С использованием Array.from():

javascript
Copy code
const array3 = Array.from([1, 2, 3, 4, 5]);
С использованием Array.of():

javascript
Copy code
const array4 = Array.of(1, 2, 3, 4, 5);
С использованием Array() без аргументов (пустой массив):

javascript
Copy code
const emptyArray = Array();
С использованием расширенного синтаксиса:

javascript
Copy code
const array5 = [...[1, 2, 3, 4, 5]];
С использованием метода push():

javascript
Copy code
const array6 = [];
array6.push(1, 2, 3, 4, 5);
С использованием метода concat():

javascript
Copy code
const array7 = [].concat(1, 2, 3, 4, 5);
*/


/*
const array1 = [1, 2, 3, 4];

// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10

*/
// let arr = [1, 2, 3, 4, 5, 6, 7, 8];
// arr.forEach(function(element) {
//   console.log(element);
// });



// arr.forEach(function(element, index, arr) {
//   numberOfElement = element * 7;
//   console.log(`Элемент ${numberOfElement} имеет индекс ${index} в массиве [${arr}]`);
// });
// // Выводит 1, 2, 
// console.log(arr);


// let squaredArr = arr.map(function(element) {
//   return element * element;
// });
// console.log(squaredArr);

// let arr0 = [1, 2, 3, 4, 5];
// let arr1 = 'sdfsdfsdf';
// console.log(arr0.at(-1))

// let obj = {x: 1, y: 2, z: 3};
// console.log( typeof obj['x'] );



// const arr111 = ['a', 'b', 'c'];
// arr111 = ['a', 'b', 'c'];
// console.log(arr111);

// let number = 1;
// const doubleObj = {
//   set x(value) {
//     number = value;
//   },
//   get x() {
//     return number * 2;
//   },
//   y() {
//     return number * 2;
//   },
//   setX(value) {
//     number = value;
//   },
//   getX() {
//     return number;
//   },
// };

// console.log(doubleObj.x); // Выведет: 2
// console.log(doubleObj.y()); // Выведет: 2

// doubleObj.x = 10;
// doubleObj.setX(10);

// console.log(doubleObj.x); // Выведет: 20
// console.log(doubleObj.getX()); // Выведет: 10




// let number = 1;

// let obj = {
//   set x(value) {
//   number = value;
//   },
//   get x() {
//     return number;
//   }
// };
// obj.x = 20;
// console.log(obj.x)

(function(){
let f = function() {
  return this.number ;
};

let obj1 = {
  number: 18,
  method: f,
};

let obj2 = {
  number: 28,
  method: f,
};
console.log(obj1.method());
console.log(obj2.method());

}());

