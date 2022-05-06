const Movie = require('../models/movie');
const MovieList = require('../models/movieList')
const User = require('../models/user')

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const rootURL = 'https://imdb-api.com/en/API/'
const token = process.env.IMDB_TOKEN


module.exports = {
  index,
  show,
  new: newMovie,
  create,
  getMoviesImdb,
  addToList
};

function addToList(req, res) {
  User.findOne({ googleId: req.user.googleId}, function(err, user) {
    console.log(user)
    user.list.push(req.params.id);
    user.save();
    console.log("list here adsfas", user.list)
    console.log('here is object', req.body)
    const movie = new Movie(req.body)
    movie.save()
    res.redirect('/movies')
  })
}

function index(req, res) {
  listOf250Movies = []
  res.render('movies/index', { title: 'All Movies', listOf250Movies });
}

function show(req, res, next) {
  fetch(`${rootURL}Title/${token}/${req.params.id}`)
    .then(res => res.json())
    .then(movie => {
      res.render('movies/show', {title: 'Movie Details', movie})
    })
}


function newMovie(req, res) {
  res.render('movies/new', { title: 'Add Movie' });
}

function create(req, res) {
  // convert nowShowing's checkbox of nothing or "on" to boolean
  req.body.nowShowing = !!req.body.nowShowing;
  // ensure empty inputs are removed so that model's default values will work
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key];
  }
  const movie = new Movie(req.body);
  movie.save(function(err) {
    if (err) return res.redirect('/movies/new');
    res.redirect(`/movies/${movie._id}`);
  });
}

function getMoviesImdb(req, res, next) {
  console.log('in get movies imdb')
  fetch(`${rootURL}Top250Movies/${token}`)
    .then(res=> res.json())
    .then(movies => {
      let listOf250Movies = movies.items
      res.render('movies/index', {title: 'All Movies', listOf250Movies})
    });
}