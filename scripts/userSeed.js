let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/team", {
  useNewUrlParser: true,
  useFindAndModify: false
});

const userSeed = [
{
  userName: "spurs4life",
  password: "1234",
  favTeam: "San Antonio Spurs",
  favPlayer: "Blake Griffin",
  teamImg: "./userimg/spurs.jpg"
},
{
  userName: "user1",
  password: "1234",
  favTeam: "Oklahoma City Thunder",
  favPlayer: "Stephen Curry",
  teamImg: "./userimg/curry.jpg"
}
];

db.User.deleteMany({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
