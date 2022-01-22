// importing packages
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

// initializing express.js
const app = express();

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));
app.listen("5000", () => {
  console.log("server is running.");
});
