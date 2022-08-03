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

function QuestionIdUpValidation(){
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
    QuestionIdUpValidation();
});

// registering keyup event
rridu.addEventListener('keyup' , (e)=>{
    ReplyIdUpValidation();
});

rqidu.addEventListener('keyup' , (e)=>{
    QuestionIdUpValidation();
});


btnru.addEventListener('mouseenter' , (e)=>{
    e.preventDefault();
    ReplyIdUpValidation();
    QuestionIdUpValidation();
})


