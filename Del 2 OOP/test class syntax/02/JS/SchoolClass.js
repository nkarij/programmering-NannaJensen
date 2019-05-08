
// man kalder i princippet constructoren, men med navnet fra class = new Person();
class SchoolClass {
    constructor(name, school, education) {
        this.education = education;
        this.school = school;
        this.name = name;
        // console.log(this.school.name);
        // console.log(this.school.schoolclasses);
        this.education.schoolclasses.push(this);
    }

}

