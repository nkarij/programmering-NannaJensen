class Student {
    constructor(name) {
        this.name = name;
        this.schoolclass = null;
    }

    allocateToSchoolClass(newschoolclass){
        this.schoolclass = newschoolclass;
        newschoolclass.students = this;
    }

}

