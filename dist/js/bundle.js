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

eval("/*Вивести таблицю 10 × 10, заповнену числами від 1 до 100 \r\n(таблиця створюється динамічно)\r\n*/\n\n// Получаем ссылку на контейнер, в котором будет наша таблица\nvar tableContainer = document.getElementById(\"table-container\");\n\n// Создаем элемент таблицы и заполняем ее\nvar tableHTML = \"<table>\";\nfor (var i = 1; i <= 10; i++) {\n  tableHTML += \"<tr>\";\n  for (var j = 1; j <= 10; j++) {\n    var cellValue = (i - 1) * 10 + j;\n    tableHTML += \"<td>\" + cellValue + \"</td>\";\n  }\n  tableHTML += \"</tr>\";\n}\ntableHTML += \"</table>\";\ntableContainer.innerHTML = tableHTML;\n\n// // Получаем ссылку на контейнер, в котором будет наша таблица\n// let tableContainer = document.getElementById(\"table-container\");\n\n// // Создаем элемент таблицы\n// let table = document.createElement(\"table\");\n\n// // Заполняем таблицу\n// for (let i = 1; i <= 10; i++) {\n//   // Создаем строку таблицы\n//   let row = document.createElement(\"tr\");\n\n//   for (let j = 1; j <= 10; j++) {\n//     // Создаем ячейку таблицы\n//     let cell = document.createElement(\"td\");\n\n//     // Вычисляем значение ячейки\n//     let cellValue = (i - 1) * 10 + j;\n\n//     // Создаем текстовый узел с числом и добавляем его в ячейку\n//     let cellText = document.createTextNode(cellValue);\n//     cell.appendChild(cellText);\n\n//     // Добавляем ячейку в строку\n//     row.appendChild(cell);\n//   }\n\n//   // Добавляем строку в таблицу\n//   table.appendChild(row);\n// }\n\n// // Добавляем таблицу в контейнер\n// tableContainer.appendChild(table);\n\n//# sourceURL=webpack:///./src/js/script.js?");

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