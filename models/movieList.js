const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const listSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    list: [{
        type: Schema.Types.ObjectId,
        ref: 'Movie'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('MovieList', listSchema)