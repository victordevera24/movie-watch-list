const Message = require('../models/friendList');

module.exports = {
    index
};

function index(req, res) {
    console.log('in message index')
    movies = ['asdf', 'qwer', 'zxcv']
    res.render('friendList/index', {title: 'Friends', movies})
}