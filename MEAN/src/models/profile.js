const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  productName: { type: String, required: true },
  productPrice: { type: String, required: true },
  description: { type: String, required: true },
  productAddress: { type: String, required: true },
  checkStatus: { type: String, required: true },
  loai_sp: { type: String, required: true },
  nguoi_dang: { type: String, required: true },
  uploaded: { type: Date, default :Date.now },
  imagePath: { type: String, required: true },
});

module.exports = mongoose.model('Profile', profileSchema);
