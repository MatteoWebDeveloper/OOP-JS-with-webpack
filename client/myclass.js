"use string";

// MyClass Module
var Class = function (context) {
	this.nameClass = 'Class';                  // public property
	this.firstname = 'Paolo';
	this.lastname = 'Gandola';
}

Class.prototype.sayHello = function () {         // public method
	return ['Hi I am a', this.nameClass, this.firstname, this.lastname].join(' ');
}

Class.prototype.saySpecialThank = function () {  // public method
	return 'Thank you';
}

Class.prototype.sayBye = function () {           // public method
	return 'See you later';
}

module.exports = Class;
