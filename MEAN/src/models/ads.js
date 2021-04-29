const mongoose = require('mongoose');

const adsSchema = mongoose.Schema({
  name: { type: String, required: true },
  imagePath: { type: String, required: true },
  ngay_dang: { type: Date, default :Date.now},
});

module.exports = mongoose.model('Ads', adsSchema);
