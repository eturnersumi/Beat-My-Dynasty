const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    userName: {
      type: String
    },
    password: {
      type: String
    },
    favTeam: {
      type: String
    },
    favPlayer: {
      type: String
    },
    teamImg: {
      type: String
    }
});

const User = mongoose.model("User", userSchema);

module.exports = User;