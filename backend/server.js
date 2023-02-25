const dotenv = require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const connectDB = require("./config/connectDB");

const app = express();

app.get("/", (req, res) => {
  res.send("Home Page");
});
connectDB();
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
