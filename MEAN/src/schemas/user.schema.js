const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    _id:String,
    userAccount:String,
    userPassword:String,
    userName:String,
    userPhone:Number,
    userAddress:String,
    userImage:String,
    userCoin:Number,
});

module.exports = userSchema;