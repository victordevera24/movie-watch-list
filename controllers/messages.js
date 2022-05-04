const Message = require('../models/message');

module.exports = {
    index
};

function index(req, res) {
    console.log('in message index')
    movies = ['asdf', 'qwer', 'zxcv']
    res.render('watchList/index', {title: 'Messages', movies})
}