const Movie = require('../models/movie');
const Performer = require('../models/performer');

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const rootURL = 'https://imdb-api.com/en/API/'
const token = process.env.IMDB_TOKEN


module.exports = {
  index,
  show,
  new: newMovie,
  create,
  getMoviesImdb
};

function index(req, res) {
  listOf250Movies = []
  res.render('movies/index', { title: 'All Movies', listOf250Movies });
}

function show(req, res) {
  Movie.findById(req.params.id)
    .populate('cast')
    .exec(function(err, movie) {
      // Native MongoDB syntax
      Performer
        .find({_id: {$nin: movie.cast}})
        .sort('name').exec(function(err, performers) {
          res.render('movies/show', { title: 'Movie Detail', movie, performers });
        });
    });
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
  fetch(`${rootURL}Top250Movies/${token}`)
    .then(res=> res.json())
    .then(movies => {
      let listOf250Movies = movies.items
      res.render('movies/index', {title: 'All Movies', listOf250Movies})
    });
}
