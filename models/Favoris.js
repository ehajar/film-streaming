const mongoose = require("mongoose");
const Mongoose = require("mongoose");

const favorisSchema = new mongoose.Schema(
  {
    _id: {
      type: Mongoose.Types.ObjectId,
      default: Mongoose.Types.ObjectId
    },
    filmId: {type: String, required: true},
    User: {
      type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User'
    }
  }
)


const favorisModel = mongoose.model('Favoris', favorisSchema);

module.exports = favorisModel;
