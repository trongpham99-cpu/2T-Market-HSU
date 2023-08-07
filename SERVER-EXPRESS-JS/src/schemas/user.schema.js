const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userAccount:String,
    userPassword:String,
    userName:String,
    userPhone:Number,
    userAddress:String,
    userMail:String,
    role:String,
    ngay_dang_ky: { type: Date, default :Date.now },
});

module.exports = userSchema;