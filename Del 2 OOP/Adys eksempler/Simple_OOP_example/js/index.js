
// ================================================================
// Person 1

// Create an instance (an object) of the Person class
let p1 = new Person();

// Change the first and last name properties
p1.firstname = "Mickey";
p1.lastname = "Mouse";

let fullname = p1.getFullName();  // "Mickey Mouse"
console.log ("Person 1's full name: \n" + fullname);


// ================================================================
// Person 2

// Create an instance (an object) of the Person class
let p2 = new Person();

// Change the first and last name properties
p2.firstname = "Donald";
p2.lastname = "Duck";

fullname = p2.getFullName();  // "Donald Duck"
console.log ("Person 2's full name: \n" + fullname);