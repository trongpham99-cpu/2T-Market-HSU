const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
    id_product: { type:String, required: true },
    nguoi_gui: { type: String, required: true },
    nguoi_nhan: { type: String, required: true },
    noi_dung: { type: String, required: true },
    ngay_dang: { type: Date, default :Date.now}
});

module.exports = mongoose.model('Message', messageSchema);
