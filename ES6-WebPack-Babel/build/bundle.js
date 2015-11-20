/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _Greeting = __webpack_require__(1);
	
	var _Greeting2 = _interopRequireDefault(_Greeting);
	
	var _DateTime = __webpack_require__(2);
	
	var _DateTime2 = _interopRequireDefault(_DateTime);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var h1 = document.querySelector('h1');
	h1.textContent = new _Greeting2.default();
	
	var h2 = document.querySelector('h2');
	h2.textContent = new _DateTime2.default();

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Greeting = (function () {
	  function Greeting() {
	    _classCallCheck(this, Greeting);
	  }
	
	  _createClass(Greeting, [{
	    key: 'toString',
	    value: function toString() {
	      return 'Hello visitor';
	    }
	  }]);
	
	  return Greeting;
	})();
	
	exports.default = Greeting;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	//import moment from 'moment';
	
	var DateTime = (function () {
	  function DateTime() {
	    _classCallCheck(this, DateTime);
	  }
	
	  _createClass(DateTime, [{
	    key: 'toString',
	    value: function toString() {
	      return 'The current date time is: ';
	    }
	  }]);
	
	  return DateTime;
	})();
	
	exports.default = DateTime;

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNzM2YmE1ZWM5YjVmNWZlNWUzYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL21haW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0dyZWV0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9EYXRlVGltZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7OztBQ3RDQSxhQUFZOzs7Ozs7Ozs7Ozs7QUFLWixLQUFJLEVBQUUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ3RDLEdBQUUsQ0FBQyxXQUFXLEdBQUcsd0JBQWMsQ0FBQzs7QUFFaEMsS0FBSSxFQUFFLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN0QyxHQUFFLENBQUMsV0FBVyxHQUFHLHdCQUFjLEM7Ozs7Ozs7Ozs7Ozs7Ozs7S0NUekIsUUFBUTtZQUFSLFFBQVE7MkJBQVIsUUFBUTs7O2dCQUFSLFFBQVE7O2dDQUNEO0FBQ1QsY0FBTyxlQUFlLENBQUM7TUFDeEI7OztVQUhHLFFBQVE7OzttQkFNQyxRQUFRLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztLQ0pqQixRQUFRO1lBQVIsUUFBUTsyQkFBUixRQUFROzs7Z0JBQVIsUUFBUTs7Z0NBQ0Q7QUFDVCxjQUFPLDRCQUE0QixDQUFDO01BQ3JDOzs7VUFIRyxRQUFROzs7bUJBTUMsUUFBUSxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNzM2YmE1ZWM5YjVmNWZlNWUzYTZcbiAqKi8iLCIndXNlIHN0cmljdCdcblxuaW1wb3J0IEdyZWV0aW5nIGZyb20gJy4vR3JlZXRpbmcuanMnO1xuaW1wb3J0IERhdGVUaW1lIGZyb20gJy4vRGF0ZVRpbWUuanMnO1xuIFxudmFyIGgxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaDEnKTtcbmgxLnRleHRDb250ZW50ID0gbmV3IEdyZWV0aW5nKCk7XG4gXG52YXIgaDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdoMicpO1xuaDIudGV4dENvbnRlbnQgPSBuZXcgRGF0ZVRpbWUoKTtcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9tYWluLmpzXG4gKiovIiwiY2xhc3MgR3JlZXRpbmcge1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ0hlbGxvIHZpc2l0b3InO1xuICB9XG59XG4gXG5leHBvcnQgZGVmYXVsdCBHcmVldGluZ1xuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0dyZWV0aW5nLmpzXG4gKiovIiwiLy9pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XG4gXG5jbGFzcyBEYXRlVGltZSB7XG4gIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnVGhlIGN1cnJlbnQgZGF0ZSB0aW1lIGlzOiAnO1xuICB9XG59XG4gXG5leHBvcnQgZGVmYXVsdCBEYXRlVGltZVxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0RhdGVUaW1lLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==