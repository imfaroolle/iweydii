const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var moment = require('moment');
var url = require('url');
var nodemailer = require('nodemailer');
var multer  = require('multer');
//models
const upload = multer({
    limits : {
        fileSize : 100000000 , 
    } , 

    dest : 'public/uploads/',
    fileFilter(req , file , cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            cb(new Error("File must be Image"));
        }

        cb(undefined , true);
    }
})
const Admin = require('../models/admin');
const Questions = require('../models/questions');
const Ans = require('../models/answers');
const Reply = require('../models/replies');
const Std = require('../models/student');

const adminAuth = require('../middleware/adminAuth');
const bodyparser = require('body-parser');
const path = require('path');
const cookieparser = require('cookie-parser');
const dotenv = require('dotenv')
const router = express.Router();
var counter = 0;
dotenv.config();

// local variables
const StaticFiles = path.join(__dirname , '/public');
const StaticFiles2 = path.join(__dirname , '/uploads');
const app = express();
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine' , 'ejs');
app.use(express.static(StaticFiles));
app.use(express.static(StaticFiles2));
app.use(express.json());
router.use(express.json());
app.use(cookieparser());
router.use(cookieparser());
router.use(express.static(StaticFiles2));
// app.set('views' , viewPath);

// login 

router.get("/login" , async(req , res)=>{
    var Authtoken = req.cookies.UserAuthToken || '';
    var token = req.cookies.Usertoken || '';
    if(!Authtoken){
        res.render('userLogin' , {error : ""});
    }
    else if(!token){
        res.render('userLogin' , {error : ""});
    } else {
    res.redirect('/allquestions')
}
});

router.get("/user/logout" , async(req , res)=>{

    res.clearCookie('UserAuthToken');
    res.clearCookie('Usertoken');
    res.redirect('/login')

});

router.get("/user/logoutAll" , async(req , res)=>{
    var token = req.cookies.Usertoken || '';
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    } else if(!token){
        res.redirect('/login');
    } else {
    var decode = jwt.verify(token , 'Q-A-Forum');
    await Std.findById( decode._id , async(err , user)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }
    user.tokens = [];
    await user.save();
    res.clearCookie('UserAuthToken');
    res.clearCookie('Usertoken');
    res.redirect('/login');

});
}
});

router.post("/user/login" , async(req , res)=>{
    try {
            const std = await Std.findByCredentials(req.body.useremail , req.body.userpassword);
            const token = await std.generateAuthToken();
            const expiration = process.env.DB_ENV === 'testing' ? 100 : 604800000;
            // res.setHeader('Authorization' , 'Bearer ' + token)
            // res.send(res.getHeader('Authorization').replace('Bearer ' , ''));
            res.cookie('Usertoken' , token , {
                expires : new Date(Date.now() + expiration) ,
                secure : false , 
                httpOnly : true
            }); 
            res.cookie('UserAuthToken' , token , {
                expires : new Date(Date.now() + expiration) ,
                secure : false , 
                httpOnly : true
            }); 

            res.redirect('/allquestions');
    } catch (e) {
                res.render('userLogin' , {error : "Incorrect Email or password !"});
    }

});

// Selecting Questions By Id
router.get('/questions/:id' , async(req , res)=>{
    var token = req.cookies.Usertoken || '';
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    }

    else if(!token){
        res.redirect('/login');
    } else {
    counter++;
    const expiration = process.env.DB_ENV === 'testing' ? 100 : 604800000;
    const questions = Questions;
    // finding the questions
    await questions.findById(req.params.id , async(err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {
        if(result == null){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {
        const QuestionTime = moment(result.createdAt).fromNow('yy');
        var timeAsked = QuestionTime + " ago"
// finding who asked
        await Std.findById(result.ownerUser , async(err , owner)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            } else {
// finding reply            
        await Reply.find({qid : result._id} , async(err , allreply)=>{
                if(err){
                    res.render('erroPage' , {error : "Something Wrong"});
                } else {
// finding answer            
await Ans.find({qid : result._id} , async(err , allans)=>{
    if(err){
        res.render('erroPage' , {error : "Something Wrong"});
    } else {

    Ans.countDocuments({qid : result._id}, async(err, count)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {

    await Questions.find({}).sort({createdAt: 'descending'}).exec(async function(err, allQuestions) { 

    var decode = jwt.verify(token , 'Q-A-Forum');
    await Std.findById( decode._id , (err , user)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {
        if(user == null){
            res.clearCookie('UserAuthToken');
            res.clearCookie('Usertoken');            
            res.render('erroPage' , {error : "Session Expired"});

        }
        
        else{
        res.render('questions' , {question : result , owner : owner , allreply : allreply ,
        allans : allans , timeAsked : timeAsked , user : user , allQuestions : allQuestions , count : count , counter : counter});
        }
    }
    })
})
}
})
}
})
}
})
}
})
}
}
})
}
})

// ask public question
router.get('/questions/user/askpublicquestion' , (req , res)=>{
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    } else {
    res.render('addquestion');
    }
})

router.post('/askpublicquestion' , async(req , res)=>{
    var token = req.cookies.Usertoken || '';
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    }
    else if(!token){
        res.redirect('/login');
    } else {
    var decode = jwt.verify(token , 'Q-A-Forum');
    Std.findById(decode._id , async(err , user)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {
        if(user == null){
            res.clearCookie('UserAuthToken');
            res.clearCookie('Usertoken');            
            res.render('erroPage' , {error : "Session Expired"});
        }
        
        else{
    const question = new Questions({
        title : req.body.title , 
        tags : req.body.tagname , 
        question : req.body.content , 
        ownerUser : decode._id , 
        askedby : user.username , 
        profile : user.profile
    })

    try {
        await question.save();
        res.redirect('/questions/'+question._id);
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }
}
}
})
}
})

router.get('/reply/:id' , (req , res)=>{
    var token = req.cookies.Usertoken || '';
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    }

    else if(!token){
        res.redirect('/login');
    } else{


    res.render('addReply' , {id : req.params.id});
} 
})

router.post('/reply/:id' , async(req , res)=>{
    var token = req.cookies.Usertoken || '';
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    }

    else if(!token){
        res.redirect('/login');
    } else{
    var decode = jwt.verify(token , 'Q-A-Forum');
    Std.findById(decode._id , async(err , userdata)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        if(userdata == null){
            res.clearCookie('UserAuthToken');
            res.clearCookie('Usertoken');            
            res.render('erroPage' , {error : "Session Expired"});
        }
        
        else{
    const reply = new Reply({
        qid : req.params.id , 
        reply : req.body.content , 
        replyby : userdata.username
    })
    try {
        await reply.save();
        res.redirect('/questions/' + req.params.id );
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }
}
})
}
})

// answer user adding

router.post('/useranswer/:id' , async(req , res)=>{
    var token = req.cookies.Usertoken || '';
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    }
    else if(!token){
        res.redirect('/login');
    } else {
    var decode = jwt.verify(token , 'Q-A-Forum');
    
     await Std.findById(decode._id , async(err , user)=>{
        if(user == null){
            res.clearCookie('UserAuthToken');
            res.clearCookie('Usertoken');            
            res.render('erroPage' , {error : "Session Expired"});
        }
        
        else{

     await Ans.countDocuments({qid : req.params.id} , async(err , count)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            } else {
            
           var fcount = count + 1;
           const answers = new Ans({
            qid : req.params.id , 
            answer : req.body.content , 
            answerby : user.username , 
            ansCount : fcount , 
            profile : user.profile
        })
        try {
            await answers.save();
            res.redirect('/questions/'+req.params.id);
        } catch (e) {
            res.render('erroPage' , {error : "Something Wrong"});
        }

    }
    })
}
})

}

})


// Selecting Questions By Id
router.get('/allquestions' , async(req , res)=>{
    var token = req.cookies.Usertoken || '';
    var lastOwner;
    var Authtoken = req.cookies.UserAuthToken || '';
    if(!Authtoken){
        res.redirect('/login');
    }
    else if(!token){
        res.redirect('/login');
    } else {

     Questions.find({} , (err , allQuestions)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

    Questions.find({}).sort({createdAt: 'descending'}).exec(function(err, recent) { 

    var decode = jwt.verify(token , 'Q-A-Forum');
     Std.findById( decode._id , (err , user)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        if(user == null){

            res.clearCookie('UserAuthToken');
            res.clearCookie('Usertoken');            
            res.render('erroPage' , {error : "Session Expired"});
        } else{



     Ans.find({} , async(err , owner)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            }

     res.render('index' , {allQuestions : allQuestions , user : user , moment : moment , owner : owner , recent:recent});
    })

}
     
})
})
})
}
})

router.get('/questionsearch' , (req , res)=>{
    var Authtoken = req.cookies.UserAuthToken || '';
    var token = req.cookies.Usertoken || '';
    if(!Authtoken){
        res.redirect('/login');
    }
    else if(!token){
        res.redirect('/login');
    } else {
    var urlObject = url.parse(req.url , true);
    var searched = urlObject.query.search;
    Questions.findOne({'title' : {"$regex" : searched , "$options" : "i"}} , (err , rs)=>{
        if(err) {
            res.render('erroPage' , {error : "Something Wrong"});
        }

        if(rs == null){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {

             res.redirect('/questions/' + rs._id);
        }


    })
    }
})



router.post('/user/profile', upload.single('avatar'), function (req, res, next) {
    var Authtoken = req.cookies.UserAuthToken || '';
    var token = req.cookies.Usertoken || '';
    if(!Authtoken){
        res.redirect('/login');
    }
    else if(!token){
        res.redirect('/login');
    } else {
    var decode = jwt.verify(token , 'Q-A-Forum');
    Std.findByIdAndUpdate(decode._id , {username : req.body.uname , profile : req.file.filename} , async(err , doc)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }
        await doc.save();
    })

    res.redirect("/allquestions");
}
  })
  
router.get('/signup' , (req , res)=>{
    var Authtoken = req.cookies.UserAuthToken || '';
    var token = req.cookies.Usertoken || '';
    if(!Authtoken){
        res.render('signupuser')
    }
    else if(!token){
        res.render('signupuser')
    }
else{
    res.redirect('/allquestions')
}

})  

router.post('/signup' , async(req , res)=>{
    const std = new Std({
        fname : req.body.fname , 
        lname : req.body.lname , 
        username : req.body.usrnm , 
        email : req.body.email , 
        dept : req.body.Dept ,
        pass : req.body.psw 
    })
    try {
        await std.save();
        const token = await std.generateAuthToken();
        res.redirect('/login');
    } catch (e) {
        res.render('erroPage' , {error : "Email Already Exists"});
    }
})  

router.get('/' , (req , res)=>{
    res.render('home');
})  


router.get('/about' , (req , res)=>{
    res.render('about');
})

router.get('/help' , (req , res)=>{
    res.render('contact' , {error : ""});
}) 


router.post('/send' , (req , res , next)=>{
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'your@gmail.com',
          pass: 'your password'
        }
      });
      
      var mailOptions = {
        from: 'youremail@gmail.com',
        to: 'gomez14325@gmail.com',
        subject: "Need help from " + req.body.firstname + " " +  req.body.lastname,
        text: req.body.subject
      };
      
      transporter.sendMail(mailOptions, function(error, info){
          if (error) {
            console.log(error)
            res.render('erroPage' , {error : "Something Wrong"});
        } else {
            
            res.render('contact' , {error : "Email Sent !"});
        }
      });
})

module.exports = router;