
const mongoose = require('mongoose');
const PostSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    title: {
        type: String,
    },
    image: {
        type: String,
    },
    likes: {
        type: Array
    },
    comments: [
        {
            user: { type: mongoose.Schema.Types.ObjectId, required: true },
            username: { type: String, required: true },
            profile: { type: String },
            comment: { type: String, required: true }
        }
    ],
    timestamp: {
        type: Boolean,
        default: true
    }
},{timestamps:true});

module.exports = mongoose.model('Post', PostSchema);
