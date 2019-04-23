const  users= require("../resources/users");
module.exports={
    getUser:function(){
        console.log("index js db todos!!1");
        return users;

    },
    getUserById:function(id){
        console.log("index js db solo user");
        return users.filter(user=>user._id===id);
    }
};