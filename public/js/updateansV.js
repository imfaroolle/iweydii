// all variables

var ansid = document.getElementById('ansid');
var ansqidu = document.getElementById('ansqidu');

// variables for error displaying eqc = error question creating section
var anside = document.getElementById('anside'); 
var ansqidue = document.getElementById('ansqidue'); 
var ansue = document.getElementById('ansue');


// submit button variable qc = question creating section 
var ansubtn = document.getElementById('ansubtn');



function ansIdUpValidation(){
    if(ansid.value == ""){
        ansid.style.border = "2px solid red";
        anside.innerHTML = "ID required*";
        ansubtn.setAttribute('disabled' , 'disabled');
        ansubtn.style.cursor = 'no-drop'
    }
    
    else{
        ansid.style.border = "2px solid green";
        anside.innerHTML = "";
        ansubtn.removeAttribute('disabled');
        ansubtn.style.cursor = 'pointer';
    }
    }

function QuestionIdUpValidation(){
    if(ansqidu.value == ""){
        ansqidu.style.border = "2px solid red";
        ansqidue.innerHTML = "ID required*";
        ansubtn.setAttribute('disabled' , 'disabled');
        ansubtn.style.cursor = 'no-drop'
    }
    
    else{
        ansqidu.style.border = "2px solid green";
        ansqidue.innerHTML = "";
        ansubtn.removeAttribute('disabled');
        ansubtn.style.cursor = 'pointer';
    }
    }

function ansUpValidation(){
    var textbox_data = CKEDITOR.instances.ansup.getData();
if(textbox_data > 799){
    ansue.innerHTML = "Answer must be less than 800 charecters*";
    ansubtn.setAttribute('disabled' , 'disabled');
    ansubtn.style.cursor = 'no-drop';
} 

else if(textbox_data < 5){
    ansue.innerHTML = "Answer must be greater than 5 charecters*";
    ansubtn.setAttribute('disabled' , 'disabled');
    ansubtn.style.cursor = 'no-drop'
}

else if(textbox_data == ""){
    ansue.innerHTML = "Text  required*";
    ansubtn.setAttribute('disabled' , 'disabled');
    ansubtn.style.cursor = 'no-drop';
} else{
    ansue.innerHTML = "";
    ansubtn.removeAttribute('disabled');
    ansubtn.style.cursor = 'pointer'
}
}

// registering focusout event

ansqidu.addEventListener('focusout' , (e)=>{
    QuestionIdUpValidation();
});

ansid.addEventListener('focusout' , (e)=>{
    ansIdUpValidation();
    QuestionIdUpValidation
});

// registering keyup event
ansqidu.addEventListener('keyup' , (e)=>{
    QuestionIdUpValidation();
});

ansid.addEventListener('keyup' , (e)=>{
    ansIdUpValidation();
});


ansubtn.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    ansIdUpValidation();
    QuestionIdUpValidation();
})