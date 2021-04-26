const express = require('express');
const Profile = require('../models/profile');

const profilesController = require('../controllers/profiles');

const storage = require('../helpers/storage');

const router = express.Router();

router.get('/product', profilesController.getProducts);

router.get('/detail', profilesController.getDetail);

router.get('/category', profilesController.getCategory);

router.post('/', storage, profilesController.postProfile);

router.delete('/product',profilesController.deteleProduct);

router.put('/product',profilesController.updataProduct);

module.exports = router;
