const express = require('express');
const database = require('../db/mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');

const adminAuth = async(req , res , next)=>{
    try {
        const token = req.header('Authorization').replace('Bearer' , '');
        const decode = jwt.verify(token , 'Q-A-Forum');
        const admin = await Admin.findOne({_id : decode._id , "tokens.token" : token});
        if(!admin){
            throw new Error('ma authenticate gareesna');
        }
    
        req.token = token;
        req.admin = admin;
        next();
    } catch (e) {
        res.send("Not found");
    }

}

module.exports = adminAuth;