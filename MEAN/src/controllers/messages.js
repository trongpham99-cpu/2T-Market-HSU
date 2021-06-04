const Message = require('../models/message');
const Product = require('../models/profile');

exports.getMessage = async (req, res) => {
    const { nguoi_nhan } = req.query;
    const message = await Message.find({ nguoi_nhan: nguoi_nhan });
    try {
        res.send(message)
    } catch (err) {
        res.send(err);
    }
}

exports.postMessage = async (req, res) => {
    const { id_product, nguoi_gui = "admin", nguoi_nhan, noi_dung } = req.body;
    const message = new Message({
        id_product, nguoi_gui, nguoi_nhan, noi_dung
    });
    const createdMessage = await message.save();
    res.status(201).json({
        message: {
            ...createdMessage._doc,
        },
    });
};
