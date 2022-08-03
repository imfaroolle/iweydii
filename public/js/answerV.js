// all variables

var ansqidc = document.getElementById('ansqidc');

// variables for error displaying eqc = error question creating section
var ansqidce = document.getElementById('ansqidce'); 
var ansce = document.getElementById('ansce');


// submit button variable qc = question creating section 
var ansc = document.getElementById('ansc');

function QuestionAnsIdValidation(){
    if(ansqidc.value == ""){
        ansqidc.style.border = "2px solid red";
        ansqidce.innerHTML = "ID required*";
        ansc.setAttribute('disabled' , 'disabled');
        ansc.style.cursor = 'no-drop'
    }
    
    else{
        ansqidc.style.border = "2px solid green";
        ansqidce.innerHTML = "";
        ansc.removeAttribute('disabled');
        ansc.style.cursor = 'pointer';
    }
    }

function replyValidation(){
    var textbox_data = CKEDITOR.instances.newAns.getData();
if(textbox_data > 99){
    ansce.innerHTML = "Reply must be less than 100 charecters*";
    ansc.setAttribute('disabled' , 'disabled');
    ansc.style.cursor = 'no-drop';
} 

else if(textbox_data < 5){
    ansce.innerHTML = "Reply must be greater than 5 charecters*";
    ansc.setAttribute('disabled' , 'disabled');
    ansc.style.cursor = 'no-drop'
}

else if(textbox_data == ""){
    ansce.innerHTML = "Text  required*";
    ansc.setAttribute('disabled' , 'disabled');
    ansc.style.cursor = 'no-drop';
} else{
    ansce.innerHTML = "";
    ansc.removeAttribute('disabled');
    ansc.style.cursor = 'pointer'
}
}

// registering focusout event

ansqidc.addEventListener('focusout' , (e)=>{
    QuestionAnsIdValidation();
});

// registering keyup event
ansqidc.addEventListener('keyup' , (e)=>{
    QuestionAnsIdValidation();
});

ansc.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    QuestionAnsIdValidation();
})


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

function QuestionAnsIdUpValidation(){
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
    QuestionAnsIdUpValidation();
});

ansid.addEventListener('focusout' , (e)=>{
    ansIdUpValidation();
    
});

// registering keyup event
ansqidu.addEventListener('keyup' , (e)=>{
    QuestionAnsIdUpValidation();
});

ansid.addEventListener('keyup' , (e)=>{
    ansIdUpValidation();
});


ansubtn.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    ansIdUpValidation();
    QuestionAnsIdUpValidation();
})