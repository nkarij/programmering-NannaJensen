
// man kalder i princippet constructoren, men med navnet fra class = new Person();
class School {
    constructor(name) {
        this.name = name;
        this.educations = [];
        this.educationObject = Education;
        console.log(this.educationObject);
        this.schoolClassObject = SchoolClass;
    }

    addNewEducation() {
        let SchoolClassName = "TR1";
        // this.educationObject.name = "Tømrer"
        this.educationObject.schoolclasses.push(SchoolClassName);
        // console.log(this.educations);
    }
}

