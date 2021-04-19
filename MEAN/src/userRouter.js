const express=require('express');
const userRouter = express.Router();
const JWT =require('jsonwebtoken')
const User= require('./models/user.model');
const dotenv=require('dotenv')
const Database = require('./database');
var mongoose = require('mongoose') ;
const bcrypt = require('bcrypt');
const saltRounds = 10;
var userSchema = mongoose.model("users",userSchema);
const signToken=userID=>{
    return JWT.sign({
        iss:"trong",
        sub:userID
    },"Trong@99",{expiresIn:"1h"});
}

    //regis
//     userRouter.post('/register', async (req,res)=>{
//     const {userAccount,userPassword,userName,userPhone,userAddress,userImage,userCoin,role} = req.body;
//     let temp;
//     let check = await Database.instance.checkAccount(userAccount);
//     console.log(check == false);
//        if(check == false) {
//         await bcrypt.genSalt(saltRounds,(err,salt)=>{
//             bcrypt.hash(userPassword, salt, (err, hash)=>{
//                 temp = hash;
               
//                 Database.instance.createUser(new User(userAccount,temp,userName,userPhone,userAddress,userImage,userCoin,role));
//                 console.log("thanh cong ", temp);
//                 res.send(`Created success: ${userAccount}`);
//           } );
//         })
//        }else {
//            console.log("fail")
//            res.send("fail")
//        }
// })
    
//login
// userRouter.post('/login',passport.authenticate('local',
// {session:false}),(req,res)=>{
//     if(req.isAuthenticated()){
//         const{_id,userAccount,role}=req.user;
//         const token=signToken(_id);
//         res.cookie('access_token',token,{httpOnly:true,sameSite:true})
//         res.status(200).json({
//             isAuthenticated:true,
//             user:{userAccount,role}
//         })
//     }
// })

// userRouter.post('/login',async (req,res)=>{
//     const {userAccount,userPassword}=req.body;
//     // let user =  await Database.instance.findUser(userAccount);  
//     const user = (await   this.userSchema.find( {
//         "userAccount" : userAccount
//     }))
//     console.log(user);
//         if (!user) {
//           res.status(401).json({ message: 'Authentication failed. User not found.' });
//         } else if (user) {
//             bcrypt.compare(userPassword, user[0].userPassword, function(err,resp){
//                 if(resp){
//                        return res.json({token: jwt.sign({ userAccount: user.userAccount,role:user.role}, 'RESTFULAPIs')});
//                       }
//                    else {
//                       return   res.status(401).json({ message: 'Authentication failed. Wrong password.' });
//                     }
//             })
//         }    
// })
//logout
// userRouter.get('/logout',passport.authenticate('jwt',{session : false}),(req,res)=>{
//     res.clearCookie('access_token');
//     const{_id,username,role}=req.user;
//     res.json({
//         message:"you are logout",
//         user:{ username,_id,role},
//         success : true});
// });

// userRouter.get('/resetpasswd',(req,res)=>{
//     const{username}=req.body;
//      User.findOne({username},(err,user)=>{
        
//             if(err) res.status(500).json({
//                 message:{msgBody:"Error has occured 1"},
//                 msgError:true })
//             if(!user){
//                 res.status(404).json({
//                     message:{msgBody:"username not found "}
                
//             })}
//             if(user) 
//                 {
//                     res.status(200).json({
//                         message:{msgBody:"Reset password succesfully  "}
//                     })

//                 //     newUser.save(err=>{
//                 //         if(err)res.status(500).json({
//                 //             message:{msgBody:"Error has occured 2"},
//                 //             msgError:true })
//                 //         else res.status(201).json({
//                 //             message:{msgBody:"Account succesfully created"},
//                 //             msgError:false })
//                 //     })
//                 // }
                    
//                 }
//         });
// })

// userRouter.get('/admin',passport.authenticate('jwt',{session : false}),(req,res)=>{
//     if(req.user.role === 'admin'){
//         res.status(200).json({message : {msgBody : 'You are an admin', msgError : false}});
//     }
//     else
//         res.status(403).json({message : {msgBody : "You're not an admin,go away", msgError : true}});
// });

// userRouter.get('/authenticated',passport.authenticate('jwt',{session : false}),(req,res)=>{
//     const {username,role} = req.user;
//     res.status(200).json({isAuthenticated : true, user : {username,role}});
// });

module.exports = userRouter;