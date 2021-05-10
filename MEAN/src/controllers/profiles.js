const Profile = require('../models/profile');
const User = require('../models/user.model');
const userSchema = require('../schemas/user.schema');
const mongoose = require('mongoose');

//GET ALL PRODUCT
exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};
//GET ALL PRODUCT FOR NEW POST
exports.getProductsNew = async (req,res) =>{
  const productsNew = await Profile
  .find({})
  .sort({
    ngay_dang:-1,
  })
  .limit(100000); 
  res.status(200).json({productsNew});
}
//SORT ALL BY PRICE
exports.sortPrice = async (req,res) => {
  const result = await Profile
  .find({})
  .sort({
    productPrice: -1,
  })
  .limit(10000);
  res.send(result);
}
//GET DETAIL
exports.getDetail = async (req, res) => {
  const {id} = req.query;
  const detail = await Profile.findById(id)
  .then(detail => {
    res.send(detail);
  })
  .catch(err => {
    res.send(err);
  });
}

//TEST GET DETAIL ID PRODUCT TO USER
exports.getId = async (req,res) => {
  let user = this.user = mongoose.model("users",userSchema);
  const {id} = req.query;
  const detail = await Profile.findById(id)
  try{
    let a = detail.nguoi_dang_sp;
    const userPost = await user.find({userAccount:a});
    res.status(200).send(userPost);
  }catch(err){
    res.status(401).json(`Không tìm thấy id: ${id}`)
  }
}


//GET CATEGORY
exports.getCategory = async(req, res) =>{
  const { loai_sp } = req.query;
  const category = await Profile.find({loai_sp:loai_sp});
  if(category){
    res.status(200).json({category})
  }else{
    res.status(400).json(`can't find ${category}`);
  }
}

//GET USER POST 
exports.getUserPost = async (req,res) => {
  const {nguoi_dang_sp,status} = req.query;
  try{
    const cart = await Profile.find({nguoi_dang_sp:nguoi_dang_sp,status:status});
    res.status(200).json({cart})
    
  }catch(err){
    res.status(400).send({message :`${nguoi_dang_sp} chưa đăng gì hết !!!`})
  }
}

//DELETE PRODUCT
exports.deteleProduct = async (req, res) => {
  const { id } = req.query;
    try {
        await Profile.findByIdAndRemove(id);
        res.send({ massage: `Deleted [${id}] ` });
    } catch (err) {
        res.status(400).send({ message: `cannot delete [${id}]` });
    }
}

//UPDATE PRODUCT
exports.updataProduct = async (req,res) => {
  const {id} = req.query;
  const updates = req.body;
  const options = {new : true};
  try{
    let result = await Profile.findByIdAndUpdate(id, updates,options);
    res.send({message: `updated [${id}]`});
  }catch(err){
    res.status(400).send({message : `cannot update [${id}]`});
  }
}

//POST PRODUCT
exports.postProfile = async (req, res) => {
  const { productName,productPrice,description,productAddress,loai_sp,ngay_dang,status="0",nguoi_dang_sp="trong.phamtranduc" } = req.body;
  const imagePath = 'http://project-a-hsu.herokuapp.com/images/' + req.file.filename; // Note: set path dynamically
  const profile = new Profile({
    productName,
    productPrice,
    description,
    productAddress,
    loai_sp,
    ngay_dang,
    imagePath,
    status,
    nguoi_dang_sp
  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};
