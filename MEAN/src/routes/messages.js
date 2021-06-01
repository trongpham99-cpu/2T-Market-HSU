const express = require('express');
const Message = require('../models/message');
const messageController = require('../controllers/messages');
const router = express.Router();

router.get('/user/messages', messageController.getMessage);

router.post('/admin/messages', messageController.postMessage);

module.exports = router;
