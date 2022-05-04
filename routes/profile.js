const express = require('express')
const router = express.Router();
const profileCtrl = require('../controllers/profile')

const isLoggedIn = require('../config/auth');

router.get('/profile/:id', isLoggedIn, profileCtrl.show);

module.exports = router;