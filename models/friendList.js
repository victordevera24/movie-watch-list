const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const friendSchema = new Schema ({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    friendList: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
}, {
    timestamps: true
})

module.exports = mongoose.model('FriendList', friendSchema)