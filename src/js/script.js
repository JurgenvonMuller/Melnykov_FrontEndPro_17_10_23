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

// (function(){
// let f = function() {
//   return this.number ;
// };

// let obj1 = {
//   number: 18,
//   method: f,
// };

// let obj2 = {
//   number: 28,
//   method: f,
// };
// console.log(obj1.method());
// console.log(obj2.method());

// }());

// class Users {
//   #name;
//   #sur;
//   #age;
//   constructor(name, sur, age) {
//     this.#name = name;
//     this.#sur = sur;
//     this.#age = age;
//   }
//   setAge(newAge) {
//     this.#age = newAge;
//     return this;
//   }
//   setName(newName) {
//     this.#name = newName;
//     return this;
//   }
//   setSur(newSur) {
//     this.#sur = newSur;
//     return this;
//   }
//   getAge() {
//     return this.#age;
//   }
//   getName() {
//     return this.#name;
//   }
//   getSur() {
//     return this.#sur;
//   }
// };

// let user = new Users("Bill", "Davidson", 89);
// console.log(user);
// console.log(user.Name);
// user.setName('Gregory').setSur('Stivenson').setAge(68);
// console.log(user.getName());
// console.log(user instanceof Users);

class Student {
  constructor(name) {
    this.name = name;
  }
}
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student('user1'),
// 	new Employee('user2'),
// 	new Student('user3'),
// 	new Employee('user4'),
// 	new Student('user5'),
// 	new Employee('user6'),
// 	new Student('user7'),
// ];

//  let studentsNames = [];
//   let employees = [];
// for (let i = 0; i <= users.length - 1; i++) {
//   if(users[i] instanceof Student) {
//     studentsNames.push(users[i].name);
//   } else if( users [i] instanceof Employee) {
//     employees.push(users[i].name);
//   }
//   // console.log(employees);
// };
// console.log("Students: ", studentsNames);
// console.log("Employees: ", employees);

// class HelperArray {
//   getSum(arr) {
//     let sum = 0;
//     for(let elem of arr) {
//       sum += elem;
//     }
//     return sum;
//   }
//   getArrithm(arr) {
//     if(arr.length >0) {
//       let sum = this.getSum(arr);
//       return sum / arr.length;
//     }else {
//       return 0;
//     }
//   }
// };

// let arrHelper = new HelperArray();

// let sum1 = arrHelper.getSum([4,5,6]);
// console.log(sum1);

// let r = arrHelper.getArrithm([4,5,6]);
// console.log(r);

// class City {
//   nameOfCity;
//   constructor(nameOfCity) {
//     this.nameOfCity = nameOfCity;
//   }
// };
// class Users {
//   name;
//   age;
//   city;
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;

//   }
// };

// let cityName = new City('London');

// let user = new Users ('Mike', 60, cityName);

// console.log(user.city.nameOfCity);

// class Employee {
// 	constructor(name, position, department) {
// 		this.name = name;
// 		this.position = position;
// 		this.department = department;
// 	}
// };
// class Departments {
//   department;
//   constructor(department) {
//     this.department = department;
//   }

// };

// class Positions {
//   pos = 'manager';
//   constructor(pos) {
//     this.pos = pos;
//   }
// };

// let newPosition = new Positions('Cheaf');
// let newDepartment = new Departments('Logistic');

// let worker = new Employee('Bill', newPosition.pos, newDepartment.department);
// console.log(worker.name);
// console.log(worker.position);
// console.log(worker);

// class Employee {
//   #name;
//   #salary;
//   constructor(name, salary) {
//     this.#name = name;
//     this.#salary = salary;
//   }
//   getName() {
//     return this.#name;
//   }
//   getSalary() {
//     return this.#salary;
//   }
// };

// let employee = [
//   new Employee('Gregory', 90),
//   new Employee('Kollins', 100),
//   new Employee('Thomas', 120),
//   new Employee('Henry', 400),
// ];
// for(let employee of employee) {
//   console.log(employee.getName(), employee.getSalary());

// }

// class User {

//   showName() {
//     return this.cape(this.name)
//   }
//   showSur() {
//     return this.cape(this.sur);
//   }
//   cape(elem) {
//     return elem[0].toUpperCase() + elem.slice(1);
//   }
// };

// let user = new User;
// user.name = 'naomi';
// user.sur = 'campbell';
// // console.log(user.name);
// console.log(user.showName(), user.showSur());

// class Students {
//   showLetterName() {
//     return this.showCap(this.name);
//   }
//   showLetterSurn() {
//     return this.showCap(this.surn);
//   }
//   firstLetterName() {
//     return this.charToUpper(this.name);
//   }
//   firstLetterSur() {
//     return this.charToUpper(this.surn);
//   }
//   showCap(str) {
//     return str[0].toUpperCase() +  str.slice(1);
//   }
//   charToUpper(char) {
//     return char.charAt(0).toUpperCase();
//   }
// }

// let user = new Students();
// user.name = "mike";
// user.surn = "davidson";

// console.log(user.showLetterName()); // Выведет "Mike"
// console.log(user.showLetterSurn()); // Выведет "Davidson"
// console.log(user.firstLetterName(), user.firstLetterSur());

// class Usres {
//   constructor(name, surn) {
//     this.name = name;
//     this.surn = surn;
//   }
//   show() {
//     return this.name + '  ' + this.surn;
//   }
// };

// let user = new Usres('Billy', 'Douel');

// console.log(user.name);
// console.log(user.surn);
// console.log(user.show());

// class Users {
//   #name;
//   #surn;
//   constructor(name, surn) {
//     this.#name = name;
//     this.#surn = surn;
//   }
//   set Name(name) {
//     return  this.name = name;
//   }
//   get Name() {
//     return this.name
//   }
//   showUser(){
//     console.log(this.#Cap(this.name) + ' sdfsdfsdfsdf' + this.#Cap(this.surn))
//   }
//   #Cap(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// };

// let user = new Users();
// user.name = "bill" ;
// user.surn = 'klinton';
// console.log(user.name, user.surn);
// console.log(user.showUser());

// class Employee {
// 	constructor(name, salary) {
// 		this.name = name;
// 		this.salary = salary;
// 	}

// 	getSalary() {
// 		return this.#addSign(this.salary);
// 	}

// 	#addSign(num) {
// 		return num + '$';
// 	}
// };

// let worker = new Employee('John', 1500);
// console.log(worker.name);
// console.log(worker.salary);
// console.log(worker.getSalary());
/*
class Horses {
  #weight;
  #name;
  #costs;
  constructor(weight, name, costs) {
    this.#weight = weight;
    this.#name = name;
    this.#costs = costs;
  }
  set Weight(weight) {
    this.#weight = weight;
  }
  set Name(name) {
    if (name.length > 3) {
      this.#name = name;
    } else {
      console.log("Small name");
    }
    this.#name = name;
  }
  set Costs(costs) {
    this.#costs = costs;
  }
  get Weight() {
    return this.#weight;
  }
  get Name() {
    return this.#name;
  }
  get Costs() {
    return this.#costs;
  }
  addToStado() {
    if (!stado.some((horse) => horse.name === this.#name)) {
      stado.push({
        name: this.#name,
        weight: this.#weight,
        costs: this.#costs,
      });
      console.log(`Added to stado ${this.#name}`);
    } else {
      console.log(`The kon whith name ${this.#name} is alredy in STADO`);
    }
  }
};

let kon = new Horses(450, "Va", 4500);

let stado = [];

console.log(kon.Name);
console.log(kon.addToStado());
console.log(stado);
kon.Name = 'Na';

//  if (!stado.some(horse => horse.Name === this.#name)) {
//   stado.push({ name: this.#name, weight: this.#weight, costs: this.#costs });
//   console.log(`${this.#name} добавлена в стадо.`);
// } else {
//   console.log(`${this.#name} уже есть в стаде.`);
// }
*/

// class User {
// 	#name;
// 	#surn;

// 	setName(name) {
// 		this.#name = name;
// 		return this;
// 	}
// 	setSurn(surn) {
// 		this.#surn = surn;
// 		return this;
// 	}

// 	get Name() {
// 		return this.#name;
// 	}
// 	get Surn() {
// 		return this.#surn;

// 	}
// };

// let user = new User;

// user.Name = 'John';
// user.Surn = 'Smith';

// user.Name = ('Piter').Surn = ('Forest');
// user.setName('John').setSurn('Smith');
// console.log(user.Name);
// console.log(user.Surn);

// user.setName('Piter').setSurn('Forest');

// console.log(user.Name);
// console.log(user.Surn);

// class User {

// };
// class Trust {

// }
// let trust = new Trust();

// let user = new User();

// console.log(user instanceof User);
// console.log(trust instanceof User);

// class Student1 {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }
// class Employee {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// let users = [
// 	new Student1('user1'),
// 	new Employee('user2'),
// 	new Student1('user3'),
// 	new Employee('user4'),
// 	new Student1('user5'),
// 	new Employee('user6'),
// 	new Student1('user7'),
// ];
// let nameOfStudents = [];
// let nameOfEmployee = [];

// for(let elem of users) {
//   if(elem instanceof Student1) {
//     nameOfStudents.push(elem.name)
//   } else{
//     nameOfEmployee.push(elem.name)
//   }

// };

// console.log(nameOfEmployee);
// console.log(nameOfStudents);
/*
class arrayHelper {
  array;
  summ = 0;
  middle = 0;
  constructor(array) {
    this.array = array;
  }
  summOfArray() {
    this.summ = 0;
    for (let elem of this.array) {
      this.summ += elem;
    }
    return this.summ;
  }
  middleOfArray() {
    return this.array.length > 0 ? this.summOfArray() / this.array.length : 0;
  }
}

let myArray = [1, 2, 3, 4, 5, 6, 7];

let arrayToCalc = new arrayHelper(myArray);

console.log(arrayToCalc.summOfArray());
console.log(arrayToCalc.middleOfArray());
*/
/*
class String {
  str;
  constructor(str) {
    this.str = str;
    console.log(str)
  }
  strToCheck() {

    let res = this.str.replace(/\s/g, '');

    if (res === "") {
      return "The string is empty";
    } else {
      return res;
    }
  }
};
let string  = '         Привет   привет П р и в е т.       ';

let stringCheck = new String(string);

console.log(stringCheck.strToCheck());

let trimmed  = string.trim();
console.log(trimmed);
*/
/*
function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

// Пример использования:
let email = "example@email.com";
if (isEmail(email)) {
  console.log("Верный формат email");
} else {
  console.log("Неверный формат email");
}
*/
/*
  class Checkmail {
    mail;
    constructor (mail) {
      this.mail = mail;
    }
    isMail() {
      if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.mail)) {
        console.log(`The mail is OK`);
      }else {
        console.log(`The mail is not OK`)
      }
    }
  };


let mail1 = 'jndjfn@google.com';

let myMail = new Checkmail (mail1);

console.log(myMail.isMail());
*/
// class Domain {
//   domian;
//   constructor(domian) {
//     this.domian = domian;
//   }

//   checkDomian() {
//     if( /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(this.domian)){
//       return this.domian;
//     }else{
//       return `Its not OK`;
//     }

//   }
// };

// let dom = 'google.com';
// let dom1 = 'sdlfjsldkfjs';

// let chkDom = new Domain(dom1);

// console.log(chkDom.checkDomian());

/*
const person = {
  name : {
    first: 'Bob',
    last: 'Smith'
  },
  
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  bio: function () {
    alert(
      this.name.first +
        " " +
        this.name.last +
        " is " +
        this.age +
        " years old. He likes " +
        this.interests[0] +
        " and " +
        this.interests[1] +
        ".",
    );
  },
  greeting: function () {
    alert("Hi! I'm " + this.person.name.last + ".");
  },
};
console.log (person.name.first);
let myDataName = "height";
let myDataValue = "1.75m";
person[myDataName] = myDataValue;
console.log(person.height);
// console.log(person.bio());

myData = "weight";
myValue = '765 kg';
person[myData] = myValue;
console.log(person.weight);

*/

// class CityName {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
// };
// class Users {
//   userName;
//   userSur;
//   userAge;
//   city;

//   constructor(userName, userSur, userAge, city1) {
//     this.userName = userName;
//     this.userSur = userSur;
//     this.userAge = userAge;
//     this.city1 = city1;
//   }
// };

// let city = new CityName ('London');

// let user = new Users('Piter', 'Pan', 58, city);
// console.log(user.userName);
// console.log(user.city1.name);

// class City {
// 	constructor(name) {
// 		this.name = name;
// 	}
// }

// class User {
// 	constructor(name, surn, city1) {
// 		this.name = name;
// 		this.surn = surn;
// 		this.city1 = city1;
// 	}
// }

// let city = new City('luis');
// let user = new User('john', 'smit', city);

// console.log(user.name);

// console.log(user.city1.name);
/*
class Employee {
  constructor(name, position, department) {
    this.name = name;
    this.position = position;
    this.department = department;
  }
}
class workPosition {
  constructor(pos) {
    this.pos = pos;
  }
};
class Department {
  constructor(dep) {
    this.dep = dep;
  }
}
let posNew = new workPosition('cheaf');
let depNew = new Department('logistic');
let newWorker = new Employee('newMann', posNew, depNew);

// console.log(newWorker.name);
// console.log(newWorker.position.pos,);
// console.log(newWorker.department.dep);
*/
/*
class Worker {
  constructor( name, posada, department,) {
    this.name = name; 
    this.posada = posada;
    this.department = department;
  }
};

let workerNew = new Worker(newWorker, posNew, depNew);
console.log(workerNew.name.name);
console.log(workerNew.posada.pos);
console.log(workerNew.department.dep);
*/
/*
class Psarnia {
  name;
  waga;
 
  constructor(name, waga) {
    this.name = name;
    this.waga = waga;
  }
  getName() {
    return this.name;
  }
  getWaga() {
    return this.waga;
  }
};

let psy = [
  new Psarnia('gru', 15),
  new Psarnia('fnu', 18),
  new Psarnia('resp', 20)
];
let psyNames = [];
let psyWaga = [];
for(let item of psy) {
    psyNames.push(item.getName());
    psyWaga.push(item.getWaga());
  };
  console.log(psyNames);
  console.log(psyWaga);
*/

// class User {
//   name;

//   constructor(name) {
//     this.name = name;
//   }

//   getName() {
//     return this.name;
//   }
// }

// class UsersCollection {
//   constructor() {
//     this.users = [];
//   }

//   add(user) {
//     this.users.push(user);
//   }

//   showUsers() {
//     for (let item of this.users) {
//       console.log(item.getName());
//     }
//   }
// }

// let uc = new UsersCollection();
// uc.add(new User('Bob'));
// uc.add(new User('Bill'));
// uc.add(new User('Iwona'));
// console.log(uc);

// uc.showUsers();
/*

class Worker {
  constructor(name) {
    this.name = name;
  }
  get Name() {
    return this.name;
  }
};


class WorkerCollection {
  workers;
  constructor() {
    this.workers = [];
  }
  addWorker(worker) {
    this.workers.push(worker);
  }

  showName() {
    for (let worker of this.workers) {
    console.log(worker.Name);
    }
  }
  // showPosition() {
  //   for (let human of this.workersPosition) {
  //   console.log(human.get.Name);
  //   }
  
};


let workerCollection = new WorkerCollection();

let workers = [
workerCollection.addWorker(new Worker('Billy')),
workerCollection.addWorker(new Worker('Mike')),
workerCollection.addWorker(new Worker('Billy')),
];


workerCollection.showName();
*/
// console.log('sdsdfsdfsdf');

// class MyObject() {
//   // Конструктор объекта
// }

// // Добавление метода через прототип
// MyObject.prototype.myMethod = function() {
//   console.log("This is my method");
// };

// let myInstance = new MyObject();
// myInstance.myMethod();
/*
class MathOperation {
a;
b;
constructor() {

}
};

MathOperation.prototype.add = function(a,b) {
  let c = a + b;
  return c;
};

MathOperation.prototype.subs= function (a,b) {
  return a - b;
};
debugger;
let calculator1 = new MathOperation();
console.log(calculator1.add(3,5));
let calculator2 = new MathOperation();
console.log(calculator2.subs(50, 59));
window.print()

*/

// var str = "я учусь и мне нравится учиться";

// // console.log(str.endsWith("учиться")); // true
// // console.log(Number(str.endsWith("Я", 1))); // false
// // console.log(str.endsWith("Бы", 3)); // true

// // console.log(str.includes('Я'));
// // console.log(str.includes('мне'));
// let a = str.at(15);
// let b = str.at(2);

// console.log(`${a}`);// возвратит "Яу"

// let index = 3;
// console.log(str.charAt(index)); // 'ч'

// let substr = 'нравится';

// console.log(str.includes(substr)); //  true;
// console.log(Number(str.includes(substr))); //  1

// let indexOf = 'р';
// console.log(str.length - 1);

// console.log(str.indexOf(indexOf)); // 15

// console.log(str.at(15) == str.indexOf(indexOf)); // p !=== 15 false

// console.log(str.lastIndexOf('я')); // 29

// // "абв".repeat(-1); // RangeError
// // "абв".repeat(0); // ''
// // "абв".repeat(1); // 'абв'
// // "абв".repeat(2); // 'абвабв'
// // "абв".repeat(3.5); // 'абвабвабв' (количество будет преобразовано в целое число)
// // "абв".repeat(1 / 0); // RangeError

// let re = /учиться|учусь/gi; //
// let newstr = str.replace(re, 'изучать' );
// console.log(newstr);

// const paragraph = "I think Ruth's dog is cuter than your dog!";

// console.log(paragraph.replaceAll('dog', 'monkey'));
// // Expected output: "I think Ruth's monkey is cuter than your monkey!"

// // Global flag required when calling replaceAll with regex
// const regex = /Dog/gi;
// console.log(paragraph.replaceAll(regex, 'ferret'));
// // Expected output: "I think Ruth's ferret is cuter than your ferret!"

// var testString = "hey JuDe";
// var reg = 'J';

// let g = testString.search(reg,);
// console.log(g);

// ; // выведет: hey Jude содержит /[A-Z]/g

// class User {
//   name;
//   surn;
//   constructor(name, surn) {
//     this.name = name;
//     this.surn = surn;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   setSurn(surn) {
//     this.surn = surn;
//   }
//   getSurn() {
//     return this.surn;
//   }

// };

// class Employee extends User {
//   constructor (name, surn, age) {
//     super(name, surn);
//     this.age = age;
//   }
//   setAge(age) {
//     this.age = age;
//   }
//   getAge() {
//     return this.age;
//   }
//   setName(name) {
//     if(name.length > 0) {
//       super.setName(name);
//     } else{
//       throw new Error ("the name is short");
//     }
//   }
//   setAge(age) {
//     if(age > 18 && age< 65) {
//       this.age = age;
//     } else {
//       throw new Error("you are too young");
//     }
//   }
// };
// let worker = new Employee('Billy', 'Douell', 58);

// console.log(worker.getName());
// console.log(worker.getSurn());
// console.log(worker.getAge());

// // , getSurn(), getAge());

// class User {
//   age;

//   constructor(age) {
//     this.age = age;
//   }

//   setAge(age) {
//     if (age >= 0) {
//       this.age = age;
//     } else {
//       throw new Error('need age more 0');
//     }
//   }

//   getAge() {
//     return this.age;
//   }
// }

// class Employee extends User {
//   constructor(age) {
//     super(age);
//   }

//   setAge(age) {
//     if (age > 0) {
//       if (age <= 120) {
//         super.setAge(age);
//       } else {
//         throw new Error('need age less 120');
//       }
//     } else {
//       throw new Error('need age more 0');
//     }
//   }
// }

// let worker = new Employee(25);

// try {
//   worker.setAge(100);
//   console.log(worker.getAge());
// } catch (error) {
//   console.error(error.message);
// }
// class User {
//   name;
//   constructor(name) {
//     this.name = name;
//   }
//   setName(name) {
//     this.name = name;
//   }
//   getName() {
//     return this.name;
//   }
//   capeFirst(str) {
//     return str[0].toUpperCase() + str.slice(1);
//   }
// };

// class Employee extends User {
//   surn;
//   age;
//   constructor(surn, age, name) {
//     super(name);
//     this.surn = surn;
//     this.age = age;
//   }
//   setSurn(surn) {
//     this.surn = surn;
//   }

//   getSurn(){
//     return this.surn;
//   }
//   getSurn1() {
//     return this.capeFirst(this.surn);
//   }
// };

// let worker = new Employee();
// worker.setSurn('douell');
// console.log(worker.getSurn());
// console.log(worker.getSurn1());
/*
class User {
	#name;
	#surn;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
	
	setSurn(surn) {
		this.#surn = surn;
	}
	getSurn() {
		return this.#surn;
	}
};

class Boy extends User {
  constructor(#name, #surn) {
    super(#name,#surn);
  }
  getFull() {
    return this.#name + ' ' + this.#surn;
  }

};
let worker = new Boy();
worker.setName('Mike');
console.log(worker.getName())
*/
// class User {
//   #name;
//   #surn;

//   setName(name) {
//     this.#name = name;
//   }

//   getName() {
//     return this.#name;
//   }

//   setSurn(surn) {
//     this.#surn = surn;
//   }

//   getSurn() {
//     return this.#surn;
//   }
// }

// class Boy extends User {
//   constructor(name, surn) {
//     super();
//     this.setName(name);
//     this.setSurn(surn);
//   }

//   getFull() {
//     return this.getName() + ' ' + this.getSurn();
//   }
// }

// let worker = new Boy();
// worker.setName('Mike');
// worker.setSurn('Doe');
// console.log(worker.getFull()); // Output: Mike Doe

// class User {
//   #name;
//   constructor(name) {
//     this.#name = name;
//   }
//   setName(name) {
//     this.#name = name;
//   }
//   getName() {
//     return this.#name;
//   }
// };
// class worker extends User {
//   constructor(name) {
//     super(name);

//   }
//   getFull() {
//     return this.getName();
//   }
// };

// let boy = new worker();
// boy.setName('Mike');
// console.log(boy.getFull());

// class User {
//   #name;

//   constructor(name) {
//     this.#name = name;
//   }

//   setName(name) {
//     this.#name = name;
//   }

//   getName() {
//     return this.#name;
//   }
// }

// class Worker extends User {
//   constructor(name) {
//     super(name);
//   }

//   getFull() {
//     return this.getName();
//   }
// }

// let boy = new Worker('Mike');
// console.log(boy.getFull());
/*
class User {
  #age;
  setAge(age) {
    this.#age = age;
  }
  getAge() {
    return this.#age;
  }
};

class User1 extends User {

  addAge() {
    this.setAge(this.getAge() + 1);
  }
};

let newMann = new User1();
newMann.setAge(58);
console.log(newMann.getAge());
newMann.addAge();
console.log(newMann.getAge());
*/
/*
class User {
	#name;
	
	setName(name) {
		this.#name = name;
	}
	getName() {
		return this.#name;
	}
}

class Employee extends User {
	setName(name) {
		if (name.length > 0) {
			this.super.setName(name) 
		}
	}
}
*/
/*
class User {
	setName(name) {
		if (this.notEmpty(name)) {
			this.name = name;
		}
	}
	getName() {
		return this.name;
	}
	
	_notEmpty(str) {
		return str.length > 0;
	}
}
class Employee extends User {
	setSurn(surn) {
		if (this._notEmpty(surn)) {
			this.surn = surn;
		}
	}
	getSurn() {
		return this.surn;
	}
}
*/
/*
class User {
	_name;
	
	setName(name) {
		this._name = name;
	}
	getName() {
		return this._name;
	}
}

class Employee extends User {
	setName(name) {
		if (_name.length > 0) {
			this._name = name;
		}
	}
}
*/

// class User {
// 	setName(name) {
// 		this._name = name;
// 	}
// 	getName() {
// 		return this._name;
// 	}
// };
// class Student1 extends User {
// 	setYear(year) {
// 		this._year = year;
// 	}
// 	getYear() {
// 		return this._year;
// 	}
// };

// class StudentProgrammer extends Student1 {
// 	setSkill(skill) {
// 		this._skill = skill;
// 	}
// 	getSkill() {
// 		return this._skill;
// 	}
// };

// let boy = new StudentProgrammer();
// boy.setSkill(12);
// console.log(boy.getSkill());

// boy.setName('Mike');
// console.log(boy.getName());

// boy.setYear(34);
// console.log(boy.getYear());
/*
class User {
  name;
  setName(name) {
    this.name = name;
  }
  getName() {
    return this.name;
  }
  CorStr(str) {
    return str[0].toUpperCase() + str.slice(1);
  }
}
class Employee extends User {
  salary;
  setSalary(salary) {
    this.salary = salary;
  }
  getSalary() {
    return this.salary;
  }
  addSalary(salary, adds = 100) {
    let newSalary = salary + adds;
    return newSalary
  }
}

class Programmer extends Employee {
  position;
  setPos(position) {
    this.position = position;
  }
  getPos() {
    return this.position;
  }
}

class Designer extends Programmer {
  skill;
  setSkill(skill) {
    this.skill = skill;
  }
  getSkill() {
    return this.skill;
  }

};





let user = new Designer();
user.setSkill(4);
console.log(user.getSkill());
user.setPos('junior');
user.setSalary(2000);
user.setName('Mike');

console.log(user.getSkill(), user.getPos(), user.getSalary(), user.getName());
console.log(user.addSalary(user.getSalary()));
console.log(user.CorStr(user.getPos()));
*/

// let elem = document.querySelector('p');

// console.dir(elem);

// let elem = document.querySelector('div');
// console.dir(elem);

class User {
  #name;

  constructor(name) {
    this.#name = name;
  }
  getName() {
    return this.#name;
  }
}
// Создадим объект этого класса:

let user = new User("john");
// Запишем код метода в переменную:

let func = user.getName;
// В момент записи метода в переменную контекст и потерялся. Теперь this внутри кода метода не будет указывать на объект класса. Проверим, вызовем нашу функцию:

// console.log(func()); // ошибка
// Для решения проблемы можно привязать контекст к функции, например, через bind:

// func = func.bind(user);
// console.log(func()); // работает
/*
function sayHello() {
  console.log(`Hello, ${this.sur}!`);
}

const person = {
  name: 'John',
  sur: "Douell"
};

console.log(sayHello.call(person)); // Выведет "Hello, John!"


function sayGoodbye() {
  console.log (`Goodbye ${this.mom} `);
};

let personen = {
  name: 'Lily',
  name2: 'Mikki',
  mom: 'Pippi'
};
sayGoodbye.call(personen);

*/
/*
Створіть клас A з методом read
Створіть клас B, який наслідується (extends) від A, та має метод close
Створіть instanceB класу B
Перевірити:
наявніcть методів read/close в instanceB через оператор in
наявніcть методів read/close в instanceB через метод hasOwnProperty
всі ключі instanceB (Object.keys)

*/

class A {
  variableA;

  read() {
    console.log(`I am a method READ in obj A`);
  }
}

class B extends A {
  variableB;

  close() {
    console.log(`I am a method CLOSE in obj B`);
  }
}

let instanceB = new B();

// console.log('variableA' in instanceB); // true
// console.log('read' in A.prototype); //true

// console.log('read' in instanceB);   //true
// console.log('close' in instanceB); // true

// console.log(instanceB.hasOwnProperty('read')); // false becauce it is prop of prototype
// console.log(instanceB.hasOwnProperty('close')); // false becauce it is prop of prototype

// const keys = Object.keys(instanceB);

// console.log(keys);

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };
// delete obj[key2];
// console.log( obj[key1], obj[key2], obj[key3]);
// console.log(obj);
// console.log([key1] in obj);
// console.log(typeof obj[key1]);
// console.log( typeof {x: 1, y: 2, z: 3} );
// console.log( typeof {} );
// const arr = ['a', 'b', 'c'];
// arr = [1, 2, 3];
// console.log(arr);

// function calculateActivity(monthOfWeek) {
//   switch (monthOfWeek) {
//     case "суббота":
//     case "воскресенье":
//       console.log("Отдых");
//       break;
//     case "понедельник":
//     case "вторник":
//       console.log("Средняя активность");
//       break;
//     case "среда":
//     case "четверг":
//       console.log("Высокая активность");
//       break;
//     case "пятница":
//       console.log("Средняя активность");
//       // Дополните кейсы для различных уровней активности
//       break;
//     default:
//       console.log("Некорректный день недели");
//   }
// }

// calculateActivity("пятница"); // Пример вывода: "Легкая активность"
// console.log(calculateActivity());
// let monthWeek = (month) => {
//   switch (month) {
//     case 1:
//       console.log("понедельник");
//       break;

//     case 2:
//       console.log("вторник");
//       break;

//     case 3:
//       console.log("среда");
//       break;

//     case 4:
//       console.log("четверг");
//       break;

//     case 5:
//       console.log("пятница");
//       break;

//     case 6:
//       console.log("суббота");
//       break;

//     case 7:
//       console.log("воскресенье");
//       break;

//     default:
//       console.log("Введите корректный день недели от 1 до 7");
//       break;
//   }
// };
// console.log(monthWeek(3));

// // let lang = 'ru';

// // if (lang == 'ru') {
// // 	console.log('рус');
// // } else if (lang == 'en') {
// // 	console.log('анг');
// // } else if (lang == 'de') {
// // 	console.log('нем');
// // } else {
// // 	console.log('язык не поддерживается');
// // }

// let langSwitch = (lang) => {
//   switch (lang) {
//     case "ru":
//       console.log("RU");
//       break;

//     case "en":
//       console.log("EN");
//       break;

//     case "de":
//       console.log("DE");
//       break;

//     default:
//       console.log("Any");
//       break;
//   }
// };
// console.log(langSwitch('ru'));

// let age = 17;
// let adult = age >= 18 ? true : false;
// console.log(adult);

// let gen = 89;
// let a = 4, b = 4; // Corrected the declaration of variables a and b
// let c = gen <= 456 ? ((a, b) => { let res = a + b; return res; })(a, b) : console.log('hhhh');

// // let gen = 400;
// // let a= 4;
// // let b = 5;

// // let c = gen <= 345 ? ((a, b) => {let res = a + b; return res; }) (a, b) : console.log('LOH');
// // console.log(c);

// let str = 'abcde';
// let first = str[0] === 'a' ? console.log('YES') : console.log('NO');
// console.log(first);

// let num = 12345;
// num = String(num);
// console.log(num);

// let firstNum = num[0] == 1 || num[0] == 2 || num[0] == 3 ? console.log('YES') : console.log('NO');

// let season = (month) => {
//   if ((month >= 1 && month <= 2) || month === 12) {
//     console.log("WINTER");
//   } else if (month >= 3 && month <= 5) {
//     console.log("SPRING");
//   } else if (month >= 6 && month <= 8) {
//     console.log("SUMMER");
//   } else if (month >= 9 && month <= 11) {
//     console.log("AUTUMN");
//   } else {
//     console.log("PUT 1-12");
//   }
// };

// let num = 123456;

// let strNum = num.toString();
// console.log(strNum.length);
// let sum13 = 0;
// let sum46 = 0;

// for (let i = 0; i < 3; i++) {
//   sum13 += parseFloat(strNum[i]);
// }
// for (let i = 3; i < 6; i++) {
//   sum46 += parseFloat(strNum[i]);
// }

// console.log(sum13, sum46);

// let obj = {x: 1, y: 2, z: 3};

// for (elem in obj) {
// }
// console.log(elem);
// console.log(obj[elem]);
// let i = 1;
// while (i <= 5) {
//   console.log(i);
// i++
// }
/*

Дано число num с неким начальным значением. 
Умножайте его на 3 столько раз, пока результат 
умножения не станет больше 1000. Какое число получится? 
Посчитайте количество итераций, необходимых для этого.
*/
// let num = 10;
// let count = 0;  // Инициализируем переменную count
// let res = 0;

// while (num >= 2) {
//   res = num / 3;
//   num = res; // Обновляем значение num, чтобы цикл мог продолжиться
//   count++;
// }
// console.log(res); // Ожидаемый результат после выхода из цикла
// console.log(count); // Количество итераций

// let arr = Array.from({length: 8}, (value, index) => index = index + 1);
// console.log(arr);

// let iterable = 'hello';

// let arr1 = Array.from(iterable, (value, index) => {
//   console.log(`Index ${index}: ${value}`);
//   return value.toUpperCase();
// });

// console.log(arr1);

// let result = arr1.find((elem) => elem === 'H' );
// console.log(result);
// let index = arr1.findIndex((elem) => elem === "L");
// let index1 = arr1.indexOf("L");
// console.log(index);
// console.log(index1);

// let arr = [1, 2, 3, 4, 5, -5, 6, 7, 8, 9];
// summ = 0;
// length = arr.findIndex((elem) => elem < 0);
// for( let i = 0; i < length; i++) {
//   summ += arr[i];
// };
// console.log(summ);

// let index3 = arr.indexOf(3);
// console.log(arr.indexOf(9));

// for (let i = 1; i <= 3; i++) {

//   for(let k = 1; k <= 4; k++){
//     document.write(' ' + i + k);

//   }
// };

// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
// 		document.write(i);
// 	}
// }

// let arr = [];
// for(let i = 1; i <= 10; i++) {
//   arr.push('x');
// };
// console.log(arr);

/* Дан массив с числами. Переберите его циклом и 
запишите в новый массив только положительные из чисел.
*/

// let array = [1, 2, 3, -4, 5, -6, 7, -8, 9];
// let arr1 = [];
// let arrayFilter = [];
// for(let i = 0; i <= array.length - 1; i++) {
//   if(array[i] > 0 ) {
//     arr1.push(array[i]);
//   }
// }
// let result = array.filter((elem) => elem < 0);
// arrayFilter.push(result);
// console.log(arr1);
// console.log(arrayFilter);

/* Дан массив с числами. Переберите этот 
массив циклом и возведите каждый элемент этого массива в квадрат.
*/

// for( let i = 0; i < array.length; i++) {
//   array[i] = array[i] ** 2;
// };
// console.log(array);
// let array1 = array.map((elem)  => Math.pow(elem, 0.5 ));

// console.log(array1);

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];  //klucz
// let arr2 = [1, 2, 3, 4, 5, 6, 7];   // znaczenie

// let obj = Object.fromEntries(arr1.map((key, index) => [key, arr2[index]]));
// let obj2 = {};
// for(let i = 0; i < arr1.length; i++) {
//   let key = arr1[i];
//   let value = arr2[i];
//   obj2[key] = value;

// }
//   console.log(obj2, obj);

// let obj2 = Object.fromEntries(
//   Object.entries(obj).filter(([key, value]) => value % 2 === 0)
// );

// let keysArray = Object.keys(obj);
// let valuesArray = Object.values(obj);

// let obj2 = Object.fromEntries(valuesArray.map((key, index) => [key, keysArray[index]]));

// console.log(obj2);

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// for(let key in obj) {
//   obj[key] *=2;
// };

// console.log(obj);

// let arr = ['a', 'b', 'c', 'd', 'e'];

// let flag = false;

// for(let elem of arr) {
//   if(elem === 'p') {
//     flag = true;
//   }
// };
// console.log(flag);

//   let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];

// // Выведите с его помощью элементы с текстом 'l', 'e', 'g' и 'a'.
// console.log(arr[3] [2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);

// Обращаясь к каждому элементу массива найдите сумму всех его элементов.

// let arr = [[1, 2], [3, 4], [5, 6]];

// console.log( arr[0][0] + arr[0][1] + arr[1][0]+ arr[1][1] + arr[2][0] + arr[2][1])

//   summ = arr.flat().reduce((accu, value) => accu += value, 0);
//   console.log(arr1);
//   console.log(summ);

// let arr = [
//   [
//     ["a", "b"],
//     ["c", "d"],
//   ],
//   [
//     ["e", "f"],
//     ["g", "h"],
//   ],
//   [
//     ["i", "j"],
//     ["k", "l"],
//   ],
// ];

// let arr1 = arr.flat(2);
// console.log(arr1);
// console.log(arr[0][0][1], arr[1][1][0], arr[2][0][0]);

// let arrow = [
//   [1, 2, 3, [4, 5, [6, 7]]],
//   [8, [9, 10]],
// ];
// console.log(arrow[0][0], arrow[0][1], arrow[0][2],
// arrow[0][3][0], arrow[0][3][1], arrow[0][3][2][0],
// arrow[0][3][2][1], arrow[1][0], arrow[1][1][0], arrow[1][1][1]);

// console.log(arrow[0][3][2][0]);
// console.log(arr[0][0] + arr[0][1] + arr[0][2] + arr)

// let arrow1 = arrow.flat(3).reduce((accu, value) => (accu += value), 0);
// console.log(arrow1);

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
// let summ = 0;
// for(let subArr of arr) {
//   for(let elem of subArr){
//      summ += elem;
//     }
//     // console.log(summ);
//   };

//   let arr1 = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let summ1 = 0;
//   for(let subAr1 of arr1) {
//     for(let subAr2 of subAr1){
//       for(elem of subAr2) {
//         summ1 += elem;
//         console.log(elem);
//       }
//     }
//   };
//   console.log(summ1);

//   let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];

// for(let i = 0; i < arr.length; i++) {
//   for(let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// };

// let arr = [];

// for (let i = 0; i < 3; i++) {
//    arr[i] = [];
//   for(let j = 0; j < 4; j++) {
//     let j = 'x';
//     arr[i].push(j)
//   }
// };
// console.log(arr);

/*
Сформируйте с помощью трех вложенных циклов
 следующий массив:

[
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
	[
		[1, 2, 3, 4, 5],
		[1, 2, 3, 4, 5],
	],
]
*/

// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr[j] = [];

//     for (let k = 1; k <= 5; k++) {
//       arr[j].push(k);
//     }
//   }
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);

// let arr = [];

// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];

// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }

// console.log(arr);
/*
Сформируйте с помощью двух вложенных циклов следующий массив:

[[1, 2], [3, 4], [5, 6], [7, 8]]
*/

// let arr = [];
// let k = 1;
// for( let i = 1; i <= 4; i++) {
//   arr[i] = [];
//   for(let j = 1; j <= 2; j++) {
//     arr[i].push(k++);
//   }
// };
// console.log(arr);

/*
Сформируйте с помощью двух вложенных циклов 
следующий массив:

[[2, 4, 6], [8, 10, 12], [14, 16, 18], [20, 22, 24]]
*/
// let arr = [];
// let k = 2;
// for(let i = 0; i < 4; i++) {
//   arr[i] = [];
//   for(let j = 0; j < 3; j++) {
//     arr[i].push(k);
//     k += 2
//   }
// };
// console.log(arr);

/*
Сформируйте с помощью трех вложенных циклов 
следующий трехмерный массив:

[[[1, 2], [3, 4]], [[5, 6], [7, 8]]]
*/
// let arr = [];
// let counter = 1;
// for(let i = 0; i < 2; i++) {
//   arr[i] = [];
//   for(let j = 0; j < 2; j++) {
//     arr[i][j] = [];
//     for(let k = 0; k < 2; k++) {
//       arr[i][j][k] = counter++;
//     }
//   }
// }
// console.log(arr);

// [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// };
// let summA = obj.key1.key1 + obj.key1.key2 + obj.key1.key3;
// console.log(summA);
// let summB = obj.key2.key1 + obj.key2.key2 + obj.key2.key3;
// console.log(summB);
// let summC = obj.key3.key1 + obj.key3.key2 + obj.key3.key3;
// console.log(summC);
// let total = summA + summB + summC;
// console.log(total)

// let total2 = 0;
// for(let innKey in obj) {
//   for(outKey in obj[innKey]) {
//     total2 += obj[innKey][outKey];
//   }
// }
// console.log(total2);

// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// console.log( obj[3][1], obj[2][2]);

// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {
// 			d: 3,
// 			e: 4,
// 		}, f: 5,
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// };
// console.log(obj.key1.a + obj.key1.b + obj.key1.c.d + obj.key1.c.e +
// obj.key1.f + obj.key2.g + obj.key2.h);

// let obj = {
// 	a: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	b: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	c: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// }
// for(let key in obj) {
//   let subObj = obj[key];
//   // console.log(subObj);

//   for(subKey in subObj) {
//       console.log(subObj[subKey]);
//   }
// }

// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// }
// let sum = 0;
// for(let key in obj) {
//   subObj = obj[key];
//   for(let subkey in subObj ) {
//     sum += subObj[subkey];
//   }
// };
// console.log(sum);

// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// };

// let sum = 0;
// for(let key in obj) {
//   subObj = obj[key];
//   console.log(obj[key]);
//   for(let subKey in subObj) {
//     subSubObj = subObj[subKey];
//     console.log(subObj[subKey])
//     for( let subsubKey in subSubObj) {
//       sum += subSubObj[subsubKey];
//     }
//   }
// }
// console.log(sum);

// let students = {
// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };
// console.log(students['group3'][0]);

// let data1 = {
// 	1: [
// 		'data11',
// 		'data12',
// 		'data13',
// 	],
// 	2: [
// 		'data21',
// 		'data22',
// 		'data23',
// 	],
// 	3: [
// 		'data31',
// 		'data32',
// 		'data33',
// 	],
// 	4: [
// 		'data41',
// 		'data42',
// 		'data43',
// 	],
// };

// for(let key in data1) {
//   for(let dat of data1[key]) {
//     console.log(dat);
//   }
// }

// let data = [
// 	{
// 		1: 'data11',
// 		2: 'data12',
// 		3: 'data13',
// 	},
// 	{
// 		1: 'data21',
// 		2: 'data22',
// 		3: 'data33',
// 	},
// 	{
// 		1: 'data31',
// 		2: 'data32',
// 		3: 'data33',
// 	},
// ];

// console.log((data[0])[1])

// for(elem of data) {
//   for(key in elem)
//   console.log(elem[key])
// }

// let data = [
// 	{
// 		1: [
// 			'data111',
// 			'data112',
// 			'data113',
// 		],
// 		2: [
// 			'data121',
// 			'data122',
// 			'data123',
// 		],
// 	},
// 	{
// 		1: [
// 			'data211',
// 			'data212',
// 			'data213',
// 		],
// 		2: [
// 			'data221',
// 			'data222',
// 			'data223',
// 		],
// 	},
// 	{
// 		1: [
// 			'data411',
// 			'data412',
// 			'data413',
// 		],
// 		2: [
// 			'data421',
// 			'data422',
// 			'data423',
// 		],
// 	},
// ];

// for (let elem of data) {
//   for (let key in elem) {
//     for(let item of elem[key]) {
//       console.log(item);
//     }
//   }
// };

// let arr = [];

// for (let i = 0; i < 2; i++) {
// 	arr[i] = []; // создаем подмассив

// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1); // заполняем подмассив числами
// 	}
// }

// console.log(arr);

// let users = [
// 	{
// 		name: 'name1',
// 		surn: 'surn1',
// 	},
// 	{
// 		name: 'name2',
// 		surn: 'surn2',
// 	},
// 	{
// 		name: 'name3',
// 		surn: 'surn3',
// 	},
// ];

// for(let user of users) {
//   console.log(user.name + '  ' + user.surn);
// }

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// 	{
// 		name: 'name4',
// 		salary: 600,
// 		age: 31,
// 	},
// 	{
// 		name: 'name5',
// 		salary: 700,
// 		age: 32,
// 	},
// ];
// let totalSalary = 0;
// for (let worker of employees) {
//   if(worker.age >= 30) {
//     totalSalary += worker.salary;
//   }

// };
// console.log(totalSalary);

// let obj = {
// 	'ru': ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
// 	'en': ['mn', 'ts', 'wd', 'th', 'fr', 'st', 'sn'],
// };

// console.log(obj.ru[3]);
// let lang = 'ru';
// let key = 3;

// console.log(obj[lang][key]);

// let months = {
// 	'ru': [
// 		'январь',
// 		'февраль',
// 		'март',
// 		'апрель',
// 		'май',
// 		'июнь',
// 		'июль',
// 		'август',
// 		'сентябрь',
// 		'октябрь',
// 		'ноябрь',
// 		'декабрь',
// 	],
// 	'en': [
// 		'january',
// 		'february',
// 		'march',
// 		'april',
// 		'may',
// 		'june',
// 		'july',
// 		'august',
// 		'september',
// 		'october',
// 		'november',
// 		'december',
// 	],
// };
// // Даны также следующие переменные:

// let lang = 'en'; // может быть или 'ru' или 'en'
// let month1 = 11;   // число от 0 до 11

// console.log(months[lang][month1]);

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['дело111', 'дело112', 'дело113'],
// 			30: ['дело121', 'дело122', 'дело123'],
// 		},
// 		12: {
// 			30: ['дело211', 'дело212', 'дело213'],
// 			31: ['дело221', 'дело222', 'дело223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['дело311', 'дело312', 'дело313'],
// 			30: ['дело321', 'дело322', 'дело323'],
// 			31: ['дело331', 'дело332', 'дело333'],
// 		}
// 	},
// };
// let year  = '2019';
// let month = 12;
// let data = 29;
// console.log(affairs[year][month][data][0])

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24', //
// 		key5: '25',
// 	},
// }

// let key1 = 'key1';
// let key2 = 'key2';
// console.log(obj[key2]['key4']);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj.key2.key4);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj.key1['key2']);

// let users = [
// 	{
// 		name: 'name1',
// 		surn: 'surn1',
// 	},
// 	{
// 		name: 'name2',
// 		surn: 'surn2',
// 	},
// 	{
// 		name: 'name3',
// 		surn: 'surn3',
// 	},
// ];

// users.push({
//   name: 'name4',
//   surn: 'surn4',
// });
// console.log(users);

// let employees = [
// 	{
// 		name: 'name1',
// 		salary: 300,
// 		age: 28,
// 	},
// 	{
// 		name: 'name2',
// 		salary: 400,
// 		age: 29,
// 	},
// 	{
// 		name: 'name3',
// 		salary: 500,
// 		age: 30,
// 	},
// ];

// employees.push({
//   name: 'name4',
//   salary: 800,
//   age: 80,
// });
// console.log(employees);

// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };

// students.group1.push('student14');
// students.group4 = [];
// students.group4.push('student 4131')
// console.log(students);

// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };

// // Добавьте нового студента в подгруппу 'subgroup11'
// // students['group1']['subgroup11'].push('student114');

// // students['group1']['subgroup 14'] = [];
// // console.log(students['group1']);

// // students['group4'] = {};
// // students['group4']['subgroup41'] = [];
// // students['group4']['subgroup42'] = [];
// // students['group4']['subgroup43'] = [];
// // students['group4']['subgroup41'].push('student411', 'student412', 'student413');

// // console.log(students);

// // Сделайте четвертую группу, в ней сделайте
// // подгруппу и добавьте в нее двух новых студентов.

// console.log( Math.pow(3,3));
// console.log(Math.sqrt(36));

// let arr = [4, 2, 5, 19, 13, 0, 10];
// Найдите квадратный корень из суммы кубов его элементов.
// Для решения воспользуйтесь циклом for.
// let summ = 0;
// for (let i = 0; i < arr.length ; i++) {
//   summ += Math.pow(arr[i], 3);
// }
// console.log(Number(Math.sqrt(summ).toFixed(2)));

// // Найдите квадратный корень из 379.
// // Результат округлите до целых, до десятых, до сотых

// console.log(Math.sqrt(379).toFixed(0));
// console.log(Math.sqrt(379).toFixed(1));
// console.log(Math.sqrt(379).toFixed(2));

// Найдите квадратный корень из 587. Округлите результат в
// большую и меньшую стороны,
// запишите результаты округления в объект с ключами 'floor' и 'ceil'.

// console.log(Math.sqrt(579));
// console.log(Math.ceil(Math.sqrt(579)));
// console.log(Math.floor(Math.sqrt(579)));

// // Даны числа 4, -2, 5, 19, -130, 0, 10. Найдите минимальное и максимальное число.

// console.log( Math.min(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));

// function getInit(min, max) {
//   console.log(Math.random())
// };
// getInit();
// getInit();
// getInit();
// getInit();

// let num  = (min, max) => {
//   let num1 = Math.random() * (max - min) + min;
//   console.log(num1);
//   return num1;
// };
// num(2,5);
// num(2,5);

// let bum = (min, max) => {
//   let num2 = Math.ceil(Math.random() * (max - min +1) + min);
//   return num2;
// };

// console.log(bum(2,6));

// console.log(bum(2,6));

// console.log(bum(2,6));
// console.log(bum(2,6));

// let num = (max, min) => {
//   let num1 =Math.ceil(Math.random() *(max - min + 1) +min);
//   return num1;
// };
// console.log(num(10, 100));
// console.log(num(10, 100));

// console.log(num(10, 100));

// console.log(num(10, 100));

// console.log(num(10, 100));

// let str = '12345 учу javascript!';

// let substr = str.substring(-1);
// console.log(str.substring(2,5));
// console.log(str.slice(0,3));

// let arr = [1, 2, 3, 4, 5];

// // [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e']

// arr.splice(1, 0, 'a');
// arr.splice(2, 0, 'b');
// arr.splice(6, 0, 'c');
// arr.splice(arr.length, 0, 'e');

// console.log(arr);

// let obj = {a: 1, b: 2, c: 3};

// console.log(Object.keys(obj));

// let num = 12345;
// let arr = String(num).split('');

// let prod = 1;
// for (let digit of arr) {
// 	prod *= Number(digit);
// }

// let obj = {
// 	func1: function() {(console.log('1'))},
// 	func2: function() {(console.log('2'))},
// 	func3: function() {(console.log('3'))}
// };
// console.log(obj.func1());

// let obj = {
// 	func1: function() { return 1;},
// 	func2: function() { return 2;},
// 	func3: function() { return 3;}
// };
// console.log(obj.func1() + obj.func2() + obj.func3());

// let sum = 0;
// for(let key  in obj) {
//   sum += obj[key]();
// }
// console.log(sum);

/*
Сделайте объект с тремя функциями, каждая из которых 
будет принимать параметром массив с числами. Сделайте так, 
чтобы первая функция возвращала сумму элементов массива, 
вторая функция - сумму квадратов, а третья - сумму кубо
*/

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// let sqrtsum = 0;
// let sumcub = 0;
// let obj = {
//   func1: function () {
//     for (let elem of arr) {
//       sum += elem;
//     }
//     return sum;
//   },
//   func2: function () {
//     for (let elem of arr) {
//       sqrtsum += Math.pow(elem, 2);
//     }
//     return sqrtsum;
//   },
//   func3: function () {
//     for (let elem of arr) {
//       sumcub += Math.pow(elem, 3);
//     }
//     return sumcub;
//   },
// };
// console.log(obj.func1(arr));
// console.log(obj.func2());
// console.log(obj.func3());
/*
Сделайте функцию test, параметрами принимающую 3 
функции. Передайте в нее первым параметром функцию, 
возвращающую 1, вторым - функцию, возвращающую 2, 
третьим - функцию, возвращающую 3. Выведите в консоль 
сумму результатов функций.
*/

// function test(func1, func2, func3) {
// 	console.log(func1());
// 	console.log(func2());
//   console.log(func3());
//   console.log(func1() + func2() + func3());

// };

// test(
//   function() {return 1;},
//   function() {return 2;},
//   function() {return 3;}
// );
// let get1 = function() {
//   return 1;
// };
// let get2 = function() {
//   return 2;
// };
// let get3 =function() {
//   return 7;
// };

// function test(func1, func2, func3) {
//   console.log(func1() + func2() + func3());
// };

// test(get1, get2, get3);

// function test(func) {
//   console.log(func(3));
// };

// let red = function(num) {
//   return num*num;
// };
// test(red);

// function test(num, func1) {
//   console.log(func1(num));
// };

// let red = function(num){
//   return num * num;
// }
// let red1 = function(num) {
//   return Math.pow(num, 3);
// };
// test(2, red1);

// function test(num, func1, func2) {
//   // console.log(func1(num) + func2(num));
//   return func1(num) + func2(num);
// };

// let red1 = function(num) {
//   return Math.pow(num, 2);
// };

// console.log(red1(3));

// let red2 = function(num) {
//   return Math.pow(num, 3);
// };
// console.log(red2(3));

// console.log(test(3, red1, red2));

// function test(num, func1, func2){
//   console.log(func1(num) + func2(num));
// };

// function red1(num) {
//   return Math.pow(num, 2);
// };

// function red2(num) {
//   return Math.pow(num, 3);
// };
// test(2, red1, red2);

// function test(arr, func1) {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = func1(arr[i]);
//   }
//   return arr;
// };

// let result = test(
//   [1, 2, 3],
//   function(num) { return num * num;}
// );
// console.log(result);

// function test(arr, func1) {
//   for(let i = 0;  i< arr.length; i++) {
//     arr[i] = func1(arr[i]);
//   };
//   return arr;
// };

// let result = test(
//   [1, 2, 3, 4, 5, 6],
//   function(num) {return Math.pow(num, 3)}
// );
// console.log(result);

// function test(num1, num2) {
//   function sqrt(num) {
//     return Math.pow(num, 2);
//   }
//   return sqrt(num1) + sqrt(num2);
// }

// console.log(test(2, 3));

/*Сделайте функцию func, которая параметрами 
будет принимать два числа, а возвращать сумму 
квадрата первого числа с кубом второго числа. 
Сделайте для этого вспомогательную функцию square, 
возводящую число в квадрат, и вспомогательную функцию 
cube, возводящую число в куб.
*/

// function test(num1, num2) {
//   function sqrt(num) {
//     return Math.pow(num, 2);
// };
//   function cube(num) {
//     return Math.pow(num, 3);
//   }
//   return sqrt(num2) + cube(num1);
// };

// console.log(test(5, 30));

// function test() {
// 	let num = 1;

// 	function func() {
// 		console.log(num);
// 	}

// 	func();
// }

// test();

// function test() {
// 	let num = 1;

// 	function func1() {
// 		console.log(num);
// 	}
// }

// test();

// function func1() {
// 	return function() {
// 		return '!';
// 	};
// }
// console.log(func1());
// let result = func1();
// console.log( result ); // выведет '!'

/*
Сделайте функцию func1, которая будучи вызвана вот так:
 func1()(), вернет число 1. Сделайте аналогичную функцию 
 func2, возвращающую число 2. Найдите сумму результатов 
 этих функций.
 */

// function func1() {
//   return function() {
//     return 1
//   }
// };

// function func2() {
//   return function() {
//     return 2;
//   }
// };

// console.log(func1()() + func2()());

// function print() {
//   return function(str) {
//     console.log(str);
//   }
// };

// print()('4321');
// let arr = [];
// function test (num1) {
//   return function(num2) {
//     return function(num3) {
//       return function( num4) {
//         return function (num5) {
//           return function () {
//         arr.push(num1, num2, num3, num4, num5, undefined );

//             return arr;
//           }
//         }
//       }
//     }
//   }
// }
// test(1)(2)(3)(4)(5)();
// // console.log(String(test()()()()()));
// console.log(arr);

// function each(arr, callback) {
//   let resArray = [];
//   for(let elem of arr) {
//     resArray.push(callback(elem));
//   }
//   return resArray;
// };

// let result = each([1, 2, 3, 4, 5, 6], function(num) {return num * num});

// console.log(result);

/*Дан массив с числами. С помощью созданной нами функции
 each увеличьте каждый элемент в два раза.
 */

//  let array = [4, 5, 6, 7, 8];
//  let resArray = [];

//  function each(arr, callback) {
//   for(let elem of arr) {
//     resArray.push(callback(elem));
//   }
//   return resArray;
//  };

//  let result = each(array, function(num) {return num * 2});

//  console.log(result);

// let array = ['abc', 'def', 'ghj', 'klm', 'oprst'];

// function backTo(arr, callback) {
//   let backArray = [];
//   for(let str of arr) {
//     backArray.push(callback(str));
//   }
//   return backArray;
// };

// let result = backTo(array, function(elem) {return elem.split('').reverse().join('')});

// console.log(result);

// let result1 = backTo(array, function(elem) {return elem.slice(0,1).toUpperCase() + elem.slice(1)});
// console.log(result1);
// let array = [4, 5, 6, 7, 8, 9];

// function back(arr, callback) {
//   let newArr = [];
//   for (let elem of arr) {
//     newArr.push(callback(elem));
//   }
//   return newArr;
// };

// function square(num) {
//   return Math.pow(num,2);
// };

// function cube(num) {
//   return Math.pow(num, 3);
// };

// let result = back(array, square);
// console.log(result);

// console.log(back(result, cube));

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if (elem > 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result1 = filter([1, 2, 3, 4, 5], elem => elem > 0);
// console.log(result1);

// let func1 = (function func2() {
//   let num = 5;
//   return function () {
//     num--;
//     if (num >= 0) {
//       console.log(num);
//     } else  {
//       num = 5;
//     };
//   };
// })();

// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();
// func1();

// let test = function func1(arr) {
//   console.log(arr.shift(), arr);
//   if(arr.length != 0) {
//     func1(arr);
//   }
// };
// test(arrow);

// let arrow = [1, 2, 3, 4, 5];

// function getSquaresSum(arr) {
//   let sum = Math.pow(arr.shift(),2);
//   if(arr.length !== 0 ) {
//     sum += getSquaresSum(arr);
//   }
//   return sum;
// }
// console.log(getSquaresSum(arrow));

// let arrow = [1, 2, 3, 4, 5];

// function getSquaresSum(arr) {
//   let sum = Math.pow(arr.shift(), 2);
//   if(arr.length !== 0) {
//     sum += getSquaresSum(arr);
//   }
//   return sum;
// }
// console.log(getSquaresSum(arrow));

// let array = [
// 	1,
// 	[
// 		2, 7, 8
// 	],
// 	[
// 		3, 4, [5, [6, 7]],
// 	]
// ];

// function elemOfArr(arr) {
//   for(let elem of arr) {
//     if (typeof elem  == 'object'){
//       elemOfArr(elem);
//     } else {
//       console.log(elem);
//     }
//   }
// };
// console.log(elemOfArr(array));

let obj = {
  a: 1,
  b: { c: 2, d: 3, e: 4 },
  f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } },
};

// let keyArr = [];
// let elemArr = [];

// function flatObj(obj) {
//   for (let key in obj) {
//     keyArr.push(key);

//     if (typeof obj[key] === "object") {
//       flatObj(obj[key]);
//     } else {
//       elemArr.push(obj[key]);
//     }
//   }
// }

// flatObj(obj);

// console.log(keyArr); // Array of keys: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'j', 'k', 'l', 'm', 'n', 'o']
// console.log(elemArr); // Array of values: [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let arrow = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

// function summOfArr(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     if (Array.isArray(elem)) {
//       sum += summOfArr(elem);
//     } else {
//       sum += elem;
//     }
//   }
//   return sum;
// };
// console.log(summOfArr(arrow));

// let array  = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// console.log( Array.isArray(array));
// function test(arr) {
//   let str = '';
//   for(let elem of arr) {
//     if (Array.isArray(elem)) {
//       str += test(elem);
//     } else {
//       str += elem;
//     }
//   }
//   return str;
// };

// console.log(test(array));

// let sqr = 2;
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (Array.isArray(arr[i])) {
//       newArr.push(test(arr[i], sqr));
//     } else {
//       newArr.push(Math.pow(arr[i], sqr));
//     }
//   }
//   return newArr;
// };

// console.log(test(array, 6));

// let newArr = arr.map((elem, index, arr) => {

//   // console.log(arr);
//   console.log(elem);
//   console.log(index + "!");
//   return index * elem * 4
// });
// console.log(newArr);
/*
  Дан массив с числами. Используя метод map 
  извлеките из каждого элемента массива квадратный
  корень и запишите результат в новый массив.
  */
//   let arr = ['qwe', 'asd', 'erty', 'rtyrt', 'rtyrty'];
//  let newArr = arr.map( elem => {return elem.split('').reverse().join('')});

//  console.log(newArr);

//  let arr = ['123', '456', '789'];

//  let newArr = arr.map((elem, index) => {return index * elem});

//  console.log(newArr);

// let arr = [12, 7, 8, 9,  13, 17, 6];

// let newArr = arr.filter((elem, index) => elem * index > 50);

// console.log(newArr);
// let arr =  [1, 2, [3, 4], 5, [6, 7]];

// let newArr = arr.filter( elem => typeof elem !== 'object');

// console.log(newArr);

// function func1(n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }

// console.log( func1(1, ...[2, 3, 4], 5, ...[6], ...[7, 8]) );

// let arr = [1, 2, 3, 4, 5];

// let newArr = Math.min(...arr);

// console.log(newArr);

// function func1(...nums) {
//   let middlesum = 0;
//   let sum = 0;
//   for (let elem of nums) {
//     sum += elem;
//     middlesum = sum / nums.length;
//   }
//   console.log(nums);
//   console.log(sum);
//   console.log(middlesum);
// }

// func1(1, 2, 3, 4, 5, 6, 7);

// let arr1 = ['a', 'b', 'c'];
// let arr2 = [1, 2, 3];
// let newArr  = ['a', 'b', ...arr2, 'c'];
// console.log(newArr);

// let newStr = (s1, s2, s3, s4, s5, s6) => {
//   return s1 + '-' + s2 + '-' + s3 + '-' + s4 + '-' + s5 + '-' + s6;
// };
// let str = 'abcdef';
// console.log(newStr(...str));

// let arr3 = [...str];
// let arNum = 123456;

// arr3 = [...String(arNum)];
// console.log(arr3);

// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// let finish = [];
// function merge(...arr) {
// console.log(arr); // выведет [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// let finish = [].concat(...arr);
// console.log(finish + 'woeiurwoeiruoweiur');

// };

// console.log(result); // выведет [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [7, 8, 9];

// let res = arr1.concat(arr2, arr3);
// console.log(res + '!!!!!!!!!!!!');

// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary ] = arr;

// console.log(name, surname);

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];
// // let salary     = arr[4];

// function func1() {
// 	return [2025, 12, 31];
// }

// let [year, month, day] = func1();

// function func2() {
// 	return ['John', 'Smit', 'development', 'programmer', 2000];
// }

// let [name, surname, department , position, salary] = func2();

// // let name       = arr[0];
// // let surname    = arr[1];
// // let department = arr[2];
// // let position   = arr[3];
// // let salary     = arr[4];
// console.log(department);
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];

// function func1() {
//   return ['John', 'Smit', 'development', 'programmer', 2000]
// };

// let [, , department, position, ,] = func1();

// console.log(position);
// console.log(func1());

// let department = arr[2];
// let position   = arr[3]

// let arr = [2015, 12, ];
// let [year, month, day = 1] = arr;
// console.log(year);
// console.log(day);

// let arr = ['John', 'Smit', 'development', ];
// let [name, surname, department, position = 'trainee'] = arr;

// console.log(name, department, position);
// let arr = [ , , ];

// function funcDay() {
//   return (new Date).getDate();
// };
// console.log(funcDay());

// function funcMonth() {
//   return (new Date).getMonth() + 1;
// };
// console.log(funcMonth());

// function funcYear() {
//   return (new Date).getFullYear();
// };
// console.log(funcYear());

// let [year = funcYear(), month = funcMonth(), day = funcDay()] = arr;

// console.log(year);
// console.log(month);
// console.log(day);

// let obj1 = {
// 	year:  2025,
// 	month: 12,
// 	day:   31,
// };

// let {year, month, day} = obj1;
// console.log(year);
// console.log(Object.keys(obj1)[0], year);

// console.log(String(Object.values(obj1)[2]))

// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {height: w = 400, color: c = 'green'} = options;

// console.log(w);

// let {color: c, width: w, height: h} = options;
// console.log(c);
// console.log(h);

// let {color,  width,  height} = options;
// // let color  = options.color;
// // let width  = options.width;
// // let height = options.height;

// console.log(color);

// let options = {

// 	width:  400,
// 	height: 500,
// };

// let {color: c = 'black', width: w, height: h} = options;
// console.log(options);
// console.log(w);
// console.log(h);
// console.log(c);

// let color;
// if (options.color !== undefined) {
// 	color = options.color;
// } else {
// 	color = 'black';
// }

// let width  = options.width;
// let height = options.height;

// let obj1 = {
// 	year:  2025,
// 	month: undefined,
// 	day:   31,
// };

// let year, month, day;
// ({year, month: m = 10, day} = obj1);
// console.log(year);
// console.log(m);

// function test(str2,[year1, month1, day1], [year2, month2, day2], str1) {
//   console.log(str2);

//   console.log(year1);
//   console.log(month1);
//   console.log(day1);

//   console.log(year2);
//   console.log(month2);
//   console.log(day2);

//   console.log(str1);
// };
// test('wow wow wow',[2025, 12, 31], [2030, 11, 30], 'bla bla bla');;

// function func(employee) {
// 	let name       = employee[0];
// 	let surname    = employee[1];
// 	let department = employee[2];
// 	let position   = employee[3];
// 	let salary     = employee[4];
// }
// function func1([name, surname, department, position, salary]) {
//   console.log(name);
//   console.log(surname);
//   console.log(department);
//   console.log(position);
//   console.log(salary);
// };
// func1( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func1([name, surname, info = 'defaultInfo', ...rest]) {
// console.log(name);
// console.log(surname);
// console.log(info);
// console.log(rest);
// }

// func1( ['John', 'Smit', 'development', 'programmer', 2000] );

// function func1(str, [name, surname], [year, month, date]) {
// 	console.log(year);
//   console.log(str);
//   console.log(name);
// }

// func1( 'development', ['John', 'Smit'], [2018, 12, 31] );

// function func1({color, width, height}) {
// 	console.log(color);
//   console.log(width);
//   console.log(height);
// }

// func1( {color: 'red', width: 400, height: 500} );

// function func1({color = 'black', width, height}) {

// 	console.log(color);
//   console.log(width);
//   console.log(height);

// };

// func1( {color: undefined, width: 400, height: 500} );

// let date = new Date();

// date.getFullYear();
// console.log(date.getUTCHours());
// console.log((date.getMonth() + 1));
// console.log(date.getDay());

// console.log(date.getFullYear()); // год
// console.log(date.getMonth());    // месяц
// console.log(date.getDate());     // день

// console.log(date.getHours());    // часы
// console.log(date.getMinutes());  // минуты
// console.log(date.getSeconds());  // секунды

// let date = new Date();

// console.log(
//   date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()
// );

// function addZero(num) {
//   if(num >= 0 && num <= 9) {
//     return '0' + num;
//   } else {
//     return num;
//   }
// };
// console.log(addZero(1));
// console.log(
//   addZero(date.getDate()) + "-" + addZero((date.getMonth() + 1)) + "-" + addZero(date.getFullYear()));

  // let str = '2025-12-31';
  // let newStr = str.split('-').reverse().join('/');
  // console.log(newStr);

  // let date = new Date();

  // console.log(date.getDate());
  // console.log(date.getDay());

  // let date = new Date();

  // let day = date.getDay();
  // console.log(day);

  // let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
  // let currentDay = days[day];
  // console.log(currentDay);

  // let month = date.getMonth();
  // console.log(month);

  // let monthYear =  [
  //   'янв', 'фев', 'мар', 'апр', 'май', 'июн',
  //   'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
  // ];

  // let currentMonth = monthYear[month];
  // console.log(currentMonth);



// let day = date.getDay();

// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

// let time = date.getTime();
// console.log(time);
// let date = new Date(2018, 0, 35);
// console.log(date); // получится 4 февраля



// function createDate(arr) {
//   return new Date(arr[0], arr[1], arr[2]);
// }

// let arr = [2020, 3, 0];
// let date = createDate(arr);

// console.log(date.getDate());

// let  func1 = () => {
//   console.log('!!!!!!!!!!!!!')
// };

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func1);

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func1);

// function func1() {
// 	console.log('message');
// };

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');

// elem1.addEventListener('click', func1);
// elem2.addEventListener('click', func1);
// elem3.addEventListener('click', func1);
// elem4.addEventListener('click', func1);
// elem5.addEventListener('click', func1);

// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// };

// let button = document.querySelector('#button');
// button.addEventListener('click', func1);
// button.addEventListener('click', func2);

// function func1() {
// 	console.log('1');
// };

// function func2() {
// 	console.log('2');
// };

// function func3() {
// 	console.log('3');
// };

// let article = document.querySelector('#elem');

// article.addEventListener('click', func1);
// article.addEventListener('click', func2);
// article.addEventListener('click', func3);

// let box = document.querySelector('#box');
// console.log(box);
// box.addEventListener('mouseover', test);
// box.addEventListener('mouseout', mouseOn);

// function test() {
//   alert('!!!!!');
// };

// function mouseOn() {
//   alert('UUUUUUUUUUUUUU')
// };

// box.addEventListener('mouseout', test);

// let text = document.querySelector('#elem');
// console.log(text.textContent);
// text.textContent = ('Дан абзац и кнопка. По клику на кнопку прочитайте текст абзаца и выведите его в консоль.')

// let button = document.querySelector('#button');
// console.log(button);
// let article = document.querySelector('#elem');
// console.log(article);
// button.addEventListener('dblclick', readText);
// function readText() {
// console.log(article.textContent);
// };

// button.addEventListener('click', changeText);
// function changeText() {
//   article.textContent = ('New text content from me');
// };

// article.addEventListener('click', changeText);

// let button = document.querySelector('#button');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document. querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// button.addEventListener('click', getSumm);

// function getSumm() {
//   // let summ = 0;
//   elem3.textContent = (Number(elem1.textContent) + Number(elem2.textContent));
// };

// Дан абзац с числом и кнопка. 
// По нажатию на кнопку прибавьте к значению 
// абзаца единицу и запишите полученное число обратно.

// let button = document.querySelector('#button');

// let elem1 = document.querySelector('#elem1');
// button.addEventListener('click' , test);

// function test() {
//   return elem1.textContent = (Number(elem1.textContent) + 1);
// };
/*
Дан абзац с текстом и кнопка. 
По нажатию на кнопку запишите в конец текста абзаца 
восклицательный знак.
*/

// let elem2 = document.querySelector('#elem2');

// button.addEventListener('dblclick', addSymb);
// let str = '!!!!!!!!!!!!!!!!!!';

// function addSymb(){
//   elem2.textContent = (elem2.textContent + str);
// };

// let elem1 = document.querySelector('#elem1');
// let button = document.querySelector('#button');
// button.addEventListener('click', test);
// function test() {
//   return elem1.innerHTML = `<i> ${elem1.textContent} <i>`;
// };

// let elem = document.querySelector('#elem');
// console.log(elem.id);
// console.log(elem.type);
// elem.id = 'submit';
// console.log(elem.id);

/*
  
<input id="elem" type="email">
Дана также кнопка. По нажатию на кнопку
выведите на экран содержимое атрибута type указанного выше инпута.
*/

// let button = document.querySelector('#button');

// let elem = document.querySelector('#elem');
// console.log(elem.type);

// button.addEventListener('click', test);


// function test() {
//  elem.type = 'submit';
//  console.log(elem.type);
// };


// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');

// console.log('Исходный тип элемента:', elem.type);

// button.addEventListener('click', test);

// function test(event) {
//     // Предотвращаем стандартное поведение кнопки submit (отправку формы)
//     event.preventDefault();

//     // Меняем тип элемента
//     elem.type = 'submit';

//     console.log('Тип элемента после изменения:', elem.type);
// };

/*
Пусть у вас есть ссылка в виде тега a, кнопка и абзац.
По нажатию на кнопку выведите в абзац содержимое атрибута
href ссылки.
*/

// let button = document.querySelector('#button');
// console.log(button);
// let href = document.querySelector('#myLink');
// console.log(href);
// let paragraf = document.querySelector('#outputParagraph');
// console.log(paragraf);

// button.addEventListener('click', test);
// function test() {
//   return paragraf.innerHTML = href.href;
// };

// // Получаем элемент ссылки по его идентификатору
// var linkElement = document.getElementById("myLink");

// // Получаем значение атрибута href
// var hrefValue = linkElement.getAttribute("href");
// console.log(hrefValue);

// // Выводим значение атрибута href в элемент абзаца
// document.getElementById("outputParagraph").innerText = "Содержимое атрибута href: " + hrefValue;

/*
Пусть у вас есть ссылка и кнопка. 
По нажатию на кнопку добавьте в конец текста 
ссылки содержимое ее атрибута href в круглых скобках.
*/

// let button = document.getElementById('button');
// console.log(button);
// let hrefValue = document.querySelector('#myLink')
// console.log(hrefValue);

// button.addEventListener('dblckick', test);

// function test() {
//   return hrefValue.textContent = 
// };

/*
Пусть у вас есть картинка. Разместите ее на странице с помощью тега img. 
Пусть даны также кнопка и абзац. Сделайте так, чтобы по клику на кнопку 
в абзац записался путь к картинки из ее атрибута src.
*/












