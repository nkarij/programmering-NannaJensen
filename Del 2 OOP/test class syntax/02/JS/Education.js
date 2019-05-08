class Education {
    constructor(name, school) {
        this.name = name;
        this.school = school;
        this.schoolclasses = [];
        this.school.educations.push(this);
    }        
}