const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Answers = require('../models/answers');
const Admin = require('../models/admin');
const Std = require('../models/student');
const adminAuth = require('../middleware/adminAuth');
const bodyparser = require('body-parser');
const path = require('path');
const router = express.Router();

// local variables
const StaticFiles = path.join(__dirname , '/public');
const app = express();
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine' , 'ejs');
app.use(express.static(StaticFiles));


// app.set('views' , viewPath);



// creating Answer
router.post('/answercreating' , async(req , res)=>{
    var token = req.cookies.token || '';
    if(!token){
        res.redirect('/qafadmin');
    }
    Answers.countDocuments({qid : req.body.qid} , async(err , count)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

    var decode = jwt.verify(token , 'Q-A-Forum');
    Admin.findById(decode._id , async(err , adminData)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            }
    
       var fcount = count + 1;
    const answers = new Answers({
        qid : req.body.qid , 
        answer : req.body.newAns , 
        answerby : 'admin - ' + adminData.username , 
        ansCount : fcount  , 
        profile : adminData.profile
    })

    try {
        await answers.save();
        res.redirect('/admin');
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }
})
})
})

// displaying data in the table

router.get('/admin/answerTable' , (req , res)=>{
    const answers = Answers;
    answers.find({} , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

                res.render('ansTable' , {data : result});
        })

    })


// displaying data in the external form
router.get('/admin/answer/update/:id' , (req , res)=>{
    const answers = Answers;
    answers.findById(req.params.id , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        res.render('updateAns' , {DataUpdate : result})
        
    })
})




// updating admin Using Data that has been displayed in th externall form
router.post('/admin/answer/update', async(req , res)=>{
    const answers = Answers;

    try {
        await answers.findById(req.body.aid , async(err , doc)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            }
    try {
            doc.qid = req.body.qid ;
            doc.answer = req.body.ansup  ;

            await doc.save();
            res.redirect('/admin');
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }

        });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }

})

//deleting data in admin table 
router.get('/admin/deletinganswer/:id', async(req , res)=>{

    const answers = Answers;
    try {
        await answers.findOneAndDelete({_id : req.params.id} , async(err , doc)=>{
    });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }


    res.redirect('/admin');

})


module.exports = router;