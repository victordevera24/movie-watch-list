const User = require('../models/user');

module.exports = {
    show
};

function show(req, res) {
    console.log('in movie list index')
    movies = ['asdf', 'qwer', 'zxcv']
    res.render('watchList/index', {title: 'Profile', movies})
}

