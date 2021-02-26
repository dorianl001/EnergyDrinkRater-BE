const mongoose = require('../db/connections');
const commentSchema = new mongoose.Schema(
    {
        ID: String,
        Date: Date,
        Username: String,
        TextField: String
    }
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;