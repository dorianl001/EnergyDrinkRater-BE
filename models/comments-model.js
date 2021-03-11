const mongoose = require('../db/connections');
const commentSchema = new mongoose.Schema(
    {
        ID: Number,
        Date: String,
        Username: String,
        TextField: String,
        Title: String
    }
);
const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;