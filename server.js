////////Imports
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
const validate = require("mongoose-validator");
// mongoose.Promise = global.Promise;

///////Config FILES
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.use(flash());
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(express.urlencoded({extended: true}));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "keyboardkitten",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}));

//Database
mongoose.connect('mongodb://localhost/restful_task_API');
require('./config/mongoose.js');

//Routes
require('./config/routes.js')(app);

//Port
app.listen(5000, function(){
    console.log("Listening on port: 5000");
})