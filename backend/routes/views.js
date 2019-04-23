module.exports = (app)=>{
    app.get("/",(req,res)=>{
        res.send("Yo soy user de page /");
    });
    app.get("/route",(req,res)=>{
        res.send("Yo soy user de page /route");
    });
    app.get("*",(req,res)=>{
        res.send("Yo soy user de");
    });
}