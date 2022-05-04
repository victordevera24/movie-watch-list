const express = require('express');
const router = express.Router();
const friendListCtrl = require('../controllers/friendList')

const isLoggedIn = require('../config/auth');

router.get('/friends', isLoggedIn, friendListCtrl.index);

module.exports = router;