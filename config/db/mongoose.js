const database = require('mongoose');
const MONGODB_URL = "mongodb+srv://faroolle:anaaleh5533@cluster0.ug70i.mongodb.net/Q-A-Forum?retryWrites=true";
database.connect(MONGODB_URL, {
    useNewUrlParser : true , 
    useCreateIndex : true , 
    useFindAndModify : false , 
    useUnifiedTopology : true
});

module.exports = database;