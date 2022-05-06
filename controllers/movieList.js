const Movie = require('../models/movie');
const MovieList = require('../models/movieList')
const User = require('../models/user')

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const rootURL = 'https://imdb-api.com/en/API/'
const token = process.env.IMDB_TOKEN

module.exports = {
    index
};

function index(req, res) {
    console.log('in movie list index')
    let movieList = []
    // User.findOne({googleId: req.user.googleId}, function(err,user){
    //     console.log('in user find one', user.list)
    //     return userMovieList = user.list
    // }).then(function(result){
    //     result.forEach(movie => function(movie){
    //         console.log(movie, 'this is the movie element')
    //         Movie.findOne({id:movie}, function(err, gotMovie){
    //             console.log('in movie find one', gotMovie)
    //             movieList.push(gotMovie)
    //         })
    //     })
    // }).then(function(){
    //     process.exit()
    // })
        
    res.render('watchList/index', {title: 'Your Watch List', movieList})

    console.log('does it')
}

