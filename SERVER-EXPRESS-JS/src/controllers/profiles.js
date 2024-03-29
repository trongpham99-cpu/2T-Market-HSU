const Profile = require('../models/profile');
const userSchema = require('../schemas/user.schema');
const User = require('../models/user.model');
const mongoose = require('mongoose');

//BAT TAT SAN PHAM
exports.tatSp = async (req,res) =>{
  const { id } = req.query;
  const options = { new: true };
  try {
    const result = await Profile.findByIdAndUpdate(id, { status: "3" }, options);
    res.send({
      updated: result
    });
  } catch (err) {
    res.status(400).send({ message: `cannot update ${id}` });
  }
}

//GET TAT SP
exports.getSpTat = async (req, res) => {
  const { nguoi_dang_sp } = req.query;
  try {
    const cart = await Profile.find({ nguoi_dang_sp: nguoi_dang_sp, status: "3" });
    res.status(200).json({ cart })

  } catch (err) {
    res.status(400).send({ message: `${nguoi_dang_sp} khong co san pham tat !!!` })
  }
}


//GET SAN PHAM TRONG NGAY
exports.getSanPhamTrongNgay = async (req, res)=>{
  const {year,month} = req.query;
  if(month == '-'){
    try{
      const result = await Profile.find({ngay_dang: {$gte: new Date(year, 1), $lt: new Date(year, 12)}});
      res.send(result);
    }catch(err){
      res.send(err);
    }
  }else{
    const result = await Profile.find({ngay_dang: {$gte: new Date(year, month-1), $lt: new Date(year, month)}});
    try{
      res.send(result);
    }catch(err){
      res.send(err);
    }
  }
}

//SEARCH BY DAY, MONTH
exports.searchSanPhamByDay = async (req, res) => {
  // const {day,month} = req.query;
  month = 6
  const result = await Profile.find()
  let a = result[0].ngay_dang;
  console.log(a);
}

//SEARCH 
exports.searchSanPham = async (req, res) => {
  const search = req.query.search;
  const result = await Profile.find({ productName: { $regex: search, $options: '$i' }, status: "1" })
  try {
    res.send(result);
  } catch (err) {
    res.send(err);
  }
}

//DA BAN SAN PHAM
exports.updateSanPhamDaBan = async (req, res) => {
  const { id } = req.query;
  const options = { new: true };
  try {
    const result = await Profile.findByIdAndUpdate(id, { status: "2" }, options);
    res.send({
      updated: result
    });
  } catch (err) {
    res.status(400).send({ message: `cannot update [${id}]` });
  }
}
//DUYET SAN PHAM
exports.update = async (req, res) => {
  const { id } = req.query;
  const options = { new: true };
  try {
    const result = await Profile.findByIdAndUpdate(id, { status: "1" }, options);
    res.send({
      updated: result
    });
  } catch (err) {
    res.status(400).send({ message: `cannot update [${id}]` });
  }
}

//GET STATUS = 0
exports.getStatusAdmin = async (req, res) => {
  const { status } = req.query;
  const choDuyet = await Profile.find({ status: status });
}

//SẢN PHẨM CHỜ DUYỆT
const PAGE_SIZE_STATUS = 100000;
exports.getProductChoDuyet = async (req, res) => {
  const { status, page } = req.query;
  if (page) {
    const skip = (parseInt(page) - 1) * PAGE_SIZE_STATUS;
    const getProductChoDuyet = await Profile
      .find({ status: status })
      .skip(skip)
      .sort({
        ngay_dang: -1,
      })
      .limit(PAGE_SIZE_STATUS);
    res.status(200).json({ getProductChoDuyet })
  } else {
    const getProductChoDuyet = await Profile
      .find({ status: status })
      .sort({
        ngay_dang: -1,
      })
      .limit(PAGE_SIZE_STATUS);
    res.status(200).json({ getProductChoDuyet });
  }
}

//FIND BY ID PRODUCT
exports.getByIdProduct = async (req, res) => {
  // user = mongoose.model("users",userSchema);  
  const { id } = req.query;
  const detail = await Profile.findById(id);
  try{
    res.send(detail);
  }catch(err){
    res.send(err);
  }
}

//GET ALL PRODUCT
exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};
const PAGE_SIZE = 20;
//GET ALL PRODUCT FOR NEW POST
exports.getProductsNew = async (req, res) => {
  var { page } = req.query;
  // if (page) {
  //   var skip = (parseInt(page) - 1) * PAGE_SIZE;
  //   const ProducstNew = await Profile
  //     .find()
  //     .skip(skip)
  //     .sort({
  //       // ngay_dang: -1,
  //     })
  //     .limit(PAGE_SIZE)
  //   res.status(200).json({ ProducstNew })
  // } else {
  //   const ProducstNew = await Profile
  //     .find()
  //     .sort({
  //       // ngay_dang: -1,
  //     })
  //     .limit(20);
  //   res.status(200).json({ ProducstNew });
  // }

  const ProducstNew = await Profile.find()
  console.log(ProducstNew);
  return res.status(200).json({ ProducstNew });
}
//SORT ALL BY PRICE
exports.sortPrice = async (req, res) => {
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
  const { id } = req.query;
  const detail = await Profile.findById(id)
    .then(detail => {
      res.send(detail);
    })
    .catch(err => {
      res.send(err);
    });
}
//GET PRODUCT IN CATEGORY
exports.getCategory = async (req, res) => {
  const { loai_sp, status } = req.query;
  const category = await Profile
    .find({ loai_sp: loai_sp, status: "1" })
    .sort({
      productPrice: 1,
    })
    .limit(10000);
  try {
    res.status(200).json({ category })
  } catch (err) {
    res.status(400).json(`can't find ${category}`);
  }
}

//GET USER POST 
exports.getUserPost = async (req, res) => {
  const { nguoi_dang_sp, status } = req.query;
  try {
    const cart = await Profile.find({ nguoi_dang_sp: nguoi_dang_sp, status: status });
    res.status(200).json({ cart })

  } catch (err) {
    res.status(400).send({ message: `${nguoi_dang_sp} chưa đăng gì hết !!!` })
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
exports.updateProduct = async (req, res) => {
  const { id } = req.query;
  const updates = req.body;
  const options = { new: true };
  try {
    let result = await Profile.findByIdAndUpdate(id, updates, options);
    res.send({ message: `updated [${id}]` });
  } catch (err) {
    res.status(400).send({ message: `cannot update [${id}]` });
  }
}

//POST PRODUCT
exports.postProfile = async (req, res) => {
  const { productName, productPrice, description, productAddress, loai_sp, ngay_dang, status = "0", nguoi_dang_sp } = req.body;
  const imagePath = 'http://127.0.0.1:8080/images/' + req.file.filename; // Note: set path dynamically
  const user = await mongoose.model("users",userSchema).find({userAccount:nguoi_dang_sp});
  if(user[0].role == 'admin'){
    const status = 1;
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
  }
  if(user[0].role == 'user'){
    const cart = await Profile.find({ nguoi_dang_sp: nguoi_dang_sp, status: "1" });
    if(cart.length >= 3){
      res.send(`Qua 3 bai`)
    }else{
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
    }
  }
  else{
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
  }
};
