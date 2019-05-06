person1 = new Person();
// console.log(person2);
person1.firstname = "Musse";
person1.lastname = "Busse";
person1.age = "28"

// her kalder jeg getFullName, som er en function der logger fulde navn
let introduction = person1.introduceSelf();
// console.log(introduction);

person2 = new Person();
// console.log(person2);
person2.firstname = "Mickey";
person2.lastname = "Mouse";
person2.age = "5"

person1.friend = person2;
person2.friend = person1;

let greeting = person1.sayHiToPerson(person2);
console.log(greeting);
