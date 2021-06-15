const express = require("express");
const bodyParser = require("body-parser");
const Database = require("./database");
const User = require("./models/user.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const cors = require("cors");
const jwt = require("jsonwebtoken");
var cookiesParser = require("cookie-parser");
const path = require("path");
const profilesRoutes = require("./routes/profiles");
const categoriesRoutes = require("./routes/categories");
const adssRoutes = require("./routes/adss");
const messagesRoutes = require("./routes/messages");
const userSchema = require('./schemas/user.schema');
const mongoose = require('mongoose');


require('dotenv').config();
const corsOptions = {
    origin: "http://localhost:4200",
    optionsSuccessStatus: 200,
};
const app = express();
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(cookiesParser());

app.use('/images', express.static(path.join('images')));
app.use('/api/',categoriesRoutes, profilesRoutes,adssRoutes, messagesRoutes);

app.get("/users", async (req, res)=>{
    let users = await Database.instance.getUsers();
    res.send(users);
});

app.delete("/deleteuser",async(req, res)=>{
    const {id} = req.query;
    await Database.instance.deleteUser(id);
    try{
        res.send(`Deleted ${id}`)
    }catch(err){
        res.send(err);
    }
})


app.put("/updateuser",async (req, res)=>{
    const user  = req.body;
    const {id} = req.query
    const result = await mongoose.model("users",userSchema).findByIdAndUpdate(id,user);
    try{
        res.send(`updated ${id}`);
    }catch(err){
        res.send(err);
    }
})

app.put("/user/changepassword",async (req,res)=>{
    const {userAccount,userPassword} = req.query;
    const {newPassword} = req.body;
    const user = await mongoose.model("users",userSchema).find({userAccount:userAccount});
    bcrypt.compare(
        userPassword,
        user[0].userPassword,
        function (err, resp) {
            if (resp) {
                const result = mongoose.model("users",userSchema).findOneAndUpdate({userPassword:user[0].userPassword},{userPassword:newPassword});
                try{
                    res.send(result)
                }catch(err){
                    res.send(err);
                }
            } else {
                res.status(400).send({
                    message: `wrong password`,
                });
            }
        }
    );
    // const result = await mongoose.model("users",userSchema).find({userPassword:userPassword});
});

app.get("/user", async (req, res) =>{
    const {userAccount} = req.query;
    const user = await Database.instance.getUser(userAccount);
    res.send(user);
});
app.post("/register", async (req, res) => {
    let temp = "";
    const {
        userAccount,
        userPassword,
        userName,
        userPhone,
        userAddress,
        userMail,
        role ="user"
    } = req.body;
    let check = await Database.instance.checkAccount(userAccount);
    if (check == "") {
        await bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(userPassword, salt, (err, hash) => {
                temp = hash;
                Database.instance.createUser(
                    new User(userAccount, temp, userName, userPhone, userAddress,userMail,role)
                );
                res.status(200).send({
                    message: `Created USer: ${userAccount}`,
                });
            });
        });
    } else {
        res.status(400).send({
            message: `Account already exists`,
        });
    }
});
app.post("/login", async (req, res) => {
    const { userAccount, userPassword } = req.body;
    const user = await Database.instance.checkAccount(userAccount);
    if(user == ''){
        res.status(400).send({
            message:`Wrong Account`
        })
    }else{
        await bcrypt.compare(
            userPassword,
            user[0].userPassword,
            function (err, resp) {
                if (resp) {
                    var token = jwt.sign(
                        {
                           user
                        },
                        'mk'
                    );
                    return res.json({
                        message: `Login successfully with account :${userAccount}`,
                        token: token,
                    });
                } else {
                    res.status(400).send({
                        message: `wrong password`,
                    });
                }
            }
        );
    }
});
app.get("/login", async (req, res) => {
    try {
        const token = req.headers.token;
        const user = jwt.verify(token, 'mk');
        if(user){
            res.json(user)
        }
    }   catch (error) {
        return res.json("ban can phai login");
    }
});
module.exports = app;
