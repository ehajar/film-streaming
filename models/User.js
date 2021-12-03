const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    _id: {
      type: mongoose.Types.ObjectId,
      default: mongoose.Types.ObjectId
    },
    login: String,
    password: String,
  }
)

const userModel = mongoose.model('User', UserSchema);

module.exports = userModel;
