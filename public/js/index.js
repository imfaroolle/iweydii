// all buttons click
var dashclick = document.getElementById('dashclick');
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    // usoo noqonaa 
    evt.currentTarget.className += "";
    
  }

//   student section hidding

var student = document.getElementById('student');
student.addEventListener("click" , (e)=>{
    e.preventDefault();
    var studentview = document.getElementsByClassName('studentview');
    for(var i = 0; i < studentview.length; i+=1 ){
      if(studentview[i].style.display == 'none'){
                studentview[i].style.display = "block";
                student.setAttribute('class' , 'active');
                student.setAttribute('style' , 'cursor: pointer;padding: 16px 10px;text-align: left;   user-select: none;');      
            } else{
                studentview[i].style.display = 'none';
                student.removeAttribute('class');
                student.setAttribute('class' , 'accord');
            }
    }

})

// admins section hiding

var admins = document.getElementById('admins');
admins.addEventListener("click" , (e)=>{
    e.preventDefault();
    var adminsview = document.getElementsByClassName('adminsview');
    for(var i = 0; i < adminsview.length; i+=1 ){
      if(adminsview[i].style.display == 'none'){
               adminsview[i].style.display = "block";
               admins.setAttribute('class' , 'active');
               admins.setAttribute('style' , 'cursor: pointer;padding: 16px 10px;text-align: left;  user-select: none;');      
            } else{
                adminsview[i].style.display = 'none';
                admins.removeAttribute('class');
                admins.setAttribute('class' , 'accord');
            }
    }

})

// questions section hiding

var questions = document.getElementById('questions');
questions.addEventListener("click" , (e)=>{
    e.preventDefault();
    var questionview = document.getElementsByClassName('questionview');
    for(var i = 0; i < questionview.length; i+=1 ){
      if(questionview[i].style.display == 'none'){
               questionview[i].style.display = "block";
               questions.setAttribute('class' , 'active');
               questions.setAttribute('style' , 'cursor: pointer;padding: 16px 10px;text-align: left; user-select: none;');      
            } else{
                questionview[i].style.display = 'none';
                questions.removeAttribute('class');
                questions.setAttribute('class' , 'accord');
            }
    }

})


// answers section hiding

var Answers = document.getElementById('Answers');
Answers.addEventListener("click" , (e)=>{
    e.preventDefault();
    
    var Answersview = document.getElementsByClassName('Answersview');
    for(var i = 0; i < Answersview.length; i+=1 ){
      if(Answersview[i].style.display == 'none'){
        Answersview[i].style.display = "block";
        Answers.setAttribute('class' , 'active');
        Answers.setAttribute('style' , 'cursor: pointer;padding: 16px 10px;text-align: left;');      
            } else{
                Answersview[i].style.display = 'none';
                Answers.removeAttribute('class');
                Answers.setAttribute('class' , 'accord');
            }
    }

})


// mini Bar

var adminsmin = document.getElementById('adminsmin');
adminsmin.addEventListener("click" , (e)=>{
    e.preventDefault();

    var adminsviewMin = document.getElementsByClassName('adminsviewMin');
    for(var i = 0; i < adminsviewMin.length; i+=1 ){
      if(adminsviewMin[i].style.display == 'none'){    
        dashclick.style =  '';
        adminsviewMin[i].style.display = "block"; 
        adminsmin.setAttribute('style' , '  color: #ffff;   background-color: #263645;')  
            } else{
                adminsviewMin[i].style.display = 'none';
                adminsmin.removeAttribute('style');
            }
    }

})




var studentsMin = document.getElementById('studentsMin');
studentsMin.addEventListener("click" , (e)=>{
    e.preventDefault();
    var studentsViewmin = document.getElementsByClassName('studentsViewmin');
    for(var i = 0; i < studentsViewmin.length; i+=1 ){
      if(studentsViewmin[i].style.display == 'none'){
        dashclick.style =  '';
        studentsViewmin[i].style.display = "block";   
        studentsMin.setAttribute('style' , '  color: #ffff;   background-color: #263645;');  
            } else{
              studentsViewmin[i].style.display = 'none';
              studentsMin.removeAttribute('style');
            }
    }

})


var questionsMin = document.getElementById('questionsMin');
questionsMin.addEventListener("click" , (e)=>{
    e.preventDefault();
    var questionviewMin = document.getElementsByClassName('questionviewMin');
    for(var i = 0; i < questionviewMin.length; i+=1 ){
      if(questionviewMin[i].style.display == 'none'){
        dashclick.style =  '';
        questionviewMin[i].style.display = "block";   
        questionsMin.setAttribute('style' , '  color: #ffff;   background-color: #263645;'); 
            } else{
              questionviewMin[i].style.display = 'none';
              questionsMin.removeAttribute('style');
            }
    }

})


var AnswersMin = document.getElementById('AnswersMin');
AnswersMin.addEventListener("click" , (e)=>{
   
    dashclick.style =  '';
    var AnswersviewMin = document.getElementsByClassName('AnswersviewMin');
    for(var i = 0; i < AnswersviewMin.length; i+=1 ){
      if(AnswersviewMin[i].style.display == 'none'){
         e.preventDefault();
        AnswersviewMin[i].style.display = "block";  
        AnswersMin.setAttribute('style' , '  color: #ffff;   background-color: #263645;');  
            } else{
              AnswersviewMin[i].style.display = 'none';
              AnswersMin.removeAttribute('style');
            }
    }

})


// toggle

var navbtn = document.getElementById('navbtn');

navbtn.addEventListener('click' , (e)=>{ 
  dashclick.style =  '';
  var minipanel = document.getElementById('minipanel');
  var adminpnl = document.getElementById('adminpnl');
  if(minipanel.style.display == 'none'){      
    adminpnl.style.display = 'none';
    minipanel.style.display = 'block';

    

  } else{
    minipanel.style.display = 'none';    
    adminpnl.style.display = 'block';

  }
})


dashclick.addEventListener('click' , (e)=>{
  dashclick.style =  'color: #ffff;   background-color: #263645;'
}) 



// time ticking
// var timetxt = document.getElementById('timetxt');

// function time() {
//   var d = new Date();
//   var s = d.getSeconds();
//   var m = d.getMinutes();
//   var h = d.getHours();
//   var ampm = h >= 12 ? 'pm' : 'am';
//   var p = d.get
//   if(s < 10){

//       timetxt.textContent = h + ":" + m + ":" + '0' + s + ampm;
//   } else if (m < 10){
//     timetxt.textContent = h + ":" + '0' + m + ":" + s + ampm;
//   } else{

//       timetxt.textContent = h + ":"  + m + ":" + s + ampm;
// }
//   }



// setInterval(time, 1000);


// options parts

var optionsPart = document.getElementById('options');
var clickImg = document.getElementById('clickImg');

clickImg.addEventListener('mouseenter' , (e)=>{
  e.preventDefault();
  // if(optionsPart.style.display == 'none'){
    optionsPart.style.display = 'block';
  // } else{
  //   optionsPart.style.display = 'none';
  // }
})

optionsPart.addEventListener('mouseleave' , (e)=>{
  e.preventDefault();
  optionsPart.style.display = 'none';
})



// profile validation
var uname = document.getElementById('uname');
var fileToUpload = document.getElementById('fileToUpload');
var btnprofile = document.getElementById('btnprofile');

// errors
var erruname = document.getElementById('erruname');
var errimg = document.getElementById('errimg');

function unameValidation(){
if(uname.value.length > 10){
    uname.style.border = "2px solid red";
    erruname.innerHTML = "Username must be less than 10 characters*";
    btnprofile.setAttribute('disabled' , 'disabled');
    btnprofile.style.cursor = 'no-drop';
  }
  else if(uname.value.length < 2){
    uname.style.border = "2px solid red";
    erruname.innerHTML = "Username is too short*";
    btnprofile.setAttribute('disabled' , 'disabled');
    btnprofile.style.cursor = 'no-drop';
  }
  else if(uname.value == ""){
    uname.style.border = "2px solid red";
    erruname.innerHTML = "Username is required*";
    btnprofile.setAttribute('disabled' , 'disabled');
    btnprofile.style.cursor = 'no-drop';
  }
  
  else{
    uname.style.border = "2px solid green";
    erruname.innerHTML = "";
    btnprofile.removeAttribute('disabled');
    btnprofile.style.cursor = 'pointer';
  }
  }

  function imgValidation(){
    var format = /\.(jpe?g|png|gif|bmp)$/i
if(!format.test(fileToUpload.value)){
      fileToUpload.style.border = "2px solid red";
      errimg.innerHTML = "please upload only image*";
      btnprofile.setAttribute('disabled' , 'disabled');
      btnprofile.style.cursor = 'no-drop';
    }
    
    else{
      fileToUpload.style.border = "2px solid green";
      errimg.innerHTML = "";
      btnprofile.removeAttribute('disabled');
      btnprofile.style.cursor = 'pointer';
    }
    }

uname.addEventListener('focusout' , (e)=>{
      unameValidation();
  });
fileToUpload.addEventListener('focusout' , (e)=>{
    imgValidation();
});

uname.addEventListener('keyup' , (e)=>{
  unameValidation();
});
fileToUpload.addEventListener('mouseleave' , (e)=>{
  imgValidation();
});

btnprofile.addEventListener('mouseenter' , (e)=>{
  e.preventDefault();
  unameValidation();

});


