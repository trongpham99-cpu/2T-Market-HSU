const express = require('express');
const Profile = require('../models/profile');

const profilesController = require('../controllers/profiles');

const storage = require('../helpers/storage');

const router = express.Router();

router.get('/searchtime',profilesController.searchSanPhamByDay);

router.get('/productid', profilesController.getByIdProduct);

router.get('/search',profilesController.searchSanPham);

router.put('/duyetsp',profilesController.update);

router.put('/dabansp',profilesController.updateSanPhamDaBan);

router.get('/status',profilesController.getStatusAdmin);

router.get('/productwait',profilesController.getProductChoDuyet);

router.get('/product', profilesController.getProfiles);

router.get('/detail', profilesController.getDetail);

router.get('/category', profilesController.getCategory);

router.get('/newproduct',profilesController.getProductsNew);

router.get('/sortprice',profilesController.sortPrice);

router.get('/cart',profilesController.getUserPost);

router.post('/product', storage, profilesController.postProfile);

router.delete('/product',profilesController.deteleProduct);

router.put('/product',profilesController.updateProduct);

module.exports = router;
