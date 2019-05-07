// Definér class'en SchoolClass med følgende egenskaber og giv dem nogle passende standardværdier:

class SchoolClass {
    constructor(cssSelector, className, educationName, institutionName) {
        this.className = "WUHF";
        this.educationName = "Webudvikler";
        this.institutionName = "RTS";
        this.studentNamesArray = ["nanna", "mickey", "mouse"];
        // gem html refencer
        this.schoolClassParentElement = document.querySelector(cssSelector);
        // console.log(this.schoolClassParentElement);
        // kald metoder:
        // attachtToHTML skal køre automatisk, da den gør HTML referencer klar.
        this.attachToHTML();
        // showStudents skal køre automatisk, den skriver navnene til siden.
        this.showStudentsAsHTML();
    }

    // tager imod ét parameter, navn, og tilføjer navnet til studentNames arrayet.
    // jeg behøver ikke kalde denne under constructor? Nej...? Den kaldes fra index.js
    addStudent(navn) {
        this.studentNamesArray.push(navn);
        this.showStudentsAsHTML();
    }

    // metode som bare tømmer studentNames arrayet.
    // jeg behøver ikke kalde denne under constructor? Nej...? Den kaldes fra index.js
    clearStudents(){
        // NB dette nulstiller ALLE array-referencer. måske er det ikke det som er formålet.
        this.studentNamesArray.length = 0;
        this.showStudentsAsHTML();
    }

    attachToHTML(cssSelector){
        this.clasNameElement = this.schoolClassParentElement.querySelector(".class-name");
        this.educationNameElement = this.schoolClassParentElement.querySelector(".education-name");
        this.institutionNameElement = this.schoolClassParentElement.querySelector(".institution-name");
        this.studentList = this.schoolClassParentElement.querySelector(".student-list");
    }

    // Definér metoden showStudentsAsHTML, som tager imod et cssSelector parameter, og udskriver alle eleverne under hinanden inden i dét element, som CSS Selectoren refererer til.
    // Over eleverne, skal du udskrive className, educationName og institutionName. Du bestemmer selv hvilke HTML elementer du vil bruge.  
    showStudentsAsHTML() {
        // denne clearer min liste
        this.studentList.innerHTML = "";
        // tilføj if-sætning på array, hvis det er tomt, så..
        // overskriver innerHTML på .class-name, .education-name, .institution-name (1 gang)
        this.clasNameElement.innerHTML = this.className;
        this.educationNameElement.innerHTML = this.educationName;
        this.institutionNameElement.innerHTML = this.institutionName;

        // henter student-names (array)

        this.studentNamesArray.forEach(studentname => {
            // looper names
            // kalder funktionen updateUI
            this.updateUI(studentname);
            // let studentName = document.createElement("li");
            // // overskriv innerHTML med student-name (array-item) 
            // studentName.innerHTML = studentname;
            // // append to this.studentList;
            // this.studentList.appendChild(studentName);
        });

    }

    updateUI(studentnavn) {
        // bør jeg så lave et element i min constructor som overskrives? 
        // det gør jeg ikke i alm JS.
        // create list-tag
        let studentName = document.createElement("li");
        // overskriv innerHTML med student-name (array-item) 
        studentName.innerHTML = studentnavn;
        // append to this.studentList;
        this.studentList.appendChild(studentName);
    }

}


