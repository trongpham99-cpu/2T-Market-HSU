const express = require('express');
const Category = require('../models/category');
const profilesController = require('../controllers/categories');
const storage = require('../helpers/storage');
const router = express.Router();

router.put('/categoryon', profilesController.updateCateOn);

router.put('/categoryoff', profilesController.updateCateOff);

router.delete('/deletecategory',profilesController.deleteCate);

router.get('/categories', profilesController.getCategory);

router.get('/getallcateogory',profilesController.getAllCategory );

router.post('/categories', storage, profilesController.postCategory);

module.exports = router;
