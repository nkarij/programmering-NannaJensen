
class Smartphone {
    constructor() {
        this.name = "";
        this.model = "";
        this.owner = null;
    }

    changeOwner(person){
        this.owner = person;
        person.smartphone = this;
    }
}