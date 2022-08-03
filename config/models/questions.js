const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const Answers = require('../models/answers');
const Reply = require('../models/replies');
const schema = database.Schema;
var today = new Date();
const QuestionsSchema = new schema({
    title : {
        type : String , 
        required : true ,
        trim : true , 
        maxlength : 60
    } , 
    
    tags : {
        type : String , 
        required : true , 
        trim : true , 
        lowercase : true , 
        maxlength : 30
    } , 

    question : {
        type : String , 
        required : true , 
        trim : true , 
        maxlength : 800 

    } , 

    ownerUser : {
        type : database.Schema.Types.ObjectId , 
        required : true , 
        ref : 'students'
    } , 

    askedby : {
        type : String ,
        default : "admin" , 
        trim :true 
    } , 

    profile : {
        type : String , 
        default : null
    } , 

    date : {
        type : Date , 
        default: today.getDate()
    }
} , 
    {
        timestamps : true
    }
)

QuestionsSchema.pre("remove" , async function(next){
    const question = this;
    await Answers.deleteMany({qid : question._id});
    await Reply.deleteMany({qid : question._id});
    next();
})


const Questions = database.model('Questions' , QuestionsSchema);

module.exports = Questions;