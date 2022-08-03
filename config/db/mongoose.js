const database = require('mongoose');

database.connect('mongodb://127.0.0.1:27017/Q-A-Forum' , {
    useNewUrlParser : true , 
    useCreateIndex : true , 
    useFindAndModify : false , 
    useUnifiedTopology : true
});

module.exports = database;