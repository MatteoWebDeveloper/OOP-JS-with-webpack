"use string";

// instanciate App
// dependencies
var MyClass = require("./myclass.js");
var SubClass = require("./subclass.js");

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
// Layer 4: Constructor inheritance

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