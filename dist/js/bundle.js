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

eval("function _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/*\r\n1. Створити клас Людина.\r\n\r\nВластивості:\r\nімʼя;\r\nстать.\r\nМетоди:\r\nконструктор, який приймає два параметри: імʼя та стать.\r\n2. Створити клас Квартира.\r\n\r\nВластивості:\r\nконструктор не потрібен;\r\nмасив жителів, який при створенні пустий.\r\nМетоди:\r\nдодати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.\r\n3. Створити клас Будинок.\r\n\r\nВластивості:\r\nмасив квартир, який при створенні пустий;\r\nмаксимальна кількість квартир.\r\nМетоди:\r\nконструктор, який приймає один параметр: максимальну кількість квартир;\r\nдодати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, \r\nчи не буде кількість перевищувати максимальну кількість \r\nквартир, і якщо це так, додати квартиру, \r\nв іншому випадку виводить у консоль відповідне повідомлення.\r\nВ якості демонстраціїї створити:\r\n\r\nдекілька екземплярів класу Людина;\r\nдекілька екземплярів класу Квартира;\r\nдодадити екземпляри класу Людина до екземплярів класу Квартира;\r\nекземпляр класу Будинок;\r\nдодадити екземпляри класу Квартира до екземплярів класу Будинок.\r\n\r\n*/\nvar Persons = /*#__PURE__*/_createClass(function Persons(name, gender) {\n  _classCallCheck(this, Persons);\n  _defineProperty(this, \"name\", void 0);\n  _defineProperty(this, \"gender\", void 0);\n  this.name = name;\n  this.gender = gender;\n});\n;\nvar Flat = /*#__PURE__*/function () {\n  function Flat() {\n    _classCallCheck(this, Flat);\n    _defineProperty(this, \"peopleInFlat\", []);\n    _defineProperty(this, \"maxPeopleInFlat\", 2);\n  }\n  _createClass(Flat, [{\n    key: \"addPerson\",\n    value: function addPerson(person) {\n      if (this.peopleInFlat.length < this.maxPeopleInFlat) {\n        this.peopleInFlat.push(person);\n      } else {\n        console.log('This flat is full. Next person will go to next flat', '');\n        this.createNewFlat().addPerson();\n      }\n      return this;\n    }\n  }, {\n    key: \"createNewFlat\",\n    value: function createNewFlat() {\n      return new Flat();\n    }\n  }]);\n  return Flat;\n}();\n;\nvar House = /*#__PURE__*/function () {\n  // Ограничение в 3 квартиры создан пустой массив 30 мест))\n  function House(flat) {\n    _classCallCheck(this, House);\n    _defineProperty(this, \"flats\", new Array(3));\n    this.flat = flat;\n  }\n  _createClass(House, [{\n    key: \"addFlat\",\n    value: function addFlat(flat) {\n      this.flats.push(flat);\n    }\n  }]);\n  return House;\n}();\n;\nvar person1 = new Persons('Heinrich', 'male');\nvar person2 = new Persons('Mikki', 'female');\nvar person3 = new Persons('Billy', 'male');\nvar person4 = new Persons('Lily', 'female');\nconsole.log(person4.name);\nvar flat = new Flat();\n\n// let flat3  = new Flat();\n\nflat.addPerson(person1).addPerson(person2).addPerson(person3);\nconsole.log(flat.peopleInFlat);\n\n//# sourceURL=webpack:///./src/js/script.js?");

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