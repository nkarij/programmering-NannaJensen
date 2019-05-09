class Education {
    constructor(name) {
        this.name = name;
        this.institution = null;
        this.schoolclasses = [];
    }

    // createEducation(name){
    //     new Education(name);
    // }

    allocateToInstitution(newinstitution){
        this.institution = newinstitution;
        newinstitution.educations.push(this);
    }

    addSchoolClass(newschoolclass) {
        let schoolClass = newschoolclass;
        this.schoolclasses.push(schoolClass);
        newschoolclass.education = this;
    }

    removeSchoolClass(schoolclass) {
        this.schoolclasses.forEach(schoolc => {
            if(schoolc == schoolclass) {
                this.schoolclasses.splice(this.schoolclasses.indexOf(schoolc), 1);
                return this.schoolclasses;
            } else {
                console.log("skoleklassen findes ikke");
                return;
            }
        })
    }
}