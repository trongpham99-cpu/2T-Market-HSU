const Profile = require('../models/profile');

exports.getProfiles = async (req, res) => {
  const profiles = await Profile.find();
  res.status(200).json({ profiles });
};

exports.postProfile = async (req, res) => {
  const { productName,productPrice,description,productAddress,loai_sp } = req.body;
  const imagePath = 'http://localhost:3000/images/' + req.file.filename; // Note: set path dynamically
  const profile = new Profile({
    productName,
    productPrice,
    description,
    productAddress,
    loai_sp,
    imagePath,
  });
  const createdProfile = await profile.save();
  res.status(201).json({
    profile: {
      ...createdProfile._doc,
    },
  });
};
