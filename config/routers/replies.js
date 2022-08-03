const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Reply = require('../models/replies');
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



// creating replies
router.post('/replycreating' , async(req , res)=>{
    var token = req.cookies.token || '';
    if(!token){
        res.redirect('/qafadmin');
    }
    var decode = jwt.verify(token , 'Q-A-Forum');
    Admin.findById(decode._id , async(err , adminData)=>{
        if(err){

        }
    const reply = new Reply({
        qid : req.body.qid , 
        reply : req.body.iqc , 
        replyby : "admin-" + adminData.username
    })
    try {
        await reply.save();
        res.redirect('/admin');
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }
})
})


// displaying data in the table

router.get('/admin/replyTable' , (req , res)=>{
    const reply = Reply;
    reply.find({} , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }


                res.render('replyTable' , {data : result});
        })

    })


// displaying data in the external form
router.get('/admin/reply/update/:id' , (req , res)=>{
    const reply = Reply;
    reply.findById(req.params.id , (err , result)=>{
        if(err){
            res.render('erroPage' , {error : "Something Wrong"});
        }

        res.render('updateReply' , {DataUpdate : result})
        
    })
})




// updating admin Using Data that has been displayed in th externall form
router.post('/admin/reply/update', async(req , res)=>{
    const reply = Reply;

    try {
        await reply.findById(req.body.rid , async(err , doc)=>{
            if(err){
                res.render('erroPage' , {error : "Something Wrong"});
            }
    
            doc.qid = req.body.qid ;
            doc.reply = req.body.uiqc  ;

            await doc.save();
            res.redirect('/admin');
        });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }

})

//deleting data in admin table 
router.get('/admin/deletingtreply/:id', async(req , res)=>{

    const reply = Reply;
    try {
        await reply.findOneAndDelete({_id : req.params.id} , async(err , doc)=>{
    });
    } catch (e) {
        res.render('erroPage' , {error : "Something Wrong"});
    }


    res.redirect('/admin');

})


module.exports = router;