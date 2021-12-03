const mongoose = require("mongoose");

const CommentScheme = new mongoose.Schema(
    {
        _id: {default:mongoose.Types.ObjectId,type:mongoose.Types.ObjectId},
        message: { type: String, required: true },
        date: { type: Date, default: Date.now() },
        user: {
            type: mongoose.Schema.Types
                .ObjectId, required: true, ref: "User"
        },
        filmId: {
            type: String, required: true
        }
    }
 )

const commentScheme = mongoose.model('comments', CommentScheme);

module.exports = commentScheme;
