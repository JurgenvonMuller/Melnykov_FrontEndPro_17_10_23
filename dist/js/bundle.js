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

eval("/*Є текстове поле на сторінці. Під час фокусування на цьому полі збоку\r\n з'являється <div>. При пропажі фокусу - <div> так само пропадає\r\n */\n\n// Получаем ссылки на элементы DOM\nvar inputField = document.getElementById(\"myInput\");\nvar myDiv = document.getElementById(\"myDiv\");\n\n// Добавляем обработчик события для фокуса на текстовом поле\ninputField.addEventListener(\"focus\", function () {\n  myDiv.style.display = \"block\";\n});\n\n// Добавляем обработчик события для потери фокуса текстовым полем\ninputField.addEventListener(\"blur\", function () {\n  myDiv.style.display = \"none\";\n});\n\n// class A {\n//   variableA;\n\n//   read() {\n//     console.log(`I am a method READ in obj A`);\n//   }\n// }\n\n// class B extends A {\n//   variableB;\n\n//   close() {\n//     console.log(`I am a method CLOSE in obj B`);\n//   }\n// }\n\n// let instanceB = new B();\n\n// console.log(\"read\" in instanceB);\n// console.log(\"close\" in instanceB);\n\n// console.log(instanceB.hasOwnProperty(\"read\"));\n// console.log(instanceB.hasOwnProperty(\"close\"));\n\n// const keys = Object.keys(instanceB);\n\n// console.log(keys);\n\n//# sourceURL=webpack:///./src/js/script.js?");

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