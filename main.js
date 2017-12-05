var express = require('express');
var path = require('path');
var app =  express();
var bodyParser = require('body-parser');

var index = require('./routes/index');
var post = require('./routes/post');
var email = require('./routes/email');
var assem = require('./routes/assembly');
var upload = require('./routes/upload');
var buildPlan = require('./routes/buildPlan');
var sumrep = require('./routes/sumrep');
var pnrep = require('./routes/pnrep');


app.set('views','./views');
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/',index);
app.use('/post',post);
app.use('/email',email);
app.use('/assembly',assem);
app.use('/upload',upload);
app.use('/buildPlan',buildPlan);
app.use('/sumrep',sumrep);
app.use('/pnrep',pnrep);


app.listen(3001);

console.log("I'm listening port: 3001");

module.exports = app;
