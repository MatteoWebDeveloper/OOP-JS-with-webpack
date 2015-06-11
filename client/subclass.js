"use string";

// Dependencies
var MyClass = require("./myclass.js");

// SubClass module
var Class = function (context) {

	MyClass.call(this, context);                    // call super constructor

	this.nameClass = 'SubClass';                    // public property overwritten
	this.firstname = 'Matteo';
}

Class.prototype = Object.create(MyClass.prototype); // inheritance
Class.prototype.constructor = Class;                // point to constructor

Class.prototype.init = function () {                // public method
	MyClass.prototype.init.call(this);              // overwritten partially
}

module.exports = Class;
