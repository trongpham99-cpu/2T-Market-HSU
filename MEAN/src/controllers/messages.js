const Message = require('../models/message');
const Product = require('../models/profile');

exports.deleteMessage = async (req, res)=>{
    await Message.findByIdAndDelete(id);
    try{
        res.send(`deleted ${id}`)
    }catch(err){
        res.send(err);
    }
}

exports.seenMessage = async (req, res) =>{
    const id = req.query.id;
    await Message.findByIdAndUpdate(id, {status:"0"});
    try{
        res.send(`updated ${id}`);
    }catch(err){
        res.send(err);
    }
}

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
    const { id_product, tieu_de,nguoi_nhan, noi_dung } = req.body;
    const nguoi_gui = "admin";
    const status = "0";
    const message = new Message({
        id_product, nguoi_gui,tieu_de, nguoi_nhan, noi_dung,status
    });
    const createdMessage = await message.save();
    res.status(201).json({
        message: {
            ...createdMessage._doc,
        },
    });
};
