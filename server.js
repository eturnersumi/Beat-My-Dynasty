const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
//mongoose.connect(process.env.MONGODB_URI);
mongoose.connect("mongodb://user:hell0world@ds031223.mlab.com:31223/heroku_lnl5kc3x" || "mongodb://localhost/team");


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
