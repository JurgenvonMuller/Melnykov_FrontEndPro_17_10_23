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

eval("/*\r\nУ вас є\r\nмасив із 10 кольорів\r\nconst colors = ['color-1', 'color-2', ..., 'color-10'];\r\nмасив юзерів (об\"єкт із властивостями name та color)\r\nconst users = [\r\n\t{name: 'Slava', color: 'color-4'},\r\n\t{name: 'Lena', color: 'color-7'},\r\n];\r\nВам треба реалізувати функцію addUser, яка буде приймати ім\"я \r\nяк аргумент та записувати нового юзера в масив\r\nЄдина умова - колір кожного юзера має бути вибраним із \r\nмасиву кольорів та має бути унікальним в межах користувачів масиву\r\nНаприклад color-4 та color-7 вже зайняті і новим користувачам \r\nне можуть бути додані\r\n*/\n\nvar colors = ['color-1', 'color-2', 'color-3', 'color-4', 'color-5', 'color-6', 'color-7', 'color-8', 'color-9', 'color-10'];\nvar users = [{\n  name: 'Slava',\n  color: 'color-4'\n}, {\n  name: 'Lena',\n  color: 'color-7'\n}];\nfunction addUser(name) {\n  // Перевіряємо, чи ім'я користувача не порожнє\n  if (!name.trim()) {\n    console.log('Ім\\'я користувача не може бути порожнім.');\n    return;\n  }\n\n  // Вибираємо доступні кольори (кольори, які не зайняті іншими користувачами)\n  var availableColors = colors.filter(function (color) {\n    return !users.some(function (user) {\n      return user.color === color;\n    });\n  });\n\n  // Перевіряємо, чи є доступні кольори для нового користувача\n  if (availableColors.length === 0) {\n    console.log('Немає доступних кольорів для нового користувача.');\n    return;\n  }\n\n  // Вибираємо перший доступний колір для нового користувача\n  var selectedColor = availableColors[0];\n\n  // Додаємо нового користувача до масиву users\n  users.push({\n    name: name,\n    color: selectedColor\n  });\n  console.log(\"\\u041A\\u043E\\u0440\\u0438\\u0441\\u0442\\u0443\\u0432\\u0430\\u0447 \".concat(name, \" \\u0443\\u0441\\u043F\\u0456\\u0448\\u043D\\u043E \\u0434\\u043E\\u0434\\u0430\\u043D\\u0438\\u0439 \\u0437 \\u043A\\u043E\\u043B\\u0456\\u0440\\u043E\\u043C \").concat(selectedColor, \".\"));\n}\n\n// Приклад виклику функції\naddUser('John');\nconsole.log(users);\naddUser('Mary');\nconsole.log(users);\naddUser('Bob');\nconsole.log(users);\naddUser('Mike');\nconsole.log(users);\n\n//# sourceURL=webpack:///./src/js/script.js?");

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