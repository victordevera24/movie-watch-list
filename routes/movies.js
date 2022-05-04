const express = require('express');
const router = express.Router();
const moviesCtrl = require('../controllers/movies');

// this auth will lock all your URLS
const isLoggedIn = require('../config/auth');

router.get('/',  moviesCtrl.index);
router.get('/imdb', moviesCtrl.getMoviesImdb)
router.get('/new', isLoggedIn, moviesCtrl.new);
router.get('/:id', moviesCtrl.show);
router.post('/', isLoggedIn, moviesCtrl.create);

module.exports = router;
