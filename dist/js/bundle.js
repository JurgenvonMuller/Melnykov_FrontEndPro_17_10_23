/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/***/ (() => {

eval("/*  ================ДОМАШКА 19 ======================\r\nНаписати функцію, яка приймає 1 параметр. з тим, що передали перший \r\nраз і т. д. Все це із замиканнями, наприклад:\r\nsum(3) = 3 \r\nsum(5) = 8\r\nsum(20) = 28\r\n*/\n\n// ============= ЗАМЫКАНИЕ С ГЛОБАЛЬНОЙ ПЕРЕМЕННОЙ +===================\n\n// let number = 0;  Перенесено вовнутрь функции \n\nvar countAdd = function countAdd() {\n  var number = 0;\n  return function (num) {\n    number += num;\n    return number;\n  };\n};\nvar sum = countAdd();\nconsole.log(sum(3)); // возвращает число  3.    \n\nconsole.log(sum(5)); // возвращает число  8.   \n\nconsole.log(sum(20)); // возвращает число 28.\n\n// Замыкание позволяет менять значение глобальной переменной number.\n\n// ЭТО ДЛЯ РАСШИРЕНИЯ КРУГОЗОРА ==========================================\n// =====================ЗАМЫКАНИЕ С ВНУТРЕННИМИ ПЕРЕМЕННЫМИ (КАРРИРОВАНИЕ)==================\n\nfunction curryAdd(num1) {\n  return function (num2) {\n    return function (num3) {\n      return num1 + num2 + num3;\n    };\n  };\n}\n;\nvar curryAddResult = curryAdd(3)(5)(20);\nconsole.log(curryAddResult); // выведет 28 \n\n// переменные ЗАМКНУТЫ В ФУНКЦИЯХ и недоступны снаружи \n\n// console.log(num1) num2, num3 - выдаст ошибку!!!!!!!!!!\n\n//но результат их работы может быть доступен \n// снаружи  в переменной ===   curryAddResult  ===== и результат может \n//быть разный в зависимости от параметров переданных в функцию.\n//присвоен разным переменным  для дальнейшего использования\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/script.js"]();
/******/ 	
/******/ })()
;