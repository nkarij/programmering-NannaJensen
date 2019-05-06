
// man kalder i princippet constructoren, men med navnet fra class = new Person();
class Person {
    // constructor kører automatisk, så hvis noget skal køre automatisk 
    // skal det stå i constructor
    constructor() {
        // console.log("ny person er født");
        // this er objektets måde at sige "mit", uden at nævne en specifik "parent"
        // this sørger også for at vi har adgang til firstname fra resten af class' en
        this.firstname = "Unknown firstname";
        this.lastname = "Unknown lastname";
        this.age = 0;
        // hvis der forventes at friend blir et object, skal der som udgangspunkt stå null.
        this.friend = null;
    } 
    // funktioner, som ikke kører automatisk, "function" udelades
    // vi har adgang til alle this-properties udenfor constructor
    getFullName(){
        return `${this.firstname} ${this.lastname}`;
    }

    introduceSelf(){
        // return "string to test";
        // læg getFullName ned i variabel, så skal man kun ændre i getFullName
        let introduction = `My name is ${this.getFullName()}. I am ${this.age} years old.`;
        // let introduction2 = "My name is" + this.getFullName() + "I am" + this.age + "years old.";
        return introduction;
    }

    sayHiToPerson(otherperson){
        // console.log(otherperson.firstname);
        if(this != otherperson){
            return `Hej ${otherperson.firstname}. How are you?`;
        } else {
            console.log("du taler med dig selv");
        }
        
    }

}

