const Movie = require('../models/movie');
const MovieList = require('../models/movieList')

module.exports = {
    index
};

function index(req, res) {
    console.log('in movie list index')
    movies = ['asdf', 'qwer', 'zxcv']
    res.render('watchList/index', {title: 'Your Watch List', movies})
}

