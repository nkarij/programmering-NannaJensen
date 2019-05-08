document.addEventListener('DOMContentLoaded', function(){

    // I index.js, opret 2 instanser af SchoolClass.
    // let schoolClass1 = new SchoolClass();

    let schoolClass2 = new SchoolClass("WUHF", "Webudvikler ", "RTS");
    let buttonAddStudentElement = document.querySelector(".btn-add-student");
    let buttonClearListElement = document.querySelector(".btn-clear-studentlist");

    buttonAddStudentElement.addEventListener('click', function(){
        schoolClass2.addStudent("molle2");
        schoolClass2.showStudentsAsHTMLList("#school-class2");
    })

    buttonClearListElement.addEventListener('click', function() {
        schoolClass2.clearStudents();
        schoolClass2.showStudentsAsHTMLList("#school-class2");
    })

});