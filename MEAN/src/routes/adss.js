const express = require('express');
const Ads = require('../models/ads');
const adssController = require('../controllers/adss');
const storage = require('../helpers/storage');
const router = express.Router();

router.get('/ads', adssController.getAds);

router.post('/ads', storage, adssController.postAds);

module.exports = router;
