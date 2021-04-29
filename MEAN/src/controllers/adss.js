const Ads = require('../models/ads');

//POST ADS
exports.postAds = async (req, res) => {
    const { name } = req.body;
    const imagePath = 'http://127.0.0.1:8080/images/' + req.file.filename; // Note: set path dynamically
    const ads = new Ads({
        name,
        imagePath
    });
    const createdAds = await ads.save();
    res.status(201).json({
      ads: {
        ...createdAds._doc,
      },
    });
  };

//GET ADS
exports.getAds = async (req, res) => {
    const ads = await Ads.find();
    res.status(200).json({ ads });
    let count = 0;  
    for(let i = 0; i<ads.length;i++){
      count++;
    }
    console.log(`Tổng số quảng cáo là : ` + count);
};