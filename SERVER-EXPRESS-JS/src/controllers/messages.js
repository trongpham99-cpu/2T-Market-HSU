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
    const { id } = req.query;
    const options = { new: true };
    try {
      const result = await Message.findByIdAndUpdate(id,{status:"1"}, options);
      res.send({
        updated: `${id}`
      });
    } catch (err) {
      res.status(400).send({ message: `cannot update ${id}` });
    }
}

exports.getMessageAdmin = async (req,res)=>{
    const message = await Message.find({ status:'1' });
    try {
        res.send(message)
    } catch (err) {
        res.send(err);
    }
}

exports.getMessage = async (req, res) => {
    const { nguoi_nhan } = req.query;
    const message = await Message.find({ nguoi_nhan: nguoi_nhan,status:'0' });
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
