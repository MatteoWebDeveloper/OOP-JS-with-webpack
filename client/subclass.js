"use string";

// Dependencies
var MyClass = require("./myclass.js");

// SubClass module
var Class = function (context) {
	var _super = MyClass.call(this, context);       // call super constructor

	this.nameClass = 'SubClass';                    // public property overwritten
	this.firstname = 'Matteo';
}

Class.prototype = Object.create(MyClass.prototype); // inheritance
Class.prototype.constructor = Class;                // point to constructor

// Class.prototype.sayHello = function () {         // inherit public method
// 	return ['Hi I am', this.nameClass, this.firstname, this.lastname].join(' ');
// }

Class.prototype.saySpecialThank = function () {     // shadow public method
	var _super = MyClass.prototype.saySpecialThank.call(this); // call super method
	return [_super, 'is partialy overwritten by', this.nameClass].join(' ');
}

Class.prototype.sayBye = function () {              // overwrite public method
	return 'See you tomorrow';
}


Class.prototype.sayWhoYouAre = function () {        // new public method
	return ['I am', this.firstname].join(' ');
}

module.exports = Class;
