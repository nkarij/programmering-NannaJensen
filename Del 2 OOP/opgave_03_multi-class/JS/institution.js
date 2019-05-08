class Institution {
    constructor(name) {
        // name skal ikke være hardcoded til sidst, men passes.
        this.name = name;
        // behøver jeg denne property? Skal den oprettes under addEducation?
        // this.education = null;
        this.educations = [];
    }

    addEducation(neweducation) {
        // this.education = neweducation;
        let newEducation = neweducation;
        neweducation.institution = this;
        this.educations.push(newEducation);
    }

}

