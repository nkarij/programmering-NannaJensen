// Definér class'en SchoolClass med følgende egenskaber og giv dem nogle passende standardværdier:

class SchoolClass {
    constructor(className, educationName, institutionName) {
        this.className = className;
        this.educationName = educationName;
        this.institutionName =  institutionName;
        this.studentNamesArray = ["nanna", "mickey", "musse"];
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

    // Definér metoden showStudentsAsHTML, som tager imod et cssSelector parameter, og udskriver alle eleverne under hinanden inden i dét element, som CSS Selectoren refererer til.
    // Over eleverne, skal du udskrive className, educationName og institutionName. Du bestemmer selv hvilke HTML elementer du vil bruge.  
    showStudentsAsHTML(cssSelector) {

        let schoolClassParentElement = document.querySelector(cssSelector);
        // console.log(schoolClassParentElement);

        // opret html elementer

        let classNameElement = document.createElement("h1");
        classNameElement.innerHTML = this.className;
        schoolClassParentElement.appendChild(classNameElement);

        let educationNameElement = document.createElement("span");
        educationNameElement.innerHTML = this.educationName;
        schoolClassParentElement.appendChild(educationNameElement);

        let institutionNameElement = document.createElement("span");
        institutionNameElement.innerHTML = this.institutionName;
        schoolClassParentElement.appendChild(institutionNameElement);

        let studentListElement = document.createElement("div");
        // console.log(studentListElement);
        schoolClassParentElement.appendChild(studentListElement);
        // denne clearer min liste
        studentListElement.innerHTML = "";

        // henter student-names (array):
        this.studentNamesArray.forEach(studentname => {
            // looper names
            let studentNameElement = document.createElement("p");
            // // overskriv innerHTML med student-name (array-item) 
            studentNameElement.innerHTML = studentname;
            // // append to this.studentList;
            studentListElement.appendChild(studentNameElement);
        });

    }


}


