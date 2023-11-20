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

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/*\r\n1. Створити сутність \"Людина\".\r\n\r\nВластивості:\r\nімʼя;\r\nвік.\r\nМетоди:\r\nконструктор, який приймає два параметри: імʼя та вік;\r\nметод, який виводить у консоль інформацію про людину.\r\n2. Створити сутність \"Автомобіль\".\r\n\r\nВластивості:\r\nмарка, модель, рік виписку, номерний знак (або на Ваш розсуд);\r\nвласник.\r\nМетоди:\r\nконструктор, який приймає чотитри параметри (тобто, всі окрім власника):\r\nмарка, модель, рік виписку, номерний знак \r\n\r\nприсвоїти власника - метод повинен приймати екземпляр класу Людина,\r\nта зберігати екземпляр класу Людина у відповідному полі, якщо вік \r\nбільше 18, інакше виводити у консоль відповідне повідомлення\r\n\r\n\r\nметод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника\r\nВ якості демонстраціїї створити:\r\n\r\nдекілька екземплярів класу Людина;\r\nдекілька екземплярів класу Автомобіль;\r\nприсвоїти власників автомобілям.\r\n\r\n*/\nvar Person = /*#__PURE__*/function () {\n  function Person(name, age) {\n    _classCallCheck(this, Person);\n    _defineProperty(this, \"name\", void 0);\n    _defineProperty(this, \"age\", void 0);\n    this.name = name;\n    this.age = age;\n  }\n  _createClass(Person, [{\n    key: \"personInfo\",\n    value: function personInfo() {\n      console.log(\"The name of person is \\\"\".concat(this.name, \"\\\" The Age of preson is \").concat(this.age, \" years.\"));\n    }\n  }]);\n  return Person;\n}();\nvar Car = /*#__PURE__*/function () {\n  function Car(type, model, productYear, carNr) {\n    _classCallCheck(this, Car);\n    this.type = type;\n    this.model = model;\n    this.productYear = productYear;\n    this.carNr = carNr;\n    this.owners = [];\n  }\n  _createClass(Car, [{\n    key: \"addOwnerOfCar\",\n    value: function addOwnerOfCar(owner) {\n      if (owner.age > 18) {\n        this.owners.push(owner);\n        return this.owners[this.owners.length - 1];\n      } else {\n        console.log(\"You are very young\");\n      }\n    }\n  }, {\n    key: \"carInfo\",\n    value: function carInfo() {\n      console.log(\"Car Info - Type: \".concat(this.type, \", Model: \").concat(this.model, \", Product Year: \").concat(this.productYear, \", Car Number: \").concat(this.carNr));\n      console.log(\"Owners:\");\n      this.owners.forEach(function (owner) {\n        console.log(\"Owner: \".concat(owner.name, \", Age: \").concat(owner.age));\n      });\n    }\n  }]);\n  return Car;\n}();\nvar newPerson = new Person(\"Bill\", 45);\nvar newPerson1 = new Person(\"Bob\", 10);\nvar newPerson2 = new Person(\"Nike\", 78);\nvar car = new Car(\"Sedan\", \"Toyota\", 2022, \"ABC123\");\nvar car1 = new Car(\"Sedan\", \"BMW\", 2021, \"BBC456\");\nvar car2 = new Car(\"Sedan\", \"KIA\", 2020, \"CBC562\");\nvar newOwner = car.addOwnerOfCar(newPerson);\nvar newOwner1 = car1.addOwnerOfCar(newPerson1);\nvar newOwner2 = car2.addOwnerOfCar(newPerson2);\nconsole.log(car.carInfo());\nconsole.log(car1.carInfo());\nconsole.log(car2.carInfo());\n\n//# sourceURL=webpack:///./src/js/script.js?");

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