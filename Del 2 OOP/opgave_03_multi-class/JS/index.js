
// -----------------------------------------------

let institution1 = new Institution("RTS");
let education2 = new Education("Tømrer");
let schoolClass1 = new Schoolclass("Tømrer Klasse 1");
let student1 = new Student("Bamse");
let student2 = new Student("Kylling");
// console.log(student2);

student1.allocateToSchoolClass(schoolClass1);
console.log(schoolClass1.students);
schoolClass1.addStudents([student1, student2]);
console.log(schoolClass1.students);
schoolClass1.allocateToEducation(education2);
console.log(education2.schoolclasses);
education2.allocateToInstitution(institution1);
console.log(institution1.educations);
console.log(institution1);


// education2.addSchoolClass(schoolClass1);
// console.log(education2.schoolclasses);



