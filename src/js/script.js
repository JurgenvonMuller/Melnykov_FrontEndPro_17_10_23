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


/*
class CityName {
  name;
  constructor(name) {
    this.name = name;
  }
};
class Users {
  userName;
  userSur;
  userAge;
  city;

  constructor(userName, userSur, userAge, city) {
    this.userName = userName;
    this.userSur = userSur;
    this.userAge = userAge;
    this.city = city;
  }
};

let city = new CityName ('London');

let user = new Users('Piter', 'Pan', 58, 'Kiev');
console.log(user.userName);

*/

console.log('food')
