var express = require("express");
var bodyParser = require("body-parser");
var fs = require("fs");

var app = express();
var jsonParser = bodyParser.json();

app.use(express.static(__dirname));
// получение списка данных
app.get("/api/usersGet", function(req, res){

  var content = fs.readFileSync("users.json", "utf8");
  var users = JSON.parse(content);
  res.send(users);
});
// получение одного пользователя по id
app.get("/api/usersGet", function(req, res){

  var id = req.params.id; // получаем id
  var content = fs.readFileSync("users.json", "utf8");
  var users = JSON.parse(content);
  var user = null;
  // находим в массиве пользователя по id
  for(var i=0; i<users.length; i++){
    if(users[i].id==id){
      user = users[i];
      break;
    }
  }
  // отправляем пользователя
  if(user){
    res.send(user);
  }
  else{
    res.status(404).send();
  }
});
// получение отправленных данных
app.post("/api/usersPost", jsonParser, function (req, res) {

  if(!req.body) return res.sendStatus(400);

  var userFirstName = req.body.userFirstName;
  var userLastName = req.body.userLastName;
  var userAge = req.body.userAge;
  var userAdr = req.body.userAddress;
  var user = {userFirstName: userFirstName,userLastName: userLastName, userAge: userAge, adr: userAdr};

  var data = fs.readFileSync("users.json", "utf8");
  var users = JSON.parse(data);

  // находим максимальный id
  var id = Math.max.apply(Math,users.map(function(o){return o.id;}));
  // увеличиваем его на единицу
  user.id = id+1;
  // добавляем пользователя в массив
  users.push(user);
  var data = JSON.stringify(users);
  // перезаписываем файл с новыми данными
  fs.writeFileSync("users.json", data);
  res.send(user);
});


// app.listen(3000);
app.listen(3003);