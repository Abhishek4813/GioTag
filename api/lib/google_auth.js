const passport= require('passport');
const usermodel = require('../models/users');
const GoogleStrategy=require("passport-google-oauth").OAuth2Strategy;
passport.use(new GoogleStrategy({
    clientID:"632110571677-9qs7utiv65730a23prj1i76umsms5tj1.apps.googleusercontent.com",
    clientSecret:"9VzPe9JJx_csRmhjzrM40NBM",
    callbackURL:'/users/google/callback',
},
function(accessToken,refreshToken,profile,done){
    usermodel.findOne({email:profile._json.email},function(err,user){
        if(user===null){
            user=new usermodel({
                email:profile._json.email,
                name: profile._json.name,
            });
            user.save()
            .then(succ=>{
                return done(err,{email:profile._json.email,name:profile._json.name});
            })
        }
        else{
            return done(err,user);
        }
    })
    }))