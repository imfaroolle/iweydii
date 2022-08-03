var qtitle = document.getElementById('qtitle');
var tagqc = document.getElementById('tagqc');



// variables for error displaying eqc = error question creating section
var qtitlee = document.getElementById('qtitlee'); 
var tageqc = document.getElementById('tageqc');
var questionErr = document.getElementById('questionErr');

// submit button variable qc = question creating section 
var userqbtn = document.getElementById('userqbtn');

// all function validations
// id validation



// title validation
function titleValidation(){

 if(qtitle.value == ""){
    qtitle.style.border = "2px solid red";
    qtitlee.innerHTML = "Title required*";
    userqbtn.setAttribute('disabled' , 'disabled');
    userqbtn.style.cursor = 'no-drop';
} 



else if(qtitle.value.length > 59){
    qtitle.style.border = "2px solid red";
    qtitlee.innerHTML = " must be less than 60 charecters*";
    userqbtn.setAttribute('disabled' , 'disabled');
    userqbtn.style.cursor = 'no-drop'
}


else{
    qtitle.style.border = "2px solid green";
    qtitlee.innerHTML = "";
    userqbtn.removeAttribute('disabled');
    userqbtn.style.cursor = 'pointer'
}
}
// tags validation
function tagsValidation(){

    if(tagqc.value.length > 29){
    tagqc.style.border = "2px solid red";
    tageqc.innerHTML = "must be less than 30 charecters*";
    userqbtn.setAttribute('disabled' , 'disabled');
    userqbtn.style.cursor = 'no-drop'
}

else if(tagqc.value == ""){
    tagqc.style.border = "2px solid red";
    tageqc.innerHTML = "Tags required*";
    userqbtn.setAttribute('disabled' , 'disabled');
    userqbtn.style.cursor = 'no-drop'
}

else{
    tagqc.style.border = "2px solid green";
    tageqc.innerHTML = "";
    userqbtn.removeAttribute('disabled');
    userqbtn.style.cursor = 'pointer';
}
}

// question validation
function questionValidation(){
    var textbox_data = CKEDITOR.instances.content.getData();
if(textbox_data > 599){
    questionErr.innerHTML = "question must be less than 600 charecters*";
    btnqc.setAttribute('disabled' , 'disabled');
    btnqc.style.cursor = 'no-drop';
} 

else if(textbox_data < 5){
    questionErr.innerHTML = "question must be greater than 5 charecters*";
    userqbtn.setAttribute('disabled' , 'disabled');
    userqbtn.style.cursor = 'no-drop'
}

else if(textbox_data == ""){
    questionErr.innerHTML = "Lastname required*";
    userqbtn.setAttribute('disabled' , 'disabled');
    userqbtn.style.cursor = 'no-drop';
} else{
    questionErr.innerHTML = "";
    userqbtn.removeAttribute('disabled');
    userqbtn.style.cursor = 'pointer'
}
}


// registering events with focus out
qtitle.addEventListener('focusout' , (e)=>{
    titleValidation();
});

tagqc.addEventListener('focusout' , (e)=>{
    tagsValidation();
});



// registering events with keyup
qtitle.addEventListener('keyup' , (e)=>{
    titleValidation();
});

tagqc.addEventListener('keyup' , (e)=>{
    tagsValidation();
});





userqbtn.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    qtitle.focus();
    titleValidation();
    tagsValidation();
});
