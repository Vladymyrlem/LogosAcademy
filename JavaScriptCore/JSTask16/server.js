const http = require("http");
const fs = require("fs");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const jsonParser = bodyParser.json();

app.use(express.static(__dirname));
app.get("/", function(request, response){
    console.log("Start page requested.");
});

app.get("/userDataGet", function (request, response) {
    console.log("Form receipted by GET.");
    console.log(request.query);
    let obj = request.query;
    obj.lastName;
     obj.firstName;
     var str = JSON.stringify(obj);
     var res = JSON.parse(str);
response.send(JSON.stringify(obj));
});
app.post("/userDataPost", function (request, response) {
    console.log("Form receipted by POST.");
     console.log(request.body);
    var obj =request.query;
     obj.firstName;
     obj.lastName;
    var strJson = JSON.stringify(obj);
    var res = JSON.parse(strJson);
        response.send(strJson);
});
 app.listen(3003);