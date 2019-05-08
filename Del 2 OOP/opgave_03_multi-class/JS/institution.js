class Institution {
    constructor(name) {
        this.name = name;
        this.educations = [];
    }

    addEducation(neweducation) {
        let newEducation = neweducation;
        neweducation.institution = this;
        this.educations.push(newEducation);
    }

}

