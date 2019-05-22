var express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    multer = require('multer')(),
logger = require('morgan'),
    fs = require('fs'),
    http = require('http');

var app = express();
var port = 31416;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('short'));
app.use('/jsBundles',express.static('lib'));
app.get('/', function(request, response){
    response.sendFile(__dirname + '/index.html');
});

var server = http.createServer(app).listen(port, function(){
    console.log("I feel a disturbance in the port:" + port);
});