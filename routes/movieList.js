const express = require('express')
const router = express.Router();
const movieListCtrl = require('../controllers/movieList')

const isLoggedIn = require('../config/auth');

router.get('/watchList', isLoggedIn, movieListCtrl.index);

module.exports = router;