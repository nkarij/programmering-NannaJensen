class Education {
    constructor(name) {
        this.name = name;
        this.institution = null;
        this.schoolclasses = [];
    }

    allocateToInstitution(newinstitution){
        this.institution = newinstitution;
        newinstitution.educations.push(this);
    }

    addSchoolClass(newschoolclass) {
        let schoolClass = newschoolclass;
        this.schoolclasses.push(schoolClass);
        newschoolclass.education = this;
    }
}