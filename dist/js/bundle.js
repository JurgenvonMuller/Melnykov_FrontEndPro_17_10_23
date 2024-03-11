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

eval("// Список категорий и товаров\nvar data = {\n  categories: [{\n    id: 1,\n    name: \"Категория 1\"\n  }, {\n    id: 2,\n    name: \"Категория 2\"\n  }, {\n    id: 3,\n    name: \"Категория 3\"\n  }],\n  products: [{\n    id: 1,\n    categoryId: 1,\n    name: \"Товар 1\",\n    price: 100\n  }, {\n    id: 2,\n    categoryId: 1,\n    name: \"Товар 2\",\n    price: 200\n  }, {\n    id: 3,\n    categoryId: 2,\n    name: \"Товар 3\",\n    price: 150\n  }, {\n    id: 4,\n    categoryId: 3,\n    name: \"Товар 4\",\n    price: 120\n  }]\n};\n\n// Получаем ссылки на DOM-элементы\nvar categoriesContainer = document.querySelector(\".categories\");\nvar productsContainer = document.querySelector(\".products\");\nvar productInfoContainer = document.querySelector(\".product-info\");\n\n// Добавляем обработчик события click на документ\ndocument.addEventListener('click', function (event) {\n  // Если кликнут не категории, не товары и не блок с информацией о товаре\n  if (!event.target.closest('.categories') && !event.target.closest('.products') && !event.target.closest('.product-info')) {\n    // Скрываем блоки с категориями и товарами\n    categoriesContainer.style.display = 'block';\n    productsContainer.style.display = 'none';\n    productInfoContainer.style.display = 'none';\n  }\n});\n// Функция для отображения списка категорий\nfunction renderCategories() {\n  categoriesContainer.innerHTML = \"\";\n  data.categories.forEach(function (category) {\n    var categoryElement = document.createElement(\"div\");\n    categoryElement.classList.add(\"category\");\n    categoryElement.textContent = category.name;\n    categoryElement.addEventListener(\"click\", function () {\n      return renderProducts(category.id);\n    });\n    categoriesContainer.appendChild(categoryElement);\n  });\n  productsContainer.style.display = \"none\"; // скрываем список товаров\n  productInfoContainer.style.display = \"none\"; // скрываем блок с информацией о товаре\n}\n\n// Функция для отображения списка товаров выбранной категории\nfunction renderProducts(categoryId) {\n  productsContainer.innerHTML = \"\";\n  var products = data.products.filter(function (product) {\n    return product.categoryId === categoryId;\n  });\n  products.forEach(function (product) {\n    var productElement = document.createElement(\"div\");\n    productElement.classList.add(\"product\");\n    productElement.textContent = product.name;\n    productElement.addEventListener(\"click\", function () {\n      return renderProductInfo(product);\n    });\n    productsContainer.appendChild(productElement);\n  });\n  productsContainer.style.display = \"block\"; // показываем список товаров\n  productInfoContainer.style.display = \"none\"; // скрываем блок с информацией о товаре\n}\n\n// Функция для отображения информации о товаре\nfunction renderProductInfo(product) {\n  productInfoContainer.innerHTML = \"\";\n  var productInfo = document.createElement(\"div\");\n  productInfo.classList.add(\"product-info\");\n  productInfo.innerHTML = \"\\n      <h2></h2>\\n      <p>\\u0426\\u0435\\u043D\\u0430: \".concat(product.price, \"</p>\\n      <button class=\\\"buy-button\\\">\\u041A\\u0443\\u043F\\u0438\\u0442\\u044C</button>\\n  \");\n  productInfo.querySelector(\"h2\").textContent = product.name; // добавляем наименование товара\n  productInfoContainer.appendChild(productInfo);\n  productInfoContainer.style.display = \"block\"; // показываем блок с информацией о товаре\n\n  productInfo.querySelector(\".buy-button\").addEventListener(\"click\", function () {\n    alert(\"Товар куплен!\");\n  });\n}\n\n// Показываем список категорий при загрузке страницы\nrenderCategories();\n\n//# sourceURL=webpack:///./src/js/script.js?");

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