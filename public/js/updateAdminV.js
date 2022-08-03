
// all variables

// all input variables vaup = validation admin update section

var idvaup = document.getElementById('idvaup');
var fnamevaup = document.getElementById('fnamevaup');
var lnamevaup = document.getElementById('lnamevaup');
var usrnmvaup = document.getElementById('usrnmvaup');
var emailvaup = document.getElementById('emailvaup');
var pswvaup = document.getElementById('pswvaup');
var cpswvaup = document.getElementById('cpswvaup');

// variables for error displaying eaup = error admin update section 
var idveaup = document.getElementById('idveaup'); 
var fnameveaup = document.getElementById('fnameveaup'); 
var lnameveaup = document.getElementById('lnameveaup');
var usrnmveaup = document.getElementById('usrnmveaup');
var emailveaup = document.getElementById('emailveaup');
var pswveaup = document.getElementById('pswveaup');
var cpswveaup = document.getElementById('cpswveaup');

// saup = submit admin update
var saup = document.getElementById('saup');

// all function validations in update admin section in the panel

// id validation

function idValidation(){
    if(idvaup.value == ""){
        idvaup.style.border = "2px solid red";
        idveaup.innerHTML = "ID required*";
        saup.setAttribute('disabled' , 'disabled');
        saup.style.cursor = 'no-drop';
    }
    
    else{
        idvaup.style.border = "2px solid green";
        idveaup.innerHTML = "";
        saup.setAttribute('disabled' , 'disabled');
        saup.style.cursor = 'no-drop';
    } 
}


// fname validation
function fnameUpValidation(){
    
    var letters = /^[A-Za-z]+$/;

    if(fnamevaup.value.length > 20){
    fnamevaup.style.border = "2px solid red";
    fnameveaup.innerHTML = "Firstname must be less than 20 charecters*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop';
}

else if(fnamevaup.value == ""){
    fnamevaup.style.border = "2px solid red";
    fnameveaup.innerHTML = "Firstname required*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop';
} 


else if(!fnamevaup.value.match(letters)){
    fnamevaup.style.border = "2px solid red";
    fnameveaup.innerHTML = "Only letters are allow*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop';
}

else{
    fnamevaup.style.border = "2px solid green";
    fnameveaup.innerHTML = "";
    saup.removeAttribute('disabled');
    saup.style.cursor = 'pointer'
}
}
// lname validation
function lnameUpValidation(){
    var letters = /^[A-Za-z]+$/;

    if(lnamevaup.value.length > 20){
    lnamevaup.style.border = "2px solid red";
    lnameveaup.innerHTML = "Lastname must be less than 20 charecters*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
}

else if(lnamevaup.value == ""){
    lnamevaup.style.border = "2px solid red";
    lnameveaup.innerHTML = "Lastname required*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
}

else if(!lnamevaup.value.match(letters)){
    var letters = /^[A-Za-z]+$/;
    lnamevaup.style.border = "2px solid red";
    lnameveaup.innerHTML = "Only letters are allow*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop';
}

else{
    lnamevaup.style.border = "2px solid green";
    lnameveaup.innerHTML = "";
    saup.removeAttribute('disabled');
    saup.style.cursor = 'pointer'
}
}

// username validation
function usrnmUpValidation(){
    if(usrnmvaup.value.length > 10){
    usrnmvaup.style.border = "2px solid red";
    usrnmveaup.innerHTML = "Username must be less than 10 charecters*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
}

else if(usrnmvaup.value == ""){
    usrnmvaup.style.border = "2px solid red";
    usrnmveaup.innerHTML = "Lastname required*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
} else{
    usrnmvaup.style.border = "2px solid green";
    usrnmveaup.innerHTML = "";
    saup.removeAttribute('disabled');
    saup.style.cursor = 'pointer'
}
}

// email validation
function emailUpValidation(){
    var format = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if (!format.test(emailvaup.value))
  {
    emailvaup.style.border = "2px solid red";
    emailveaup.innerHTML = "Invalid email*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
  }

else if(emailvaup.value == ""){
    emailvaup.style.border = "2px solid red";
    emailveaup.innerHTML = "Email required*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
} else{
    emailvaup.style.border = "2px solid green";
    emailveaup.innerHTML = "";
    saup.removeAttribute('disabled');
    saup.style.cursor = 'pointer';
}
}

function passUpValidation(){
if(pswvaup.value.length < 8){
    pswvaup.style.border = "2px solid red";
    pswveaup.innerHTML = "Password must be greater than 7 charecters*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
}

else if(pswvaup.value == ""){
    pswvaup.style.border = "2px solid red";
    pswveaup.innerHTML = "Password required*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop'
} else{
    pswvaup.style.border = "2px solid green";
    pswveaup.innerHTML = "";
    saup.removeAttribute('disabled');
    saup.style.cursor = 'pointer';

}
}

function cpassUpValidation(){
    if(cpswvaup.value !== pswvaup.value){
    cpswvaup.style.border = "2px solid red";
    cpswveaup.innerHTML = "Passwords not match";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop';
}

else if(cpswvaup.value == ""){
    cpswvaup.style.border = "2px solid red";
    cpswveaup.innerHTML = "Confirm password required*";
    saup.setAttribute('disabled' , 'disabled');
    saup.style.cursor = 'no-drop';
}
 else{
    cpswvaup.style.border = "2px solid green";
    cpswveaup.innerHTML = "";
    saup.removeAttribute('disabled');
    saup.style.cursor = 'pointer';

}
}

// Update section 

// registering events with focus out
fnamevaup.addEventListener('focusout' , (e)=>{
    fnameUpValidation();
});

lnamevaup.addEventListener('focusout' , (e)=>{
    lnameUpValidation();
});

emailvaup.addEventListener('focusout' , (e)=>{
    emailUpValidation();
});

usrnmvaup.addEventListener('focusout' , (e)=>{
    usrnmUpValidation();
});

pswvaup.addEventListener('focusout' , (e)=>{
    passUpValidation();
});

pswvaup.addEventListener('focusout' , (e)=>{
    cpassUpValidation();
});


// registering events with keyup
idvaup.addEventListener('keyup' , (e)=>{
    idValidation();
});

fnamevaup.addEventListener('keyup' , (e)=>{
    fnameUpValidation();
});

lnamevaup.addEventListener('keyup' , (e)=>{
    lnameUpValidation();
});

emailvaup.addEventListener('keyup' , (e)=>{
    emailUpValidation();
});

usrnmvaup.addEventListener('keyup' , (e)=>{
    usrnmUpValidation();
});

pswvaup.addEventListener('keyup' , (e)=>{
    passUpValidation();
});

cpswvaup.addEventListener('keyup' , (e)=>{
    cpassUpValidation();
});

saup.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    idValidation();
    idvaup.focus();
    fnameUpValidation();
    lnameUpValidation();
    usrnmUpValidation();
    emailUpValidation();
    passUpValidation();
    cpassUpValidation();
})

