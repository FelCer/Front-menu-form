const API_BASE = "/api"
const db = require ("../db");

module.exports= function (app){
    app.get(`${API_BASE}/users`, (req,res)=>{
        const query = db.getUser();
        res.json(query);
        console.log(query);
        console.log("navegando 1");
    }),
    app.get(`${API_BASE}/user/:id`, (req,res)=>{
        const query = db.getUserById(req.params.id);
        res.json(query);
        console.log(query);
        console.log("navegando 2");
    })
};