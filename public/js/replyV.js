// all variables

var rqidc = document.getElementById('rqidc');

// variables for error displaying eqc = error question creating section
var rqidce = document.getElementById('rqidce'); 
var replyTextce = document.getElementById('replyTextce');


// submit button variable qc = question creating section 
var rbtnc = document.getElementById('rbtnc');

function QuestionIdValidation(){
    if(rqidc.value == ""){
        rqidc.style.border = "2px solid red";
        rqidce.innerHTML = "ID required*";
        rbtnc.setAttribute('disabled' , 'disabled');
        rbtnc.style.cursor = 'no-drop'
    }
    
    else{
        rqidc.style.border = "2px solid green";
        rqidce.innerHTML = "";
        rbtnc.removeAttribute('disabled');
        rbtnc.style.cursor = 'pointer';
    }
    }

function replyValidation(){
    var textbox_data = CKEDITOR.instances.iqc.getData();
if(textbox_data > 99){
    replyTextce.innerHTML = "Reply must be less than 100 charecters*";
    rbtnc.setAttribute('disabled' , 'disabled');
    rbtnc.style.cursor = 'no-drop';
} 

else if(textbox_data < 5){
    replyTextce.innerHTML = "Reply must be greater than 5 charecters*";
    rbtnc.setAttribute('disabled' , 'disabled');
    rbtnc.style.cursor = 'no-drop'
}

else if(textbox_data == ""){
    replyTextce.innerHTML = "Text  required*";
    rbtnc.setAttribute('disabled' , 'disabled');
    rbtnc.style.cursor = 'no-drop';
} else{
    replyTextce.innerHTML = "";
    rbtnc.removeAttribute('disabled');
    rbtnc.style.cursor = 'pointer'
}
}

// registering focusout event

rqidc.addEventListener('focusout' , (e)=>{
    QuestionIdValidation();
});

// registering keyup event
rqidc.addEventListener('keyup' , (e)=>{
    QuestionIdValidation();
});

rbtnc.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    QuestionIdValidation();
})


// all variables

var rridu = document.getElementById('rridu');
var rqidu = document.getElementById('rqidu');

// variables for error displaying eqc = error question creating section
var rrideu = document.getElementById('rrideu'); 
var rqideu = document.getElementById('rqideu'); 
var rue = document.getElementById('rue');


// submit button variable qc = question creating section 
var btnru = document.getElementById('btnru');


function ReplyIdUpValidation(){
    if(rridu.value == ""){
        rridu.style.border = "2px solid red";
        rrideu.innerHTML = "ID required*";
        btnru.setAttribute('disabled' , 'disabled');
        btnru.style.cursor = 'no-drop'
    }
    
    else{
        rridu.style.border = "2px solid green";
        rrideu.innerHTML = "";
        btnru.removeAttribute('disabled');
        btnru.style.cursor = 'pointer';
    }
    }

function QuestionRIdUpValidation(){
    if(rqidu.value == ""){
        rqidu.style.border = "2px solid red";
        rqideu.innerHTML = "ID required*";
        btnru.setAttribute('disabled' , 'disabled');
        btnru.style.cursor = 'no-drop'
    }
    
    else{
        rqidu.style.border = "2px solid green";
        rqideu.innerHTML = "";
        btnru.removeAttribute('disabled');
        btnru.style.cursor = 'pointer';
    }
    }

function replyUpValidation(){
    var textbox_data = CKEDITOR.instances.uiqc.getData();
if(textbox_data > 99){
    rue.innerHTML = "Reply must be less than 100 charecters*";
    btnru.setAttribute('disabled' , 'disabled');
    btnru.style.cursor = 'no-drop';
} 

else if(textbox_data < 5){
    rue.innerHTML = "Reply must be greater than 5 charecters*";
    btnru.setAttribute('disabled' , 'disabled');
    btnru.style.cursor = 'no-drop'
}

else if(textbox_data == ""){
    rue.innerHTML = "Text  required*";
    btnru.setAttribute('disabled' , 'disabled');
    btnru.style.cursor = 'no-drop';
} else{
    rue.innerHTML = "";
    btnru.removeAttribute('disabled');
    btnru.style.cursor = 'pointer'
}
}

// registering focusout event

rridu.addEventListener('focusout' , (e)=>{
    ReplyIdUpValidation();
});

rqidu.addEventListener('focusout' , (e)=>{
    QuestionRIdUpValidation();
});

// registering keyup event
rridu.addEventListener('keyup' , (e)=>{
    ReplyIdUpValidation();
});

rqidu.addEventListener('keyup' , (e)=>{
    QuestionRIdUpValidation();
});


btnru.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    ReplyIdUpValidation();
    QuestionRIdUpValidation();
})