// all variables

var stdfnamec = document.getElementById('stdfnamec');
var stdlnamec = document.getElementById('stdlnamec');
var stdusrnmc = document.getElementById('stdusrnmc');
var stdemailc = document.getElementById('stdemailc');
var stddeptc = document.getElementById('stddeptc');
var stdpswc = document.getElementById('stdpswc');
var stdcpswc = document.getElementById('stdcpswc');

// variables for error displaying eac = error admin creating section
var stdfnameec = document.getElementById('stdfnameec'); 
var stdlnameec = document.getElementById('stdlnameec');
var stdusrnmec = document.getElementById('stdusrnmec');
var stdemailec = document.getElementById('stdemailec');
var stddeptec = document.getElementById('stddeptec');
var stdpswec = document.getElementById('stdpswec');
var stdcpswec = document.getElementById('stdcpswec');

// submit button variable stdc = student creating section 
var stdc = document.getElementById('stdc');

// all function validations
// fname validation
function fnameValidation(){
    
    var letters = /^[A-Za-z]+$/;

if(stdfnamec.value.length > 20){
    stdfnamec.style.border = "2px solid red";
    stdfnameec.innerHTML = "Firstname must be less than 20 charecters*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop';
}

else if(stdfnamec.value == ""){
    stdfnamec.style.border = "2px solid red";
    stdfnameec.innerHTML = "Firstname required*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop';
} 


else if(!stdfnamec.value.match(letters)){
    stdfnamec.style.border = "2px solid red";
    stdfnameec.innerHTML = "Only letters are allow*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop';
}

else{
    stdfnamec.style.border = "2px solid green";
    stdfnameec.innerHTML = "";
    stdc.removeAttribute('disabled');
    stdc.style.cursor = 'pointer'
}
}
// lname validation
function lnameValidation(){
    var letters = /^[A-Za-z]+$/;

    if(stdlnamec.value.length > 20){
    stdlnamec.style.border = "2px solid red";
    stdlnameec.innerHTML = "Lastname must be less than 20 charecters*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop'
}

else if(stdlnamec.value == ""){
    stdlnamec.style.border = "2px solid red";
    stdlnameec.innerHTML = "Lastname required*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop'
}

else if(!stdlnamec.value.match(letters)){
    var letters = /^[A-Za-z]+$/;
    stdlnamec.style.border = "2px solid red";
    stdlnameec.innerHTML = "Only letters are allow*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop';
}

else{
    stdlnamec.style.border = "2px solid green";
    stdlnameec.innerHTML = "";
    stdc.removeAttribute('disabled');
    stdc.style.cursor = 'pointer'
}
}

// username validation
function usrnmValidation(){
    if(stdusrnmc.value.length > 10){
    stdusrnmc.style.border = "2px solid red";
    stdusrnmec.innerHTML = "Username must be less than 10 charecters*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop'
}

else if(stdusrnmc.value == ""){
    stdusrnmc.style.border = "2px solid red";
    stdusrnmec.innerHTML = "Lastname required*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop'
} else{
    stdusrnmc.style.border = "2px solid green";
    stdusrnmec.innerHTML = "";
    stdc.removeAttribute('disabled');
    stdc.style.cursor = 'pointer'
}
}

// email validation
function emailValidation(){
    var format = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
 if (!format.test(stdemailc.value))
  {
    stdemailc.style.border = "2px solid red";
    stdemailec.innerHTML = "Invalid email*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop'
  }

else if(stdemailc.value == ""){
    stdemailc.style.border = "2px solid red";
    stdemailec.innerHTML = "Email required*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop'
} else{
    stdemailc.style.border = "2px solid green";
    stdemailec.innerHTML = "";
    stdc.removeAttribute('disabled');
    stdc.style.cursor = 'pointer';
}
}

function passValidation(){
if(stdpswc.value.length < 8){
    stdpswc.style.border = "2px solid red";
    stdpswec.innerHTML = "Password must be greater than 7 charecters*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop';
}

else if(stdpswc.value == ""){
    stdpswc.style.border = "2px solid red";
    stdpswec.innerHTML = "Password required*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop'
} else{
    stdpswc.style.border = "2px solid green";
    stdpswec.innerHTML = "";
    stdc.removeAttribute('disabled');
    stdc.style.cursor = 'pointer';

}
}

function cpassValidation(){
    if(stdcpswc.value !== stdpswc.value){
    stdcpswc.style.border = "2px solid red";
    stdcpswec.innerHTML = "Passwords not match";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop';
}

else if(stdcpswc.value == ""){
    stdcpswc.style.border = "2px solid red";
    stdcpswec.innerHTML = "Confirm password required*";
    stdc.setAttribute('disabled' , 'disabled');
    stdc.style.cursor = 'no-drop';
}
 else{
    stdcpswc.style.border = "2px solid green";
    stdcpswec.innerHTML = "";
    stdc.removeAttribute('disabled');
    stdc.style.cursor = 'pointer';

}
}


// registering events with focus out
stdfnamec.addEventListener('focusout' , (e)=>{
    fnameValidation();
});

stdlnamec.addEventListener('focusout' , (e)=>{
    lnameValidation();
});

stdemailc.addEventListener('focusout' , (e)=>{
    emailValidation();
});

stdusrnmc.addEventListener('focusout' , (e)=>{
    usrnmValidation();
});

stdpswc.addEventListener('focusout' , (e)=>{
    passValidation();
});

stdcpswc.addEventListener('focusout' , (e)=>{
    cpassValidation();
});


// registering events with keyup
stdfnamec.addEventListener('keyup' , (e)=>{
    fnameValidation();
});

stdlnamec.addEventListener('keyup' , (e)=>{
    lnameValidation();
});

stdemailc.addEventListener('keyup' , (e)=>{
    emailValidation();
});

stdusrnmc.addEventListener('keyup' , (e)=>{
    usrnmValidation();
});

stdpswc.addEventListener('keyup' , (e)=>{
    passValidation();
});

stdcpswc.addEventListener('keyup' , (e)=>{
    cpassValidation();
});

stdc.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    stdfnamec.focus();
    fnameValidation();
    lnameValidation();
    usrnmValidation();
    emailValidation();
    passValidation();
    cpassValidation();
})


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