document.addEventListener('DOMContentLoaded', function(){

    // I index.js, opret 2 instanser af SchoolClass.
    // let schoolClass1 = new SchoolClass();

    let schoolClass1 = new SchoolClass("WUHF", "Webudvikler ", "RTS");
    let buttonAddStudentElement = document.querySelector(".btn-add-student");
    let buttonClearListElement = document.querySelector(".btn-clear-studentlist");
    let namesArray = ["student1", "student2", "student3", "student4"];
    schoolClass1.addStudents(["nanna", "mickey", "musse"]);

    buttonAddStudentElement.addEventListener('click', function(){
        schoolClass1.addStudents(namesArray);
        schoolClass1.showStudentsAsHTMLList("#school-class1");
    })

    buttonClearListElement.addEventListener('click', function() {
        schoolClass1.clearStudents();
        schoolClass1.showStudentsAsHTMLList("#school-class1");
    })

    

});