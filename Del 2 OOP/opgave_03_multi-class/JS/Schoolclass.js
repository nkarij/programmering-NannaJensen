class Schoolclass {
    constructor(name) {
        this.name = name;
        this.education = null;
        this.students = [];
    }

    allocateToEducation(neweducation){
        this.education = neweducation;
        neweducation.schoolclasses.push(this);
    }

    addStudent(newstudent){
        let student = newstudent;
        this.students.push(student);
    }

    addStudents(newstudents) {
        let students = newstudents;
        this.students = students.concat(this.students);
    }

}