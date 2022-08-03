const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Std = require('../models/student');
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



// creating Student
router.post('/stdcreating' , async(req , res)=>{
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
        res.redirect('/admin');
    } catch (e) {
        res.render('erroPage' , {error : "Email Already Exists"});
    }
})


// displaying data in the table

router.get('/admin/UsersTable' , (req , res)=>{
    const std = Std;
    std.find({} , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        res.render('UsersTable' , {DataUpdate : result});
    })
})

// displaying data in the external form
router.get('/admin/users/update/:id' , (req , res)=>{
    const std = Std;
    std.findById(req.params.id , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        res.render('updateUsers' , {DataUpdate : result})
    })
})




// updating admin Using Data that has been displayed in th external form
router.post('/admin/users/update', async(req , res)=>{
    const std = Std;

    try {
        await std.findById(req.body.idUser , async(err , doc)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
                
            }
    try {
            doc.fname = req.body.fname ;
            doc.lname = req.body.lname  ;
            doc.username = req.body.usrnm ;
            doc.email = req.body.email ;
            doc.dept = req.body.dept ;
            doc.pass = req.body.psw ;
    
            await doc.save();
            res.redirect('/admin');
    } catch (e) {
        
            res.render('erroPage' , {error : "Email Already Exists"});
    }

        });
    } catch (e) {

    }

})

//deleting data in admin table 
router.get('/admin/users/delete/:id', async(req , res)=>{

    const std = Std;
    try {
        await std.findOneAndDelete({_id : req.params.id} , async(err , doc)=>{
    });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }


    res.redirect('/admin');

});


module.exports = router;