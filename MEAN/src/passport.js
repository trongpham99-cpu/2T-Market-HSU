const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JWTStrategy = require('passport-jwt').Strategy;
const User = require('./models/user.model');
const dotenv= require('dotenv');
const userSchema = require('./schemas/user.schema');
const Database = require('./database')
const bcrypt = require('bcrypt');
dotenv.config();
const cookieExtractor= req=>{
    let token= null;
    if(req&&req.cookies){
        token= req.cookies["access_token"];
    }
    return token;
}
//authorrization 
passport.use(new JWTStrategy({
    jwtFromRequest : cookieExtractor,
    secretOrKey:"Trong@99"

},

    async (payload,done)=>{
        await Database.instance.findById({_id:payload.sub},
      
        (err,user)=>{
            if(err)return done(err,false);

            if(user) return done(null,user);
            else return done(null,false);
        })
}))
//authenicated local strategy using username and passwd
passport.use(new LocalStrategy( async (username,password,done)=>{
 let user =await Database.instance.findUser(username);
 if(!user) return done(null,false);
 console.log(user)
 bcrypt.compare(password, user[0].userPassword, function(err,cb){
                    if(cb){
                       return true
                    }
                    else {
                        return false
                    }
            })
})

)