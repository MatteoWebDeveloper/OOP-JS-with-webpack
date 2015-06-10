"use string";

// SubClass module
// dependencies
var MyClass = require("./myclass.js");

// Class
var _private = { value: '1'};

var Class = function (context) {
	MyClass.call(this, context);                    // call super constructor.
	this.firstname = 'Matteo';                      // public property
}

Class.prototype = Object.create(MyClass.prototype); // inheritance
Class.prototype.constructor = Class;                // point to constructor

Class.prototype.init = function () {                // public method
	MyClass.prototype.init.call(this);

	return _private;
}

module.exports = Class;