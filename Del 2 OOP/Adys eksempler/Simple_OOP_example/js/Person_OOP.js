// DISCLAIMER: This is NOT good practice, yet. Baby steps.


// The purpose of a "class" is to define which properties and methods future objects (instances) of the class will acquire.
// In other words: What data (properties) can be stored about the object and which actions (methods) can the object perform.

class Person {

	// The Constructor is a special method which is invoked automatically when the "new" keyword is used (see "index.js")
	constructor() {
		// Properties
		this.firstname = "John";
		this.lastname = "Doe";
	}

	// A method that returns a combination of the first and last name, separated by a space
	getFullName() {
		return this.firstname + " " + this.lastname;
	}
}

// Open the "index.js" file to see how the Person class is used.
