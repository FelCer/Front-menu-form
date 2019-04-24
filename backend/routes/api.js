const API_BASE = "/api"
const db = require ("../db");

module.exports= function (app){

    app.get(`${API_BASE}/list`, (req,res)=>{
      res.header('Access-Control-Allow-Origin', '*');
      res.header("Allow: GET, POST, OPTIONS, PUT, DELETE");
        const query = db.getListado();
        res.json(query);
        console.log(query);
        console.log("navegando 1");
    }),
    app.post(`${API_BASE}/datos`, function (req, res) {
       res.header('Access-Control-Allow-Origin', '*');
       res.header("Allow: GET, POST, OPTIONS, PUT, DELETE");
        const query = db.postFormulario();
        res.json(query);
        console.log(query);
    });
};
