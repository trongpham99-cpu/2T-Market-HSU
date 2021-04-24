const Profile = require('../models/profile');

exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};

exports.postProfile = async (req, res) => {
  const { productName,productPrice,description,productAddress,loai_sp,ngay_dang } = req.body;
  const imagePath = 'http://127.0.0.1:8080/images/' + req.file.filename; // Note: set path dynamically
  const profile = new Profile({
    productName,
    productPrice,
    description,
    productAddress,
    loai_sp,
    ngay_dang,
    imagePath,
  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};
