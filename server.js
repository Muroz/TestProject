//set up

// require all the tools needed
var express = require('express');
var app = express();
var port = 8080;
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var path = require('path');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var moment = require('moment');
var multer = require('multer');
var configDB = require('./config/database.js');

// configuration



mongoose.connect(configDB.url); // connect to our database

require('./config/passport')(passport); // pass passport for configuration

//set up the express application

app.use(express.static(__dirname + '/public'));

app.use(morgan('dev')); // log every request to the console
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser()); // get information from html forms

app.set('view engine', 'ejs'); // set up ejs for templating

// required for passport
app.use(session({ secret: 'ilovevodkavodkavodkavodka' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

//routes
require('./app/routes.js')(app,passport); // load our routes and pass in our app and fully configure passport

// launch
app.listen(port);
console.log('The magic happens on port ' + port);
