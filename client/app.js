"use string";

// dependencies
var MyClass = require('./myclass.js');
var SubClass = require('./subclass.js');
var ViewClass = require('./viewClass.js');

// initialise app
var instanceMyClass = new MyClass();
var instanceSubClass = new SubClass();
var view = new ViewClass();

var textMyClass = instanceMyClass.createGreating();
var textSubClass = instanceSubClass.createGreating();

view.createGreating(textMyClass);
view.createGreating(textSubClass);


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
