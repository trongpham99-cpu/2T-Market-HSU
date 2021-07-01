const Category = require('../models/category');

//CATEGORY ON
exports.updateCateOn = async (req, res) => {
  const { id } = req.query;
  const options = { new: true };
  try {
    const result = await Category.findByIdAndUpdate(id, { status: "Bật" }, options);
    res.send({
      updated: result
    });
  } catch (err) {
    res.status(400).send({ message: `cannot update [${id}]` });
  }
}

//CATEGORY OFF
exports.updateCateOff = async (req, res) => {
  const { id } = req.query;
  const options = { new: true };
  try {
    const result = await Category.findByIdAndUpdate(id, { status: "Tắt" }, options);
    res.send({
      updated: result
    });
  } catch (err) {
    res.status(400).send({ message: `cannot update [${id}]` });
  }
}

//DELETE CATEGORY
exports.deleteCate = async (req, res) => {
  const { id } = req.query;
  try {
    await Category.findByIdAndRemove(id);
    res.send({ massage: `Deleted ${id} ` });
  } catch (err) {
    res.status(400).send({ message: `cannot delete ${id}` });
  }
}
//POST CATEGORY
exports.postCategory = async (req, res) => {
    const { name } = req.body;
    const status= 'Bật';
    const imagePath = 'http://127.0.0.1:8080/images/' + req.file.filename; // Note: set path dynamically
    const profile = new Category({
        name,
        status,
        imagePath
    });
    const createdCategory = await profile.save();
    res.status(201).json({
      profile: {
        ...createdCategory._doc,
      },
    });
  };

//GET CATEGORY ON
exports.getCategory = async (req, res) => {
    const categories = await Category.find({status:'Bật'});
    res.status(200).json({ categories });
};

exports.getAllCategory = async (req, res) => {
  const categories = await Category.find();
  res.status(200).json({ categories });
};