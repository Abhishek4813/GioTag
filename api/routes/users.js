const express = require('express');
const router = express.Router();
const usermodel=require("../models/users");
const bcrypt=require('bcryptjs');
const passport=require('passport');

/* GET users listing. */
router.post('/signup',function(req, res, next){
  var {Name,Password,Email}=req.body;
  console.log(Name);
  usermodel.findOne({email:Email})
  .then((data)=>{
    if(data==null){
      bcrypt.hash(Password,8,function(err,pass_hashed){
        const user=new usermodel({
          name:Name,
          password:pass_hashed,
          email:Email,
        })
        user.save()
        .then((succ)=>{
          res.status(200).json({status:"Success"});
        })
        .catch((err)=>{
          console.log(err);
        })
      })
    }
    else{
      res.status(200).json({status:"User Exist"});
    }
  })
  .catch((err)=>{
    console.log(err);
  })
});

router.get("/username",function(req,res,next){
  res.status(200).json({name:(req.user.name.split(" "))[0]});
})

router.post("/login",passport.authenticate("local"),function(req,res){
res.status(200).json({Status:"success"});
 //if login failed autometucally send response status 401(Unauthorized);
});
router.get('/google',passport.authenticate('google',{
  scope:['profile','email']
}));

router.get('/failed',function(req,res,next){
  res.status(200).json({status:"failed"
  })
})
router.get('/google/callback',passport.authenticate('google',{ failureRedirect: '/failed'})
,function(req,res){
  res.redirect('/');
}
);

module.exports = router;
