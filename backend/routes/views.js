module.exports = (app)=>{
    //Gets
    app.get("/",(req,res)=>{
        res.send("Yo soy user de page /");
    });
    app.get("/route",(req,res)=>{
        res.send("Yo soy user de page /route");
    });
    app.get("*",(req,res)=>{
        res.send("Yo soy user de cualquier otra pagina");
    });
}