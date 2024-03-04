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

eval("/*\r\nУ папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим \r\nчином (Math.random)\r\n*/\n\n// Создаем массив с названиями изображений\nvar imageNames = [\"1.jpg\", \"2.jpg\", \"3.jpg\", \"4.jpg\", \"5.jpg\", \"6.jpg\", \"7.jpg\", \"8.jpg\", \"9.jpg\"];\n\n// Получаем ссылку на изображение по его id\nvar randomImage = document.getElementById(\"randomImage\");\n\n// Генерируем случайный индекс для выбора изображения из массива\nvar randomIndex = Math.floor(Math.random() * imageNames.length);\n\n// Получаем случайное изображение из массива\nvar randomImageName = imageNames[randomIndex];\n\n// Формируем путь к изображению\nvar imagePath = \"images/\" + randomImageName;\n\n// Устанавливаем путь к случайному изображению в атрибут src тега img\nrandomImage.src = imagePath;\n\n//# sourceURL=webpack://homework1git_github/./src/js/script.js?");

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