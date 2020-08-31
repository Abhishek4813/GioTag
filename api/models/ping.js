"use strict";
const mongoose=require("mongoose");
const pingschema=new mongoose.Schema({
    email:String,
    ping:{
        position:[{type:Number}],
        draggable:Boolean,
        title:String,
    },
});
const pingmodel=mongoose.model('pings',pingschema);
module.exports=pingmodel;