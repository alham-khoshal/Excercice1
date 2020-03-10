
    var ptrn = new RegExp("^[a-z0-9._-\\s]+$","i");
    var ptrn1 = new RegExp(/^[a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,6}$/) //doit comporter au moins le caractère.
    var ptrn2 = new RegExp("^[0-9][0-9]?\/[0-1][0-2]?\/[0-9][0-9][0-9][0-9]?$"); // pour date 
    var ptrn3 = new RegExp(/^([0-9]{5,5})+$/,"i"); // pour code postale
    var ptrn4 = new RegExp("^[a-z0-9._-\\s]+$","i");    
    var error = document.getElementById("error");
    var error1 = document.getElementById("error1");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var error5 = document.getElementById("error5");
    var error6 = document.getElementById("error6");
    var error7 = document.getElementById("error7");
    var text;
    error.style.padding = "20px";
    error1.style.padding = "20px";
    error2.style.padding = "20px";
    error3.style.padding = "20px";
    error5.style.padding = "20px";
    error7.style.padding = "20px";
// email
var email = document.getElementById("email");
email.addEventListener('blur', function (e){
    if (ptrn1.test(email.value) == false ){
        e.preventDefault();
        text = "please enter valid email";
        error2.innerHTML = text;
        error2.style.color = "blue"
    }  
else if (ptrn1.test(email.value) == true ){
        text = "";
        error2.innerHTML = text;
        error2.style.color = "none"
    }
})
// nom
var nom = document.getElementById("nom");
nom.addEventListener('blur', function (e){
    if (ptrn.test(nom.value) == false ){
        e.preventDefault();
        text = "please enter valid name";
        error.innerHTML = text;
        error.style.color = "red"
    }  
else if (ptrn.test(nom.value) == true ){
        text = "";
        error.innerHTML = text;
        error.style.color = "none"
    }
})
// prenom
    var prenom = document.getElementById("prenom");
    prenom.addEventListener('blur', function (e){    
        if (ptrn.test(prenom.value) == false ){
        e.preventDefault();
        text = "please enter valid lastname";
        error1.innerHTML = text;
        error1.style.color = "red"
    }  
else if (ptrn.test(prenom.value) == true ){
        text = "";
        error1.innerHTML = text;
        error1.style.color = "none"
    }
});
// adresse
var adr= document.getElementById("Addresse");
adr.addEventListener('blur', function (e){
    if (ptrn.test(adr.value) == false ){
        e.preventDefault();
        text = "please enter valid postal adresse";
        error5.innerHTML = text;
        error5.style.color = "red"
    }  
else if (ptrn.test(adr.value) == true ){
        text = "";
        error5.innerHTML = text;
        error5.style.color = "none"
    }
});
// ville
var ville = document.getElementById("ville");
ville.addEventListener('blur', function (e){
    if (ptrn4.test(ville.value) == false ){
        e.preventDefault();
        text = "please enter valid postal adresse";
        error6.innerHTML = text;
        error6.style.color = "red"
    }  
else if (ptrn.test(ville.value) == true ){
        text = "";
        error4.innerHTML = text;
        error4.style.color = "none"
    }
});
// code postal
var cdp= document.getElementById("codepostal");
cdp.addEventListener('blur', function (e){
    if (ptrn3.test(cdp.value) == false ){
        e.preventDefault();
        text = "please enter valid postal code";
        error4.innerHTML = text;
        error4.style.color = "red"

    }
else if (ptrn.test(cdp.value) == true ){
        text = "";
        error4.innerHTML = text;
        error4.style.color = "none"
    }
});
// radio
var radio= document.getElementById("radio");
radio.addEventListener('blur', function (e){
    if (radio.lenght < 5){
        e.preventDefault();
        text = "please enter valid name";
        error.innerHTML = text;
    }});
// date  
var date= document.getElementById("date");
date.addEventListener('blur', function (e){
    if (ptrn2.test(date.value) == false ){
        e.preventDefault();
        text = "please enter valid date";
        error3.innerHTML = text;
        error3.style.color = "red"
    } 
else if (ptrn2.test(date.value) == true ){
        e.preventDefault();
        text = "";
        error3.innerHTML = text;
        error3.style.color = "none"
    }
});

// text 
var text1 = document.getElementById("text1");
text1.addEventListener('blur', function (e){
    if (ptrn.test(text1.value) == false ){
        e.preventDefault();
        text = "please enter valid text";
        error7.innerHTML = text;
        error7.style.color = "blue"
    }   
else if (ptrn.test(text1.value) == true ){
        e.preventDefault();
        text = "";
        error7.innerHTML = text;
        error7.style.color = "none"
    }
});
var radio = document.getElementById("radio").checked;
var radio1 = document.getElementById("radio1").checked;

if (radio == false && radio1 == false ){
        text = "please enter valid text";
        error10.innerHTML = text;
        error10.style.color = "black"}