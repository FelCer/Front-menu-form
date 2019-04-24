const API_BASE = "/api"
const db = require("../db");
var bodyParser = require('body-parser');
module.exports = function (app) {
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  }),
  // app.use(bodyParser.urlencoded({
  //   extended: false
  // })),
    app.get(`${API_BASE}/list`, (req, res) => {
      const query = db.getListado();
      res.json(query);
      console.log(query);
      console.log("navegando 1");
    }),

    app.post('/api/datos', (req, res,next) => {
      let rta = req.body;
      console.log("llega"+rta);
      res.send("Okey peticion exitosa."+rta);
    })

};
