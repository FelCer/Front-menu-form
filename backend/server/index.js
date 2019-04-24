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
