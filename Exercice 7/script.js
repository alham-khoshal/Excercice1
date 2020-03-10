

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
