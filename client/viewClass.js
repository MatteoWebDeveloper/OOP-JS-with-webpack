"use string";

// dependencies
require("./styles.less");

// ViewClass Module
var Class = function () {}

Class.prototype.createGreating = function (pText) {
	// append elm
	var DOMp = document.createElement("p");
	var DOMtext = document.createTextNode(pText);

	DOMp.appendChild(DOMtext);
	document.body.appendChild(DOMp);
}

module.exports = Class;