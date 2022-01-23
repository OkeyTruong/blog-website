// importing packages
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");

const app = express();


dotenv.config();
app.use(express.json())

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use("/api/auth",authRouter)
app.use("/api/users",userRouter)
 
app.listen("5000", () => {
  console.log("server is running.");
});
