
class Person {
    constructor() {
        this.name = "";
        this.smartphone = null;
    }

    changePhone(phone) {
        this.smartphone = phone;
        phone.owner = this;
    }
}

