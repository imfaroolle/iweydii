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
