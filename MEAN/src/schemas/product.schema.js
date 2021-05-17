const mongoose = require('mongoose');

const proDuctSchema = new mongoose.Schema({
    productImage:String,
    productName:String,
    productPrice:Number,
    description:String,
    productAddress:String,
    checkStatus:Boolean,
    loai_sp: String,
    nguoi_dang: String,
    imageUrl: String,
    uploaded: { type: Date, default :Date.now },
});

module.exports = proDuctSchema;