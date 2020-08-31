const express = require('express');
const router = express.Router();
const path=require('path');
const ping=require('../models/ping');

/* GET home page. */
router.get('/',function(req,res,next){  
    res.sendFile(path.join(__dirname,"../",'build','index.html'));
}
)
router.get('/status',function(req,res,next){
    if(req.isAuthenticated()){
        res.status(200).json({status:'authenticated'});
    }
    else{
        res,status(200).json({status:"failed"});
    }
})

router.post("/add/location",function(req,res,next){
    var {draggable,title}=req.body;
    var position=req.body.position;
    var counter=0;
    ping.findOne({email:req.user.email,"ping.position":position})
    .then(data=>{
        if(data===null){
            ping.find({"ping.position":position})
            .then(c=>{
                counter=c.length;
                })
            var data=new ping({
                email:req.user.email,
                ping:{
                position:position,
                draggable:draggable,
                title:"<center><h3>"+(counter+1).toString()+" People already pinged this location</h3></center><hr/><p>"+title+"</p>",
                }
            })
            data.save()
            .then(succ=>{
                res.status(200).json({Status:"success"})
            })
        }
        else{
            res.status(200).json({Status:'exist'});
        }
    })
    .catch(err=>{
        console.log(err);
    })
})

router.get('/all/pings',function(req,res,next){
    ping.find()
    .then(data=>{
        var response=data.map((val)=>{
            return val.ping;
        })
        res.status(200).json(response);
    })
})
router.get('/my/pings',function(req,res,next){
    ping.find({email:req.user.email})
    .then(data=>{
        var response=data.map((val)=>{
            return val.ping;
        })
        res.status(200).json(response);
    })
})
router.get("/logout",function(req,res,next){
    req.session.destroy();
    res.redirect('/');

})

router.delete('/delete/location',function(req,res,next){
    var title=req.body.title;
ping.deleteOne({
    email:req.user.email,
    "ping.title":title,
},function(err,succ){
    if(succ){
        if(succ.deletedCount===0){
            res.status(200).json({status:"not"});
            return;
        }
        ping.find({email:req.user.email})
        .then(data=>{
            var response=data.map((val)=>{
                return val.ping;
            })
            res.status(200).json(response);
    }
)

}
})
})

module.exports = router;
