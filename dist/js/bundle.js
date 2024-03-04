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

eval("// Создаем массив с разными смайликами\nvar emojis = [\"😄\", \"🙂\", \"😐\", \"😢\"];\n\n// Функция для создания смайликов\nfunction createPollOptions(numOptions) {\n  var optionsContainer = document.querySelector('.options');\n  var votesContainer = document.querySelector('.votes');\n  emojis.slice(0, numOptions).forEach(function (emoji, index) {\n    var option = document.createElement('div');\n    option.classList.add('emoji');\n    option.textContent = emoji;\n    option.addEventListener('click', function () {\n      return updateVotes(index);\n    });\n    optionsContainer.appendChild(option);\n    var count = document.createElement('div');\n    count.classList.add('count');\n    count.textContent = '0';\n    votesContainer.appendChild(count);\n  });\n}\n\n// Счетчик голосов \nfunction updateVotes(optionIndex) {\n  var countElements = document.querySelectorAll('.count');\n  var count = parseInt(countElements[optionIndex].textContent);\n  count++;\n  countElements[optionIndex].textContent = count;\n}\n// Запускаем программу с 4 вариантами ответов\ncreatePollOptions(4);\n\n//# sourceURL=webpack:///./src/js/script.js?");

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