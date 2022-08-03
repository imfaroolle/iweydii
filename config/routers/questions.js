const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Questions = require('../models/questions');
const Std = require('../models/student');
const Ans = require('../models/answers');
const Admin = require('../models/admin');
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

// creating admin
router.post('/questioncreating' , async(req , res)=>{
    var token = req.cookies.token || '';
    if(!token){
        res.redirect('/qafadmin');
    }
    var decode = jwt.verify(token , 'Q-A-Forum');
    Admin.findById(decode._id , async(err , adminData)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

    const question = new Questions({
        title : req.body.title , 
        tags : req.body.tagname , 
        question : req.body.content , 
        ownerUser : decode._id , 
        askedby : "admin-" + adminData.username , 
        profile : adminData.profile
    })

    try {
        await question.save();
        res.redirect('/admin');
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }
})
})


// displaying data in the table

router.get('/admin/questionTable' , (req , res)=>{
    const question = Questions;
    question.find({} , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }


                res.render('questionTable' , {data : result});
        })

})


// displaying data in the external form
router.get('/admin/question/update/:id' , (req , res)=>{
    const question = Questions;
    question.findById(req.params.id , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        res.render('updateQuestion' , {DataUpdate : result})
        
    })
})




// updating admin Using Data that has been displayed in th externall form
router.post('/admin/question/update', async(req , res)=>{
    const question = Questions;

    try {
        await question.findById(req.body.QId , async(err , doc)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            }
    
            doc.title = req.body.title ;
            doc.tags = req.body.tagname  ;
            doc.question = req.body.UpdQ ;
    
            await doc.save();
            res.redirect('/admin');
        });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }

})

//deleting data in admin table 
router.get('/admin/deletingQuestion/:id', async(req , res)=>{

    const question = Questions;
    try {
        await question.findOneAndDelete({_id : req.params.id} , async(err , doc)=>{
    });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }


    res.redirect('/admin');

})




module.exports = router;