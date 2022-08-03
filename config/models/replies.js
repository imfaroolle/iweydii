const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const schema = database.Schema;

const RepliesSchema = new schema({
    qid : {
        type : database.Schema.Types.ObjectId , 
        required : true , 
        ref : 'Questions'
    } , 

    
    reply : {
        type : String , 
        required : true , 
        trim : true , 
        lowercase : true ,
        maxlength : 200 
    } , 

    replyby : {
        type : String , 
        required : true ,
        default : 'admin' , 
        trim : true , 
        lowercase : true ,
    }
    
} , 
    {
        timestamps : true
    }
)

const Reply = database.model('replies' , RepliesSchema);

module.exports = Reply;