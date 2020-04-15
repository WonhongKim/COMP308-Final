var user = require("../controllers/user.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/api/SignUp", user.create);
};
