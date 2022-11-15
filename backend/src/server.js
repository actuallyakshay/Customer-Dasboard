const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const connect = require("./config/db.config");
const userRoute = require("./features/user/user.route");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/user", userRoute);

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8080, async (req, res) => {
  try {
    await connect();
    console.log("http://localhost:8080");
  } catch (e) {
    res.status(404).send(e.message);
  }
});
