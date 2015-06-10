"use string";

// MyClass Module
var Class = function (context) {
	this.nameClass = 'MyClass';

	this.firstname = 'Paolo';
	this.lastname = 'Gandola';
}

Class.prototype.init = function () {}

Class.prototype.createGreating = function () { // public method
	return 'Hi I am a ' + this.nameClass + ' ' + this.firstname + ' ' + this.lastname;
}

module.exports = Class;
