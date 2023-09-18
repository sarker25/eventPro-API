const express = require("express");
const applyMiddleware = require("./middlewares");

const app = express();

// middleware
applyMiddleware(app);
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
