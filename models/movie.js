const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const movieSchema = new Schema({
  id: {
    type:String
  },
  title: {
    type: String,
    required: true
  },
  releaseYear: {
    type: String
  },
  rating:{
    type: String
  },
  image:{
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Movie', movieSchema);