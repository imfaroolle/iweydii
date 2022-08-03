const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const validator = require('validator');

const schema = database.Schema;

const AdminSchema = new schema({
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

AdminSchema.methods.generateAuthToken = async function(){
    const admin = this; 
    try {
        const token = jwt.sign({_id : admin._id.toString()} , 'Q-A-Forum');
        admin.tokens = admin.tokens.concat({token});
        await admin.save();
        return token;
    } catch (e) {
        throw new Error('something wrong in generating auth');
    }

}

//password hashing 
AdminSchema.pre('save' , async function(next){
    const admin = this;
    try {
        if(admin.isModified('pass')){
        admin.pass = await bcrypt.hash(admin.pass , 8);
    }

    next();

    } catch (e) {
        throw new Error('somethin wrong before saving');
    }

}) 


AdminSchema.statics.findByCredentials = async (email , password)=>{
    const admin = await Admin.findOne({ email });
    if(!admin){
        throw new Error("email  is incorrect");
    }

    const isMatch = await bcrypt.compare(password , admin.pass);
    if(!isMatch){

        throw new Error("incorrect password");
    }

    return admin;
}


const Admin = database.model('Admin' , AdminSchema);

module.exports = Admin;