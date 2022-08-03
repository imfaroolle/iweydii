
// update section

// all variables

var stdfnameu = document.getElementById('stdfnameu');
var stdlnameu = document.getElementById('stdlnameu');
var stdusrnmu = document.getElementById('stdusrnmu');
var stdemailu = document.getElementById('stdemailu');
var stddeptu = document.getElementById('stddeptu');
var stdpswu = document.getElementById('stdpswu');
var stdcpswu = document.getElementById('stdcpswu');
var stdidu = document.getElementById('stdidu'); 

// variables for error displaying eac = error admin creating section
var stdidu = document.getElementById('stdidu'); 
var stdfnameeu = document.getElementById('stdfnameeu'); 
var stdlnameeu = document.getElementById('stdlnameeu');
var stdusrnmeu = document.getElementById('stdusrnmeu');
var stdemaileu = document.getElementById('stdemaileu');
var stddepteu = document.getElementById('stddepteu');
var stdpsweu = document.getElementById('stdpsweu');
var stdcpsweu = document.getElementById('stdcpsweu');

// submit button variable stdc = student creating section 
var stdu = document.getElementById('stdu');

// all function validations
// id validation

function idValidation(){
    if(stdidu.value == ""){
        stdidu.style.border = "2px solid red";
        stdideu.innerHTML = "ID required*";
        stdu.setAttribute('disabled' , 'disabled');
        stdu.style.cursor = 'no-drop';
    }
    
    else{
        stdidu.style.border = "2px solid green";
        stdideu.innerHTML = "";
        stdu.setAttribute('disabled' , 'disabled');
        stdu.style.cursor = 'no-drop';
    } 
}


// fname validation
function fnameUpValidation(){
    
    var letters = /^[A-Za-z]+$/;

if(stdfnameu.value.length > 20){
    stdfnameu.style.border = "2px solid red";
    stdfnameeu.innerHTML = "Firstname must be less than 20 charecters*";
    stdu.setAttribute('disabled' , 'disabled');
    stde.style.cursor = 'no-drop';
}

else if(stdfnameu.value == ""){
    stdfnameu.style.border = "2px solid red";
    stdfnameeu.innerHTML = "Firstname required*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop';
} 


else if(!stdfnameu.value.match(letters)){
    stdfnameu.style.border = "2px solid red";
    stdfnameeu.innerHTML = "Only letters are allow*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop';
}

else{
    stdfnameu.style.border = "2px solid green";
    stdfnameeu.innerHTML = "";
    stdu.removeAttribute('disabled');
    stdu.style.cursor = 'pointer'
}
}
// lname validation
function lnameUpValidation(){
    var letters = /^[A-Za-z]+$/;

    if(stdlnameu.value.length > 20){
    stdlnameu.style.border = "2px solid red";
    stdlnameeu.innerHTML = "Lastname must be less than 20 charecters*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop'
}

else if(stdlnameu.value == ""){
    stdlnameu.style.border = "2px solid red";
    stdlnameeu.innerHTML = "Lastname required*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop'
}

else if(!stdlnameu.value.match(letters)){
    var letters = /^[A-Za-z]+$/;
    stdlnameu.style.border = "2px solid red";
    stdlnameeu.innerHTML = "Only letters are allow*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop';
}

else{
    stdlnameu.style.border = "2px solid green";
    stdlnameeu.innerHTML = "";
    stdu.removeAttribute('disabled');
    stdu.style.cursor = 'pointer'
}
}

// username validation
function usrnmUpValidation(){
    if(stdusrnmu.value.length > 10){
    stdusrnmu.style.border = "2px solid red";
    stdusrnmeu.innerHTML = "Username must be less than 10 charecters*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop'
}

else if(stdusrnmu.value == ""){
    stdusrnmu.style.border = "2px solid red";
    stdusrnmeu.innerHTML = "Lastname required*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop'
} else{
    stdusrnmu.style.border = "2px solid green";
    stdusrnmeu.innerHTML = "";
    stdu.removeAttribute('disabled');
    stdu.style.cursor = 'pointer'
}
}

// email validation
function emailUpValidation(){
    var format = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if (!format.test(stdemailu.value))
  {
    stdemailu.style.border = "2px solid red";
    stdemaileu.innerHTML = "Invalid email*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop'
  }

else if(stdemailu.value == ""){
    stdemailu.style.border = "2px solid red";
    stdemaileu.innerHTML = "Email required*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop'
} else{
    stdemailu.style.border = "2px solid green";
    stdemaileu.innerHTML = "";
    stdu.removeAttribute('disabled');
    stdu.style.cursor = 'pointer';
}
}

function passUpValidation(){
if(stdpswu.value.length < 8){
    stdpswu.style.border = "2px solid red";
    stdpsweu.innerHTML = "Password must be greater than 7 charecters*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop';
}

else if(stdpswu.value == ""){
    stdpswu.style.border = "2px solid red";
    stdpsweu.innerHTML = "Password required*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop'
} else{
    stdpswu.style.border = "2px solid green";
    stdpsweu.innerHTML = "";
    stdu.removeAttribute('disabled');
    stdu.style.cursor = 'pointer';

}
}

function cpassUpValidation(){
    if(stdcpswu.value !== stdpswu.value){
    stdcpswu.style.border = "2px solid red";
    stdcpsweu.innerHTML = "Passwords not match";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop';
}

else if(stdcpswu.value == ""){
    stdcpswu.style.border = "2px solid red";
    stdcpsweu.innerHTML = "Confirm password required*";
    stdu.setAttribute('disabled' , 'disabled');
    stdu.style.cursor = 'no-drop';
}
 else{
    stdcpswu.style.border = "2px solid green";
    stdcpsweu.innerHTML = "";
    stdu.removeAttribute('disabled');
    stdu.style.cursor = 'pointer';

}
}


// registering events with focus out
stdidu.addEventListener('focusout' , (e)=>{
    idValidation();
});

stdfnameu.addEventListener('focusout' , (e)=>{
    fnameUpValidation();
});

stdlnameu.addEventListener('focusout' , (e)=>{
    lnameUpValidation();
});

stdemailu.addEventListener('focusout' , (e)=>{
    emailUpValidation();
});

stdusrnmu.addEventListener('focusout' , (e)=>{
    usrnmUpValidation();
});

stdpswu.addEventListener('focusout' , (e)=>{
    passUpValidation();
});

stdcpswu.addEventListener('focusout' , (e)=>{
    cpassUpValidation();
});


// registering events with keyup
stdidu.addEventListener('keyup' , (e)=>{
    idValidation();
});

stdfnameu.addEventListener('keyup' , (e)=>{
    fnameUpValidation();
});

stdlnameu.addEventListener('keyup' , (e)=>{
    lnameUpValidation();
});

stdemailu.addEventListener('keyup' , (e)=>{
    emailUpValidation();
});

stdusrnmu.addEventListener('keyup' , (e)=>{
    usrnmUpValidation();
});

stdpswu.addEventListener('keyup' , (e)=>{
    passUpValidation();
});

stdcpswu.addEventListener('keyup' , (e)=>{
    cpassUpValidation();
});

stdu.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    idValidation();
    stdfnameu.focus();
    fnameUpValidation();
    lnameUpValidation();
    usrnmUpValidation();
    emailUpValidation();
    passUpValidation();
    cpassUpValidation();
});