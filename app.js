const express = require('express');
const bodyparser = require('body-parser');
const jwt = require('jsonwebtoken');
const path = require('path');
const cookieparser = require('cookie-parser');
var moment = require('moment');
var nodemailer = require('nodemailer');

// external js modules
const adminRouter = require('./config/routers/admin');
const stdrouters = require('./config/routers/student');
const questionRouters = require('./config/routers/questions');
const answerRouters = require('./config/routers/answers');
const replyRouters = require('./config/routers/replies');
const clientRouter = require('./config/routers/client');
var multer  = require('multer');
// local variables
const app = express();
const StaticFiles = path.join(__dirname , '/public');
const StaticFiles2 = path.join(__dirname , '/uploads');
app.set('view engine' , 'ejs');
app.use(bodyparser.urlencoded({extended : true}));
app.use(express.static(StaticFiles));
app.use(express.static(StaticFiles2));
app.use(adminRouter);
app.use(stdrouters);
app.use(questionRouters);
app.use(answerRouters);
app.use(replyRouters);
app.use(clientRouter);
app.use(express.json());
app.use(cookieparser());
var upload = multer({ dest: 'public/uploads/' })

// const port = process.env.PORT || 3000;

// app.listen(port , (e)=>{
//     console.log('app is runnig on port ' + port);
// })