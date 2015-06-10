/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use string";

	// instanciate App
	// dependencies
	var MyClass = __webpack_require__(1);
	var SubClass = __webpack_require__(2);

	// initialise app
	var instance = new SubClass('context');

	var privateObject = instance.init();

	document.write('Hi', instance.firstname, instance.lastname, privateObject.value);


	var instanceTwo = new SubClass('contextTwo');
	var infoTwo = instance.init();

	document.write('Hi', instance.firstname, instance.lastname, privateObject.value);


	// Layer 1: Single Object
	// Layer 2: Prototype chain
	// Layer 3: Constructor
	// Layer 4: Constructor inheirtance

	/* OOP Principles

	*/

	/* SOLID Principles

	* Single responsibility
		a class should have only a single responsibility (i.e. only one potential change in the software's specification should be able to affect the specification of the class)

	* Open/closed
		software entities … should be open for extension, but closed for modification.

	* Liskov substitution
		objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program

	* Interface segregation
		many client-specific interfaces are better than one general-purpose interface
		
	* Dependency inversion
		Depend upon Abstractions. Do not depend upon concretions
	*/

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use string";

	// MyClass Module
	var Class = function (context) {
		this.firstname = 'Paolo';
		this.lastname = 'Gandola';
	}

	Class.prototype.init = function () {
	}

	module.exports = Class;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use string";

	// SubClass module
	// dependencies
	var MyClass = __webpack_require__(1);

	// Class
	var _private = { value: '1'};
	var Class = function (context) {
		MyClass.call(this, context); // call super constructor.
		this.firstname = 'Matteo';
	}
	Class.prototype = Object.create(MyClass.prototype);
	Class.prototype.constructor = Class;

	Class.prototype.init = function () {
		MyClass.prototype.init.call(this);

		return _private;
	}

	module.exports = Class;

/***/ }
/******/ ]);