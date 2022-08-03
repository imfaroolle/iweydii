// admin creating form validation vac = validation admin creating section


// all input variables
var fnamevac = document.getElementById('fnamevac');
var lnamevac = document.getElementById('lnamevac');
var usrnmvac = document.getElementById('usrnmvac');
var emailvac = document.getElementById('emailvac');
var pswvac = document.getElementById('pswvac');
var cpswvac = document.getElementById('cpswvac');

// variables for error displaying eac = error admin creating section
var fnameeac = document.getElementById('fnameeac'); 
var lnameeac = document.getElementById('lnameeac');
var usrnmeac = document.getElementById('usrnmeac');
var emaileac = document.getElementById('emaileac');
var psweac = document.getElementById('psweac');
var cpweac = document.getElementById('cpweac');

// submit button variable subac = submit admin creating form
var subac = document.getElementById('subac');
// validating admin creating form

// all function validations
// fname validation
function AdminfnameValidation(){
    
    var letters = /^[A-Za-z]+$/;

    if(fnamevac.value.length > 20){
    fnamevac.style.border = "2px solid red";
    fnameeac.innerHTML = "Firstname must be less than 20 charecters*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop';
}

else if(fnamevac.value == ""){
    fnamevac.style.border = "2px solid red";
    fnameeac.innerHTML = "Firstname required*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop';
} 


else if(!fnamevac.value.match(letters)){
    fnamevac.style.border = "2px solid red";
    fnameeac.innerHTML = "Only letters are allow*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop';
}

else{
    fnamevac.style.border = "2px solid green";
    fnameeac.innerHTML = "";
    subac.removeAttribute('disabled');
    subac.style.cursor = 'pointer'
}
}
// lname validation
function AdminlnameValidation(){
    var letters = /^[A-Za-z]+$/;

    if(lnamevac.value.length > 20){
    lnamevac.style.border = "2px solid red";
    lnameeac.innerHTML = "Lastname must be less than 20 charecters*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
}

else if(lnamevac.value == ""){
    lnamevac.style.border = "2px solid red";
    lnameeac.innerHTML = "Lastname required*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
}

else if(!lnamevac.value.match(letters)){
        var letters = /^[A-Za-z]+$/;
    lnamevac.style.border = "2px solid red";
    lnameeac.innerHTML = "Only letters are allow*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop';
}

else{
    lnamevac.style.border = "2px solid green";
    lnameeac.innerHTML = "";
    subac.removeAttribute('disabled');
    subac.style.cursor = 'pointer'
}
}

// username validation
function AdminusrnmValidation(){
    if(usrnmvac.value.length > 10){
    usrnmvac.style.border = "2px solid red";
    usrnmeac.innerHTML = "Username must be less than 10 charecters*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
}

else if(usrnmvac.value == ""){
    usrnmvac.style.border = "2px solid red";
    usrnmeac.innerHTML = "Lastname required*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
} else{
    usrnmvac.style.border = "2px solid green";
    usrnmeac.innerHTML = "";
    subac.removeAttribute('disabled');
    subac.style.cursor = 'pointer'
}
}

// email validation
function AdminemailValidation(){
    var format = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if (!format.test(emailvac.value))
  {
    emailvac.style.border = "2px solid red";
    emaileac.innerHTML = "Invalid email*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
  }

else if(emailvac.value == ""){
    emailvac.style.border = "2px solid red";
    emaileac.innerHTML = "Email required*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
} else{
    emailvac.style.border = "2px solid green";
    emaileac.innerHTML = "";
    subac.removeAttribute('disabled');
    subac.style.cursor = 'pointer';
}
}

function AdminpassValidation(){
if(pswvac.value.length < 8){
    pswvac.style.border = "2px solid red";
    psweac.innerHTML = "Password must be greater than 7 charecters*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
}

else if(pswvac.value == ""){
    pswvac.style.border = "2px solid red";
    psweac.innerHTML = "Password required*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop'
} else{
    pswvac.style.border = "2px solid green";
    psweac.innerHTML = "";
    subac.removeAttribute('disabled');
    subac.style.cursor = 'pointer';

}
}

function AdmincpassValidation(){
    if(cpswvac.value !== pswvac.value){
    cpswvac.style.border = "2px solid red";
    cpweac.innerHTML = "Passwords not match";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop';
}

else if(cpswvac.value == ""){
    cpswvac.style.border = "2px solid red";
    cpweac.innerHTML = "Confirm password required*";
    subac.setAttribute('disabled' , 'disabled');
    subac.style.cursor = 'no-drop';
}
 else{
    cpswvac.style.border = "2px solid green";
    cpweac.innerHTML = "";
    subac.removeAttribute('disabled');
    subac.style.cursor = 'pointer';

}
}

// registering events with focus out
fnamevac.addEventListener('focusout' , (e)=>{
    AdminfnameValidation();
});

lnamevac.addEventListener('focusout' , (e)=>{
    AdminlnameValidation();
});

emailvac.addEventListener('focusout' , (e)=>{
    AdminemailValidation();
});

usrnmvac.addEventListener('focusout' , (e)=>{
    AdminusrnmValidation();
});

pswvac.addEventListener('focusout' , (e)=>{
    AdminpassValidation();
});

cpswvac.addEventListener('focusout' , (e)=>{
    AdmincpassValidation();
});


// registering events with keyup
fnamevac.addEventListener('keyup' , (e)=>{
    AdminfnameValidation();
});

lnamevac.addEventListener('keyup' , (e)=>{
    AdminlnameValidation();
});

emailvac.addEventListener('keyup' , (e)=>{
    AdminemailValidation();
});

usrnmvac.addEventListener('keyup' , (e)=>{
    AdminusrnmValidation();
});

pswvac.addEventListener('keyup' , (e)=>{
    AdminpassValidation();
});

cpswvac.addEventListener('keyup' , (e)=>{
    AdmincpassValidation();
});

subac.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    fnamevac.focus();
    AdminfnameValidation();
    AdminlnameValidation();
    AdminusrnmValidation();
    AdminemailValidation();
    AdminpassValidation();
    AdmincpassValidation();
})





// admin update in admin panel validation section

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

function AdminidValidation(){
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
function AdminfnameUpValidation(){
    
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
function AdminlnameUpValidation(){
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
function AdminusrnmUpValidation(){
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
function AdminemailUpValidation(){
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

function AdminpassUpValidation(){
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

function AdmincpassUpValidation(){
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
    AdminfnameUpValidation();
});

lnamevaup.addEventListener('focusout' , (e)=>{
    AdminlnameUpValidation();
});

emailvaup.addEventListener('focusout' , (e)=>{
    AdminemailUpValidation();
});

usrnmvaup.addEventListener('focusout' , (e)=>{
    AdminusrnmUpValidation();
});

pswvaup.addEventListener('focusout' , (e)=>{
    AdminpassUpValidation();
});

cpswvaup.addEventListener('focusout' , (e)=>{
    AdmincpassUpValidation();
});


// registering events with keyup
idvaup.addEventListener('keyup' , (e)=>{
    AdminidValidation();
});

fnamevaup.addEventListener('keyup' , (e)=>{
    AdminfnameUpValidation();
});

lnamevaup.addEventListener('keyup' , (e)=>{
    AdminlnameUpValidation();
});

emailvaup.addEventListener('keyup' , (e)=>{
    AdminemailUpValidation();
});

usrnmvaup.addEventListener('keyup' , (e)=>{
    AdminusrnmUpValidation();
});

pswvaup.addEventListener('keyup' , (e)=>{
    AdminpassUpValidation();
});

cpswvaup.addEventListener('keyup' , (e)=>{
    AdmincpassUpValidation();
});

saup.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    AdminidValidation();
    idvaup.focus();
    AdminfnameUpValidation();
    AdminlnameUpValidation();
    AdminusrnmUpValidation();
    AdminemailUpValidation();
    AdminpassUpValidation();
    AdmincpassUpValidation();
})

