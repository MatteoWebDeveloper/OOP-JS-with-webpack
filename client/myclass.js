"use string";

// MyClass Module
var Class = function (context) {
	this.nameClass = 'MyClass';               // public property
	this.firstname = 'Paolo';
	this.lastname = 'Gandola';
}

Class.prototype.init = function () {
	this.initVlaue = 'add';
}

Class.prototype.createGreating = function () { // public method
	return 'Hi I am a ' + this.nameClass + ' ' + this.firstname + ' ' + this.lastname;
}

module.exports = Class;
