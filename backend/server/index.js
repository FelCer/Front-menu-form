var express = require('express');
var app = express();
//const {PORT}=require("../");
const PORT = 3000;
require("../routes/api") (app);
require("../routes/views")(app);


function init (){
  console.log ("inicializando ..");
  app.listen(PORT, () =>{
    console.log ("esta activo ..");
  });
}

init();

//app.get('/', function (req, res) {
//  res.send('Hola Dani');
//  console.log(req.headers);
//});
//
//app.get('/daniDos', function (req, res) {
//  res.send('Hola Dani2');
//});
//
//app.get('/about', function (req, res) {
//  res.send('about');
//});
//
//app.post('/about22', function (req, res) {
//  res.send('Got a POST request');
//});
//
//app.listen(3000, function () {
//console.log(`Server running at port ${PORT}`);
//});