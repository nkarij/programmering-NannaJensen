
// class' en er den man kalder
class Person {
    // constructor kører automatisk, så hvis noget skal køre automatisk 
    // skal det stå i constructor
    constructor() {
        // console.log("ny person er født");
        // this er objektets måde at sige "mit", uden at nævne en specifik "parent"
        // this sørger også for at vi har adgang til firstname fra resten af class' en
        this.firstname = "noget";
        this.lastname = "andet";
    } 
    // funktioner, som ikke kører automatisk, "function" udelades
    // vi har adgang til alle this-properties udenfor constructor
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }
}

