const express = require('express');
const Category = require('../models/category');
const profilesController = require('../controllers/categories');
const storage = require('../helpers/storage');
const router = express.Router();

router.get('/categories', profilesController.getCategory);

router.post('/categories', storage, profilesController.postCategory);

module.exports = router;
