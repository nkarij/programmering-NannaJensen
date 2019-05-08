let person1 = new Person();
console.log(person1)

let person2 = new Person();

let smartPhone1 = new Smartphone();
smartPhone1.model = "Android"

person1.changePhone(smartPhone1);
console.log(person1.smartphone);
