/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/task1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/task1.js":
/*!*************************!*\
  !*** ./src/js/task1.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function show(data) {\r\n    console.log(data);\r\n}\r\nfunction Person(name,age){\r\n\r\n    this.name = name;\r\n    this.age = age;\r\n}\r\nPerson.prototype.setName = function(name){\r\nthis.name = name;\r\n};\r\nPerson.prototype.getName = function(){\r\n    return name;\r\n};\r\nPerson.prototype.setAge = function(age){\r\n    this.age = age;\r\n};\r\nPerson.prototype.getAge = function(){\r\n    return age;\r\n};\r\nlet Vladislav = new Person( \"Vladislav\", 17);\r\nlet Johanna = new Person( \"Johanna\",  18);\r\nlet Eugenie = new Person( \"Eugenie\",  36);\r\nlet Andrey = new Person(\"Andrey\",19);\r\nlet Anna = new Person(\"Anna\", 45);\r\n\r\n\r\nlet myMap = new Map;\r\nvar user = {};\r\nmyMap.set(1,Vladislav);\r\nmyMap.set(2,Johanna);\r\nmyMap.set(3,Eugenie);\r\nmyMap.set(4,Andrey);\r\nmyMap.set(5,Anna);\r\n// myMap.forEach(function(value, key) {\r\n//     console.log(key , value);\r\n// });\r\n// for (var i = 0; i < myMap.size; i++){\r\n//\r\n// }\r\nfunction getResult() {\r\n    var myMap = new Map();\r\n     myMap.forEach(function(value, key) {\r\n     show(key,value);\r\n });\r\n}\n\n//# sourceURL=webpack:///./src/js/task1.js?");

/***/ })

/******/ });