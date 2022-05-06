const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const taskSchema = new Schema({
    task: String
}, {
    timestamp: true
})

module.exports = mongoose.model('Task', taskSchema);
