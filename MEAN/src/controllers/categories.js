const Category = require('../models/category');

//POST CATEGORY
exports.postCategory = async (req, res) => {
    const { name } = req.body;
    const imagePath = 'http://127.0.0.1:8080/images/' + req.file.filename; // Note: set path dynamically
    const profile = new Category({
        name,
        imagePath
    });
    const createdCategory = await profile.save();
    res.status(201).json({
      profile: {
        ...createdCategory._doc,
      },
    });
  };

//GET CATEGORY
exports.getCategory = async (req, res) => {
    const categories = await Category.find();
    res.status(200).json({ categories });
    let countCate = 0;  
    for(let i = 0; i<categories.length;i++){
        countCate++;
    }
    console.log(`Tổng số danh mục sản phẩm là : ` + countCate);
};