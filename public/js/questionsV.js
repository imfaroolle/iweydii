// all variables

var titleqc = document.getElementById('titleqc');
var tagqc = document.getElementById('tagqc');



// variables for error displaying eqc = error question creating section
var titleeqc = document.getElementById('titleeqc'); 
var tageqc = document.getElementById('tageqc');
var questeqc = document.getElementById('questeqc');

// submit button variable qc = question creating section 
var btnqc = document.getElementById('btnqc');

// all function validations
// id validation



// title validation
function titleValidation(){

 if(titleqc.value == ""){
    titleqc.style.border = "2px solid red";
    titleeqc.innerHTML = "Firstname required*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop';
} 



else if(titleqc.value.length > 59){
    titleqc.style.border = "2px solid red";
    titleeqc.innerHTML = "title must be less than 60 charecters*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop'
}


else{
    titleqc.style.border = "2px solid green";
    titleeqc.innerHTML = "";
    btnqc.removeAttribute('disabled');
    btnqc.style.cursor = 'pointer'
}
}
// tags validation
function tagsValidation(){

    if(tagqc.value.length > 29){
    tagqc.style.border = "2px solid red";
    tageqc.innerHTML = "tags must be less than 30 charecters*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop'
}

else if(tagqc.value == ""){
    tagqc.style.border = "2px solid red";
    tageqc.innerHTML = "Lastname required*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop'
}

else{
    tagqc.style.border = "2px solid green";
    tageqc.innerHTML = "";
    btnqc.removeAttribute('disabled');
    btnqc.style.cursor = 'pointer';
}
}

// question validation
function questionValidation(){
    var textbox_data = CKEDITOR.instances.content.getData();
if(textbox_data > 599){
    questeqc.innerHTML = "question must be less than 600 charecters*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop';
} 

else if(textbox_data < 5){
    questeqc.innerHTML = "question must be greater than 5 charecters*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop'
}

else if(textbox_data == ""){
    questeqc.innerHTML = "Lastname required*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop';
} else{
    questeqc.innerHTML = "";
    btnqc.removeAttribute('disabled');
    btnqc.style.cursor = 'pointer'
}
}


// registering events with focus out
titleqc.addEventListener('focusout' , (e)=>{
    titleValidation();
});

tagqc.addEventListener('focusout' , (e)=>{
    tagsValidation();
});

// ck.on('focusout' , (e)=>{
//     questionValidation();
// });



// registering events with keyup
titleqc.addEventListener('keyup' , (e)=>{
    titleValidation();
});

tagqc.addEventListener('keyup' , (e)=>{
    tagsValidation();
});





btnqc.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    titleqc.focus();
    titleValidation();
    tagsValidation();
});


// all variables

var titlequ = document.getElementById('titlequ');
var tagqu = document.getElementById('tagqu');
var idqu = document.getElementById('idqu');



// variables for error displaying eqc = error question creating section
var idequ = document.getElementById('idequ'); 
var titleequ = document.getElementById('titleequ');
var tagequ = document.getElementById('tagequ');
var questionequ = document.getElementById('questionequ');

// submit button variable qc = question creating section 
var qbtnu = document.getElementById('qbtnu');

// all function validations
// id validation



// title validation
function titleUpValidation(){

 if(titlequ.value == ""){
    titlequ.style.border = "2px solid red";
    titleequ.innerHTML = "Title required*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop';
} 



else if(titlequ.value.length > 59){
    titlequ.style.border = "2px solid red";
    titleequ.innerHTML = "title must be less than 60 charecters*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop'
}


else{
    titlequ.style.border = "2px solid green";
    titleequ.innerHTML = "";
    qbtnu.removeAttribute('disabled');
    qbtnu.style.cursor = 'pointer'
}
}
// tags validation
function tagsUpValidation(){

    if(tagqu.value.length > 29){
    tagqu.style.border = "2px solid red";
    tagequ.innerHTML = "tags must be less than 30 charecters*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop'
}

else if(tagqu.value == ""){
    tagqu.style.border = "2px solid red";
    tagequ.innerHTML = "Tags required*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop'
}

else{
    tagqu.style.border = "2px solid green";
    tagequ.innerHTML = "";
    qbtnu.removeAttribute('disabled');
    qbtnu.style.cursor = 'pointer';
}
}


function idUpValidation(){
if(idqu.value == ""){
    idqu.style.border = "2px solid red";
    idequ.innerHTML = "ID required*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop'
}

else{
    idqu.style.border = "2px solid green";
    idequ.innerHTML = "";
    qbtnu.removeAttribute('disabled');
    qbtnu.style.cursor = 'pointer';
}
}

// question validation
function questionUpValidation(){
    var textbox_data = CKEDITOR.instances.UpdQ.getData();
if(textbox_data > 599){
    questionequ.innerHTML = "question must be less than 600 charecters*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop';
} 

else if(textbox_data < 5){
    questionequ.innerHTML = "question must be greater than 5 charecters*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop'
}

else if(textbox_data == ""){
    questionequ.innerHTML = "Lastname required*";
    qbtnu.setAttribute('disabled' , 'disabled');
    qbtnu.style.cursor = 'no-drop';
} else{
    questionequ.innerHTML = "";
    qbtnu.removeAttribute('disabled');
    qbtnu.style.cursor = 'pointer'
}
}


// registering events with focus out
titlequ.addEventListener('focusout' , (e)=>{
    titleUpValidation();
});

tagqu.addEventListener('focusout' , (e)=>{
    tagsUpValidation();
});

idqu.addEventListener('focusout' , (e)=>{
    idUpValidation();
});

// ck.on('focusout' , (e)=>{
//     questionValidation();
// });



// registering events with keyup
titlequ.addEventListener('keyup' , (e)=>{
    titleUpValidation();
});

tagqu.addEventListener('keyup' , (e)=>{
    tagsUpValidation();
});


idqu.addEventListener('keyup' , (e)=>{
    idUpValidation();
});






qbtnu.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    titleUpValidation();
    tagsUpValidation();
    idUpValidation();
});

