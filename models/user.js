const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userMovieListSchema = new Schema({
    listOfMovies: [String]

})
const userSchema = new mongoose.Schema({
    name: String,
    googleId: {
        type: String,
        required: true
    },
    email: String,
    avatar: String,
    list: Array
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);
