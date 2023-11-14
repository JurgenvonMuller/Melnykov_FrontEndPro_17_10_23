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

eval("/*\r\n\r\n ====================       ДЗ 18. Рекурсивне зведення в ступінь ========\r\n\r\nРеалізувати рекурсивну функцію, яка зводить число в ступінь.\r\n\r\nЧисло, яке треба піднести до ступеню, передається як перший аргумент у функції;\r\nСтупінь передається як другий аргумент у функціюpow (num, degree).\r\n*/\nvar goToExpo = function goToExpo(num, degree) {\n  if (degree === 0) {\n    return 1;\n  } else {\n    return num * goToExpo(num, degree - 1);\n  }\n};\nconsole.log(goToExpo(2, 3)); // 2 в степени 3  возвратит 8.\n\n//# sourceURL=webpack:///./src/js/script.js?");

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