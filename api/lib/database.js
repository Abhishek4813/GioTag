'use strict';
const mongoose=require("mongoose");
function connect(){
    mongoose.connect("mongodb+srv://hackvsit:Abhi@1234@hackvsit-0ke3z.mongodb.net/pings?retryWrites=true&w=majority",{
        useNewUrlParser:true,
        useUnifiedTopology: true,
    });
    const connection=mongoose.connection;
    connection.on("error",function(err){
        console.log("server id down");
        throw err;
    });
    connection.on("open",function(){
        console.log("successfully connected");
    });
}
module.exports={
    connect:connect,
}