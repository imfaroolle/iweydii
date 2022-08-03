const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const Questions = require('../models/questions');
const Answers = require('../models/answers');
const Replies = require('../models/replies');

const schema = database.Schema;

const StudentSchema = new schema({
    fname : {
        type : String , 
        required : true , 
        maxlength : 20 , 
        validate(value){
            if(value.length > 19){
                throw new Error('firstname must be less than 19 characters');
            }
        } , 

        trim : true
    } , 

    lname : {
        type : String , 
        required : true , 
        maxlength : 20 , 
        validate(value){
            if(value.length > 19){
                throw new Error('lastname must be less than 19 characters');
            }
        } , 

        trim : true
    } , 

    username : {
        type : String , 
        required : true , 
        maxlength : 30 , 
        validate(value){
            if(value.length > 29){
                throw new Error('fname must be less than 19 characters');
            }
        } , 

        trim : true , 
        lowercase : true
    } , 

    email : {
        type : String , 
        required : true , 
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email');
            }
        } , 

        trim : true , 
        lowercase : true , 
        unique : true
    } ,  

    dept : {
        type : String , 
        default : "not specified" ,  
        trim : true , 
        lowercase : true
    } , 
    
    pass : {
        type : String , 
        minlength : 7 , 
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password must not include -password- phrase');
            }
        }
    } , 

    profile : {
        type : String , 
        default : null
    } , 

    tokens : [{
        token : {
            type : String , 
            required : true
        }
    }]
} , 
{
    timestamps : true
}
)

//generating token 

StudentSchema.methods.generateAuthToken = async function(){
    const std = this;
    try {
        const token = jwt.sign({_id : std._id.toString()} , 'Q-A-Forum');
        std.tokens = std.tokens.concat({token});
        await std.save();
        return token;
    } catch (e) {
        throw new Error('something wrong in generating auth');
    }

}

//password hashing 
StudentSchema.pre('save' , async function(next){
    const std = this;
    try {
        if(std.isModified('pass')){
        std.pass = await bcrypt.hash(std.pass , 8);
    }

    next();

    } catch (e) {
        throw new Error('somethin wrong before saving');
    }

})


StudentSchema.statics.findByCredentials = async (email , password)=>{
    const std = await Std.findOne({ email });
    if(!std){
        throw new Error("email  is incorrect");
    }

    const isMatch = await bcrypt.compare(password , std.pass);
    if(!isMatch){

        throw new Error("incorrect password");
    }

    return std;
}


StudentSchema.pre("remove" , async function(next){
    const Std = this;
    await Questions.deleteMany({ownerUser : Std._id});
    next();
})

const Std = database.model('student' , StudentSchema);

module.exports = Std;