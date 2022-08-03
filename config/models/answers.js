const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const schema = database.Schema;

const AnswersSchema = new schema({
    qid : {
        type : database.Schema.Types.ObjectId , 
        required : true , 
        ref : 'Questions'
    } , 
    
    answer : {
        type : String , 
        required : true , 
        trim : true , 
        lowercase : true ,
        maxlength : 1000 
    } , 

    answerby : {
        type : String , 
        default : "admin" , 
        trim : true , 
        lowercase : true ,
    } , 

    profile : {
        type : String , 
        default : null
    } , 

    ansCount : {
        type : Number , 
        trim : true , 
        lowercase : true ,
        default : 0 
    }
    
} , 
    {
        timestamps : true
    }
)

const Answers = database.model('answers' , AnswersSchema);

module.exports = Answers;