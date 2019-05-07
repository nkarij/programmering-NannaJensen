document.addEventListener('DOMContentLoaded', function(){

    // I index.js, opret 2 instanser af SchoolClass.
    // let schoolClass1 = new SchoolClass();

    let schoolClass2 = new SchoolClass("WUHF", "Webudvikler ", "RTS");
    let buttonAddStudentElement = document.querySelector(".btn-add-student");
    let buttonClearListElement = document.querySelector(".btn-clear-studentlist");
    let namesArray = ["student1", "student2", "student3"];

    buttonAddStudentElement.addEventListener('click', function(){
        schoolClass2.addStudents(namesArray);
        schoolClass2.showStudentsAsHTMLList("#school-class2");
    })

    buttonClearListElement.addEventListener('click', function() {
        schoolClass2.clearStudents();
        schoolClass2.showStudentsAsHTMLList("#school-class2");
    })

});