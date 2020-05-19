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
      type: String,
      get: v => `${root}${v}`
    }
});

const User = mongoose.model("User", userSchema);

const doc = new User({ userName: 'Val', favTeam: 'Val', favPlayer: 'Val', teamImg: './userImg'});
doc.teamImg;
doc.toObject({getters: false}).teamImg;

module.exports = User;