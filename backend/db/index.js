const  listado= require("../resources/listado");
module.exports={
    getListado:function(){
        console.log("index js db todos!!1");
        return listado;
    },
    getListadoById:function(id){
        console.log("index js db solo user");
        return listado.filter(user=>user._id===id);
    }
};
