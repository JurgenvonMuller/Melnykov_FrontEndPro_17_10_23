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

eval("// Получаем ссылки на DOM-элементы\nvar slider = document.querySelector('.slider');\nvar imagesWrapper = slider.querySelector('.slider__images-wrapper');\nvar images = imagesWrapper.querySelectorAll('.slider__image');\nvar prevButton = slider.querySelector('.slider__arrow_prev');\nvar nextButton = slider.querySelector('.slider__arrow_next');\n\n// Текущий индекс изображения\nvar currentImageIndex = 0;\n\n// Количество изображений\nvar imagesCount = images.length;\n\n// Функция для отображения указанного изображения\nfunction showImage(index) {\n  // Если индекс выходит за пределы количества изображений, возвращаем false\n  if (index < 0 || index >= imagesCount) return false;\n\n  // Скрываем все изображения\n  images.forEach(function (image) {\n    image.style.display = 'none';\n  });\n\n  // Отображаем указанное изображение\n  images[index].style.display = 'block';\n\n  // Обновляем индекс текущего изображения\n  currentImageIndex = index;\n\n  // Возвращаем true\n  return true;\n}\n\n// Отображаем первое изображение\nshowImage(currentImageIndex);\n\n// Функция для перелистывания на следующее изображение\nfunction nextImage() {\n  // Перелистываем на следующее изображение\n  showImage(currentImageIndex + 1);\n}\n\n// Функция для перелистывания на предыдущее изображение\nfunction prevImage() {\n  // Перелистываем на предыдущее изображение\n  showImage(currentImageIndex - 1);\n}\n\n// Добавляем обработчики событий click на кнопки Next и Prev\nnextButton.addEventListener('click', nextImage);\nprevButton.addEventListener('click', prevImage);\n\n//# sourceURL=webpack:///./src/js/script.js?");

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