const passport=require("passport");
const LocalStrategy=require('passport-local').Strategy;
const usermodel=require("../models/users");
const bcrypt = require("bcryptjs");
passport.use(new LocalStrategy({
    usernameField:'email',
},function(email,password,done){
    let userdata;
    usermodel.findOne({email:email})
    .then(user=>{
        userdata=user;
        return bcrypt.compare(password,user.password);
    })
    .then(status=>{
        if(status)
            return done(null,userdata);
        return done(null,status);
    })
    .catch(err=>{
        done(err);
        //if email do not exist return status 500
    })
}));
passport.serializeUser(function(user,done){
    return done(null,user.email);
});
passport.deserializeUser(function(email,done){
    return usermodel.findOne({email:email})
    .then(user=>done(null,user))
    .catch(err=>done(err));
});