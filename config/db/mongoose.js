const database = require("mongoose");
const MONGODB_URL =
  "mongodb+srv://faroolle:<password>@cluster0.ug70i.mongodb.net/?retryWrites=true&w=majority";
database.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

module.exports = database;
