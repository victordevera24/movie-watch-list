const express = require('express');
const router = express.Router();
const messagesCtrl = require('../controllers/messages')

const isLoggedIn = require('../config/auth');

router.get('/messages', isLoggedIn, messagesCtrl.index);

module.exports = router;