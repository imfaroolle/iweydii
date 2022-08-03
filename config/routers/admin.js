const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
var   moment = require('moment');
const Admin = require('../models/admin');
const Std = require('../models/student');
const Answers = require('../models/answers');
const Questions = require('../models/questions');
const adminAuth = require('../middleware/adminAuth');
const bodyparser = require('body-parser');
const path = require('path');
const cookieparser = require('cookie-parser');
const dotenv = require('dotenv')
const router = express.Router();
dotenv.config();
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

// local variables
const StaticFiles = path.join(__dirname , '/public');
const app = express();
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine' , 'ejs');
app.use(express.static(StaticFiles));
app.use(express.json());
router.use(express.json());
app.use(cookieparser());
router.use(cookieparser());

// app.set('views' , viewPath);

// creating admin

router.get('/logout' , (req , res)=>{
    var token = req.cookies.token || '';
    var adminAuth = req.cookies.adminAuth || '';
    if(!adminAuth){
        res.render('login')
    }
    else if(!token){
        res.redirect('/qafadmin');
    } else {

    res.clearCookie('adminAuth');
    res.redirect('/qafadmin');
    }
})

router.get("/admin/logoutAll" , async(req , res)=>{
    var token = req.cookies.token || '';
    var Authtoken = req.cookies.adminAuth || '';
    if(!Authtoken){
        res.redirect('/qafadmin');
    }
    else if(!token){
        res.redirect('/qafadmin');
    } else {
    var decode = jwt.verify(token , 'Q-A-Forum');
    await Admin.findById( decode._id , async(err , user)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {
    user.tokens = [];
    await user.save();
    res.clearCookie('token');
    res.clearCookie('adminAuth');
    res.redirect('/qafadmin');
        }
});
}
});



// login admin

router.get("/qafadmin" , async(req , res)=>{
    var token = req.cookies.token || '';
    var Authtoken = req.cookies.adminAuth || '';
    if(!Authtoken){
        res.render('login' , {error : ""});
    }
    else if(!token){
        res.render('login' , {error : ""});
    } else {
    res.redirect('/admin')
    }
});

router.post("/admin/login" , async(req , res)=>{
    try {
            const admin = await Admin.findByCredentials(req.body.email , req.body.password);
            const token = await admin.generateAuthToken();
            const expiration = process.env.DB_ENV === 'testing' ? 100 : 604800000;
            // res.setHeader('Authorization' , 'Bearer ' + token)
            // res.send(res.getHeader('Authorization').replace('Bearer ' , ''));
            res.cookie('token' , token , {
                expires : new Date(Date.now() + expiration) ,
                secure : false , 
                httpOnly : true
            }); 

            res.cookie('adminAuth' , token , {
                expires : new Date(Date.now() + expiration) ,
                secure : false , 
                httpOnly : true
            }); 


            res.redirect('/admin');
    } catch (e) {
                res.render('login' , {error : "Incorrect Email or password !"});
    }

});



// creating admin
router.post('/admincreating' , async(req , res)=>{
    var Authtoken = req.cookies.adminAuth || '';
    // if(!Authtoken){
    //     res.redirect('/qafadmin');
    // }
    const admin = new Admin({
        fname : req.body.fname , 
        lname : req.body.lname , 
        username : req.body.usrnm , 
        email : req.body.email , 
        pass : req.body.psw 
    })
    try {
        await admin.save();
        const token = await admin.generateAuthToken();
        res.redirect('/admin');
    } catch (e) {
        res.render('erroPage' , {error : "Email Already Exists"});
    }
})


// displaying data in the table

router.get('/admin'  , (req , res)=>{
    var token = req.cookies.token || '';
    var Authtoken = req.cookies.adminAuth || '';
    if(!Authtoken){
        res.redirect('/qafadmin');
    }
    else if(!token){
        res.redirect('/qafadmin');
    } else {
    const admin = Admin;
    admin.find({} , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {

    var decode = jwt.verify(token , 'Q-A-Forum');
    admin.findById(decode._id , (err , adminData)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {

        if(adminData == null){
            res.clearCookie('token');
            res.clearCookie('adminAuth');
            res.render('erroPage' , {error : "Session Expired"});
        } else{

Answers.estimatedDocumentCount({} , (err , countans)=>{
    if(err){
        res.render('erroPage' , {error : "Something Wrong"});
    } else {

Questions.estimatedDocumentCount({} , (err , countAllquestion)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {

        const today = moment().startOf('day');
        const weak = moment().startOf('week');
Questions.countDocuments({createdAt : {$gte: today.toDate(),  $lte: moment(today).endOf('day').toDate()   }} , (err , todayQuestions)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {    

Questions.countDocuments({createdAt : {$gte: weak.toDate(),  $lte: moment(weak).endOf('week').toDate()   }} , (err , weaksQuestion)=>{
    if(err){
        res.render('erroPage' , {error : "Something Wrong"});
    } else {
Std.estimatedDocumentCount({} , (err , usersCount)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        } else {


        res.render('admin' , {admins : result , adminData : adminData , countans : countans , countAllquestion : countAllquestion , 
            todayQuestions : todayQuestions , weaksQuestion : weaksQuestion , usersCount : usersCount});
}
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
}
})


// displaying data in the external form
router.get('/admin/update/:id' , (req , res)=>{
    var Authtoken = req.cookies.adminAuth || '';
    if(!Authtoken){
        res.redirect('/qafadmin');
    }
    const admin = Admin;
    admin.findById(req.params.id , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        res.render('updateAdmin' , {DataUpdate : result})
    })
})




// updating admin Using Data that has been displayed in th externall form
router.post('/admin/update', async(req , res)=>{
    var Authtoken = req.cookies.adminAuth || '';
    if(!Authtoken){
        res.redirect('/qafadmin');
    }
    const admin = Admin;

    try {
        await admin.findById(req.body.idAdmin , async(err , doc)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            }
    try {
                doc.fname = req.body.fname ;
        doc.lname = req.body.lname  ;
        doc.username = req.body.usrnm ;
        doc.email = req.body.email ;
        doc.pass = req.body.psw ;
        await doc.save();
        res.redirect('/admin');
    } catch (e) {
        res.render('erroPage' , {error : "Email Already Exists"});
    }

        });
    } catch (e) {
        res.render('erroPage' , {error : "Email Already Exists"});
    }

})

//deleting data in admin table 
router.get('/admin/deletingadmin/:id', async(req , res)=>{
    var Authtoken = req.cookies.adminAuth || '';
    if(!Authtoken){
        res.redirect('/qafadmin');
    }
    const admin = Admin;
    try {
        await admin.findOneAndDelete({_id : req.params.id} , async(err , doc)=>{
    });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});    }


    res.redirect('/admin');

})

router.post('/admin/profile', upload.single('avatar'), function (req, res, next) {
    var token = req.cookies.token || '';
    var Authtoken = req.cookies.adminAuth || '';
    if(!Authtoken){
        res.redirect('/qafadmin');
    }
    if(!token){
        res.redirect('/qafadmin');
    }
    var decode = jwt.verify(token , 'Q-A-Forum');
    Admin.findByIdAndUpdate(decode._id , {username : req.body.uname , profile : req.file.filename} , async(err , doc)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }
        await doc.save();
    })

    res.redirect("/admin");
  })
  

module.exports = router;