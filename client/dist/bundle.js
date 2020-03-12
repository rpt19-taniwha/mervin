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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/App.jsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/App.jsx":
/*!****************************!*\
  !*** ./client/src/App.jsx ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_Category_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/Category.jsx */ \"./client/src/components/Category.jsx\");\n/* harmony import */ var _components_Review_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Review.jsx */ \"./client/src/components/Review.jsx\");\n/* harmony import */ var _components_Price_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Price.jsx */ \"./client/src/components/Price.jsx\");\n/* harmony import */ var _components_Name_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Name.jsx */ \"./client/src/components/Name.jsx\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App = /*#__PURE__*/function (_React$Component) {\n  _inherits(App, _React$Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", null, React.createElement(\"div\", null, \"APP\"), React.createElement(_components_Category_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), React.createElement(_components_Review_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], null), React.createElement(_components_Name_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], null), React.createElement(_components_Price_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n  }]);\n\n  return App;\n}(React.Component);\n\nReactDOM.render(React.createElement(App, null), document.getElementById('product-service'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL0FwcC5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL0FwcC5qc3g/ZDk4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0ZWdvcnkgZnJvbSAnLi9jb21wb25lbnRzL0NhdGVnb3J5LmpzeCdcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9jb21wb25lbnRzL1Jldmlldy5qc3gnXG5pbXBvcnQgUHJpY2UgZnJvbSAnLi9jb21wb25lbnRzL1ByaWNlLmpzeCdcbmltcG9ydCBOYW1lIGZyb20gJy4vY29tcG9uZW50cy9OYW1lLmpzeCdcblxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj5BUFA8L2Rpdj5cbiAgICAgICAgPENhdGVnb3J5Lz5cbiAgICAgICAgPFJldmlldy8+XG4gICAgICAgIDxOYW1lLz5cbiAgICAgICAgPFByaWNlLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5SZWFjdERPTS5yZW5kZXIoPEFwcC8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1zZXJ2aWNlJykpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBU0E7Ozs7QUFmQTtBQUNBO0FBaUJBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./client/src/App.jsx\n");

/***/ }),

/***/ "./client/src/components/Category.jsx":
/*!********************************************!*\
  !*** ./client/src/components/Category.jsx ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Category = /*#__PURE__*/function (_React$Component) {\n  _inherits(Category, _React$Component);\n\n  function Category() {\n    _classCallCheck(this, Category);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Category).call(this));\n  }\n\n  _createClass(Category, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"category-component\"\n      }, \"MultiverseBooks\");\n    }\n  }]);\n\n  return Category;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Category);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvQ2F0ZWdvcnkuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL0NhdGVnb3J5LmpzeD8yMTQwIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIENhdGVnb3J5IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXRlZ29yeS1jb21wb25lbnRcIj5cbiAgICAgICAgTXVsdGl2ZXJzZUJvb2tzXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2F0ZWdvcnk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTs7OztBQVhBO0FBQ0E7QUFhQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Category.jsx\n");

/***/ }),

/***/ "./client/src/components/Name.jsx":
/*!****************************************!*\
  !*** ./client/src/components/Name.jsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Name = /*#__PURE__*/function (_React$Component) {\n  _inherits(Name, _React$Component);\n\n  function Name() {\n    _classCallCheck(this, Name);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Name).call(this));\n  }\n\n  _createClass(Name, [{\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"name-component\"\n      }, \"Pok\\xE9Natomy: The Science of Pok\\xE9mon (An Unofficial Guide)\");\n    }\n  }]);\n\n  return Name;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Name);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTmFtZS5qc3guanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvTmFtZS5qc3g/MzdkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBOYW1lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYW1lLWNvbXBvbmVudFwiPlxuICAgICAgICBQb2vDqU5hdG9teTogVGhlIFNjaWVuY2Ugb2YgUG9rw6ltb24gKEFuIFVub2ZmaWNpYWwgR3VpZGUpXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmFtZTtcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFJQTs7OztBQVhBO0FBQ0E7QUFhQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Name.jsx\n");

/***/ }),

/***/ "./client/src/components/Price.jsx":
/*!*****************************************!*\
  !*** ./client/src/components/Price.jsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Price = /*#__PURE__*/function (_React$Component) {\n  _inherits(Price, _React$Component);\n\n  function Price() {\n    _classCallCheck(this, Price);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Price).call(this));\n  }\n\n  _createClass(Price, [{\n    key: \"randomPrice\",\n    value: function randomPrice() {\n      var price = (Math.random() * 300).toFixed(2);\n      return React.createElement(\"div\", {\n        className: \"price-amount\"\n      }, \"$\".concat(price, \"+\"));\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      return React.createElement(\"div\", {\n        className: \"price-component\"\n      }, this.randomPrice());\n    }\n  }]);\n\n  return Price;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Price);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUHJpY2UuanN4LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY2xpZW50L3NyYy9jb21wb25lbnRzL1ByaWNlLmpzeD81YTRkIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIFByaWNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJhbmRvbVByaWNlKCkge1xuICAgIHZhciBwcmljZSA9IChNYXRoLnJhbmRvbSgpICogMzAwKS50b0ZpeGVkKDIpO1xuICAgIHJldHVybiAoPGRpdiBjbGFzc05hbWU9XCJwcmljZS1hbW91bnRcIj57YCQke3ByaWNlfStgfTwvZGl2PilcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcmljZS1jb21wb25lbnRcIj5cbiAgICAgICAge3RoaXMucmFuZG9tUHJpY2UoKX1cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljZTtcblxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFDQTs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBOzs7O0FBaEJBO0FBQ0E7QUFrQkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./client/src/components/Price.jsx\n");

/***/ }),

/***/ "./client/src/components/Review.jsx":
/*!******************************************!*\
  !*** ./client/src/components/Review.jsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar Review = /*#__PURE__*/function (_React$Component) {\n  _inherits(Review, _React$Component);\n\n  function Review() {\n    _classCallCheck(this, Review);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(Review).call(this));\n  }\n\n  _createClass(Review, [{\n    key: \"render\",\n    value: function render() {\n      return (// Placeholder for Iris's Review Service\n        React.createElement(\"div\", {\n          className: \"review-container\"\n        }, \"\\u2B50\\u2B50\\u2B50\\u2B50\\u2B50\")\n      );\n    }\n  }]);\n\n  return Review;\n}(React.Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Review);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jbGllbnQvc3JjL2NvbXBvbmVudHMvUmV2aWV3LmpzeC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2NsaWVudC9zcmMvY29tcG9uZW50cy9SZXZpZXcuanN4PzY2ZDAiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUmV2aWV3IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgLy8gUGxhY2Vob2xkZXIgZm9yIElyaXMncyBSZXZpZXcgU2VydmljZVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZXZpZXctY29udGFpbmVyXCI+XG4gICAgICAgIOKtkOKtkOKtkOKtkOKtkFxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJldmlldzsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBOzs7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFNQTs7OztBQVpBO0FBQ0E7QUFjQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./client/src/components/Review.jsx\n");

/***/ })

/******/ });