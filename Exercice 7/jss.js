/*const nom = document.getElementById('nom')
const prenom = document.getElementById('prenom')
const codepostal = document.getElementById('codepostal')
const Addresse = document.getElementById('Addresse')
const errorElement = document.getElementById('error')

const formulaire_contact = document.getElementById('formulaire_contact')
formulaire_contact.addEventListener('submit', (e) =>{ 
let  masage = []
if (nom.value === '' || nom.value == null){
    masage.push('*')}
if (masage.length > 0 ){
e.preventDefault()
errorElement.innertext = masage.join(',')

}
})

var form = document.getElementById("form"); 
form.addEventListener("submit", function(e){let nom =document.getElementById("nom")

if( nom.value == null || nom.value.trim() ===''){alert("dgrfgtdhshgf")}
e.prevenDefault();
});
 */   

/*
document.addEventListener("DOMContentLoaded", function() {
    fields.firstName = document.getElementById('firstName');
    fields.lastName = document.getElementById('lastName');
    fields.email = document.getElementById('email');
    fields.address = document.getElementById('address');
    fields.houseNumber = document.getElementById('houseNumber');
    fields.country = document.getElementById('country');
    fields.password = document.getElementById('password');
    fields.passwordCheck = document.getElementById('passwordCheck');
    fields.newsletter = document.getElementById('newsletter');
    fields.question = document.getElementById('question');
    })
function isNotEmpty(value) {
    if (value == null || typeof value == 'undefined' ) return false;
    return (value.length > 0);
    }
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
    }
function isNumber(num) {
    return (num.length > 0) && !isNaN(num);
    }
function isPasswordValid(password) {
    if (password.length > 5) {
    return true;
    }
    return false
    }
function fieldValidation(field, validationFunction) {
    if (field == null) return false;

    let isFieldValid = validationFunction(field.value)
    if (!isFieldValid) {
    field.className = 'placeholderRed';
    } else {
    field.className = '';
    }

    return isFieldValid;
    }
function isValid() {
var valid = true;

    valid &= fieldValidation(fields.firstName, isNotEmpty);
    valid &= fieldValidation(fields.lastName, isNotEmpty);
    valid &= fieldValidation(fields.gender, isNotEmpty);
    valid &= fieldValidation(fields.address, isNotEmpty);
    valid &= fieldValidation(fields.country, isNotEmpty);
    valid &= fieldValidation(fields.email, isEmail);
    valid &= fieldValidation(fields.houseNumber, isNumber);
    valid &= fieldValidation(fields.password, isPasswordValid);
    valid &= fieldValidation(fields.passwordCheck, isPasswordValid);
    valid &= fieldValidation(fields.question, isNotEmpty);
    valid &= arePasswordsEqual();

    return valid;
    }
function arePasswordsEqual() {
    if (fields.password.value == fields.passwordCheck.value) {
    field.password.className = 'placeholderRed';
    field.passwordCheck.className = 'placeholderRed';
    return true;
    }
    return false
}
class User {
constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = address;
    this.country = country;
    this.email = email;
    this.newsletter = newsletter;
    this.question = question;
    }
    }
class User {
    constructor(firstName, lastName, gender, address, country, email, newsletter, question) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.gender = gender;
    this.address = address;
    this.country = country;
    this.email = email;
    this.newsletter = newsletter;
    this.question = question;
    }
}


var email = document.getElementById("email").value;
var nom = document.getElementById("nom").value;
var prenom = document.getElementById("prenom").value;
var adr= document.getElementById("Addresse").value;
var ville= document.getElementById("ville").value;
var cdp= document.getElementById("codepostal").value;
var radio= document.getElementById("radio").value;
var date= document.getElementById("date").value;
var select = document.getElementById("custom-select").value;
var text1 = document.getElementById("text1").value;
var check = document.getElementById("check").value;
var error = document.getElementById("error");
form.addEventListener('blur', (e)=>{
var text= []
if(nom.value===''|| nom.value == null){
    text.push('name is required')
}
if(text.length > 0){
    e.preventDefault()
    error.innerHTML = text.join(',')
}

})
*/




















function validation(){
    var email = document.getElementById("email");
    var nom = document.getElementById("nom");
    var prenom = document.getElementById("prenom");
    var adr= document.getElementById("Addresse");
    var ville= document.getElementById("ville");
    var cdp= document.getElementById("codepostal");
    var radio= document.getElementById("radio");
    var date= document.getElementById("date");
    var select = document.getElementById("custom-select");
    var text1 = document.getElementById("text1");
    var check = document.getElementById("check");
    var error = document.getElementById("error");
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var error7 = document.getElementById("error7");
    var text;
    var ptrn = new RegExp("^[a-z0-9._-\\s]+$","i");
    var ptrn1 = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/) //doit comporter au moins le caractère.
    var ptrn2 = new RegExp("^[0-9][0-9]?\/[0-1][0-2]?\/[0-9][0-9][0-9][0-9]?$"); // pour date 
    var ptrn3 = new RegExp(/^([0-9]{5,5})+$/,"i"); // pour code postale
    var ptrn4 = new RegExp("^[a-z0-9._-\\s]+$","i");
    
    error.style.padding = "20px";
    error1.style.padding = "20px";
    error2.style.padding = "20px";
    error3.style.padding = "20px";
    error4.style.padding = "20px";
    error5.style.padding = "20px";
    error7.style.padding = "20px";
// prenom
    if (ptrn.test(prenom.value) == false ){
        text = "please enter valid lastname";
        error1.innerHTML = text;
        error1.style.color = "red"
        return false;
    }
// nom
    if (ptrn.test(nom.value) == false ){
        text = "please enter valid name";
        error.innerHTML = text;
        error.style.color = "red"
        return false;
    }
// radio
    if (radio.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
// date 
    if (ptrn2.test(date.value) == false ){
        text = "please enter valid date";
        error3.innerHTML = text;
        error3.style.color = "red"
        return false;
    }
// code postal
    if (ptrn3.test(cdp.value) == false ){
        text = "please enter valid postal code";
        error4.innerHTML = text;
        error4.style.color = "red"
        return false;
    }
// adresse
    if (ptrn.test(adr.value) == false ){
        text = "please enter valid postal adresse";
        error5.innerHTML = text;
        error5.style.color = "red"
        return false;
    }
// ville
    if (ptrn4.test(ville.value) == false ){
        text = "please enter valid postal adresse";
        error6.innerHTML = text;
        error6.style.color = "red"
        return false;
    }
// email
    if (ptrn1.test(email.value) == false ){
        text = "please enter valid email";
        error2.innerHTML = text;
        error2.style.color = "blue"
        return false;
    }
// sujet
    if (select.value == null || select == ""){
        text = "please enter valid name";
        error8.innerHTML = text;
        return false;
    }
// text 
    if (ptrn.test(text1.value) == false ){
        text = "please enter valid text";
        error7.innerHTML = text;
        error7.style.color = "blue"
        return false;
    }
// acceptation
    if (check.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }    

    alert("Form Submitted Successfully!");
    return true;

}
















/*
var btn = document.getElementById("submit");
var prenom = document.getElementById("prenom")
var error = document.getElementById("error");
var tp= /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

btn.addEventListener('click', "validation");

function validation(event){
    //si le champ est vide 
    if (prenom.validity.valuemissing){
        event.prevenDefault();
        error.textContent = 'Entrez le prenom de la personne à contacter s.v.p. !';
        error.style.color = 'red';
    }else if (tp.test(prenom.value) == false ){
        event.prevenDefault();
        error.textContent = 'Entrez le prenom de la personne à contacter s.v.p. !';
        error.style.color = 'orange';
    }else{}
}
*//*function validation(){
    var email = document.getElementById("email").value;
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var adr= document.getElementById("Addresse").value;
    var ville= document.getElementById("ville").value;
    var cdp= document.getElementById("codepostal").value;
    var radio= document.getElementById("radio").value;
    var date= document.getElementById("date").value;
    var select = document.getElementById("custom-select").value;
    var text1 = document.getElementById("text1").value;
    var check = document.getElementById("check").value;
    var error = document.getElementById("error");
    var text;
    var ptrn = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;

    error.style.padding = "20px";
    if (ptrn.test(nom.value) == false ){
        text = "please enter valid name";
        error.innerHTML = text;
        error.style.color = "red"
        return false;
    }
    else if (ptrn.test(prenom.value) == false ){
        text = "please enter valid lastname";
        error.innerHTML = text;
        error.style.color = "orange"
        return false;
    }
    else if (adr.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (cdp.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (text1.lenght < 100){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (ville.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (radio.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (check.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (select.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (email.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else if (date.lenght < 5){
        text = "please enter valid name";
        error.innerHTML = text;
        return false;
    }
    else{
    alert("Form Submitted Successfully!");
    return true;}

}*/