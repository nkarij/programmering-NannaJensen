
// -----------------------------------------------

// let institutionObject = new Institution("RTS");
// let education1 = new Education("Snedker")
// let education2 = new Education("Tømrer");
// let schoolClass1 = new Schoolclass("Snedker Klasse 1");
// let schoolclass2 = new Schoolclass("Tømrer Klasse 1")
let student1 = new Student("Mickey");
let student2 = new Student("Mark");
let student3 = new Student("Musse");
let student4 = new Student("Abbi");
let student5 = new Student("Abba");
let student6 = new Student("Abelone");

// TESTS:
// løber hele vejen op gennem hierakiet:
// console.log(student1.schoolclass.education.institution);

// løber hele vejen ned gennem hierakiet:
// console.log(institutionObject.educations[0].schoolclasses[0].students[0]);

// skriv alle educations til DOM
// institutionObject.writeListOfEducationsToDOM("#list-container");

// skriv alle students til DOM;
// institutionObject.writeAllStudentsToDOM("#list-container");

// fjern en education:
// let education3;
// institutionObject.removeEducationFromArray(education3);

// let institutionAdmin = InstitutionAdmin;
// console.log(institutionAdmin.admin);
// nu med buttons:

// OPRET ADMINISTRATOR
let institutionManager = new InstitutionAdmin();
// console.log(institutionManager);

// REFERENCER TIL HTML
let buttonAddInstituion = document.querySelector(".add-institution");
let buttonRemoveInstituion = document.querySelector(".remove-institution");
let buttonAddEducation = document.querySelector(".add-education-to-institution");
let buttonRemoveEducation = document.querySelector(".remove-education-from-institution");
let buttonAddSchoolClass = document.querySelector(".add-schoolclass-to-education");
let buttonRemoveSchoolClass = document.querySelector(".remove-schoolclass-from-education");
let buttonWriteSchoolClassesToDom = document.querySelector(".write-all-schoolclasses-to-dom");
// OBJECT-VARIABLER TIL AT SENDE MED
let institutionObject = null;
let educationObject = null;
let schoolclassObject = null;



// ADD INSTITUTION
let institutionName1 = "KEA"
buttonAddInstituion.addEventListener('click', function(event){
    event.preventDefault();
    institutionObject = new Institution(institutionName1);
    institutionManager.addInstitution(institutionObject);
    console.log(institutionManager);
    return institutionManager;
});

// REMOVE INSTITUION 

buttonRemoveInstituion.addEventListener('click', function(){
    let removeInstitution = institutionObject;
    event.preventDefault();
    institutionManager.removeInstitution(removeInstitution);
    console.log(institutionManager.institutions);
    return institutionManager;
});

// ADD EDUCATION TO INSTITUTION
let addEducationName = "Webudvikler";
buttonAddEducation.addEventListener('click', function(event){
    event.preventDefault();
    // nb, sender altid navnet med i constructoren
    educationObject = new Education(addEducationName);
    // console.log(educationObject);
    institutionObject.addEducation(educationObject);
    console.log(institutionObject.educations);
    return educationObject;
})


// REMOVE EDUCATION FROM INSTITUTION
buttonRemoveEducation.addEventListener('click', function(){
    let removeEducation = educationObject;
    event.preventDefault();
    institutionObject.educations.forEach(edu => {
        if(edu == removeEducation || edu.name == removeEducation.name) {
            institutionObject.removeEducationFromArray(edu);
            return institutionObject;
        } else {
            console.log("uddannelsen findes ikke");
            return;
        }
    });
    console.log(institutionObject.educations);
})


// ADD SCHOOL CLASS TO EDUCATION
let addSchoolClassName = "WUHF1";

buttonAddSchoolClass.addEventListener('click', function(event){
    event.preventDefault();
    // nb, sender altid navnet med i constructoren
    schoolclassObject = new Schoolclass(addSchoolClassName);
    // console.log(schoolclass);
    institutionObject.educations.forEach(edu => {
        // NB her refereres til den globale variabel educationObject
        if(edu == educationObject) {
            // sender hele det nye objekt med
            edu.addSchoolClass(schoolclassObject);
            console.log(edu.schoolclasses);
            return edu.schoolclasses;
        } else {
            return;
        }
    });
    // console.log(schoolclassObject);
    return schoolclassObject;
    // console.log(institutionManager);
})

// REMOVE SCHOOLCLASS FROM EDUCATION

buttonRemoveSchoolClass.addEventListener('click', function(){
    let removeSchoolClass = schoolclassObject;
    // console.log(removeSchoolClass);
    educationObject.schoolclasses.forEach(schoolclass => {
        // console.log(schoolclass);
        if(schoolclass == removeSchoolClass || schoolclass.name == removeSchoolClass.name){
            educationObject.removeSchoolClass(removeSchoolClass);
            console.log(educationObject.schoolclasses);
            return educationObject.schoolclasses;
        }
    });

});

// WRITE ALL SCHOOLCLASSES TO DOM
// NB writeSchoolClasses modtager 2 parametre (index, cssselector)
let indexOfEducation = 0;
buttonWriteSchoolClassesToDom.addEventListener('click', function(){
    institutionObject.writeSchoolClassesToDom(indexOfEducation, "#list-container");
}) 




