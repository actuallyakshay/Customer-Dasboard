const express = require("express");
const User = require("./user.model");

const app = express.Router();

app.get("", async (req, res) => {
  try {
    let users = await User.find();
    res.send(users);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    let user = await User.findById(req.params.id);
    res.send(user);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.post("", async (req, res) => {
  let existUser = await User.findOne({ email: req.body.email });
  try {
    if (existUser) {
      res.send("This user already exit in the database");
    } else {
      let user = await User.create(req.body);
      res.send(user);
    }
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    let user = await User.findByIdAndDelete(id);
    res.send(`user with this id: ${id} has beed deleted successfully`);
  } catch (e) {
    res.status(404).send(e.message);
  }
});

app.patch("/:id", async (req, res) => {
  const { id } = req.params;
  let user = await User.findById(id);
  await User.findByIdAndUpdate(id, {
    name: req?.body?.updatedname,
    email: req?.body?.updatedemail,
    age: req.body?.updatedage,
    gender: req?.body?.updatedgender,
    city: req?.body?.updatedcity,
  });
  res.send(user);
});

module.exports = app;
