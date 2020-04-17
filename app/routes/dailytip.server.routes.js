var dailytip = require("../controllers/dailytip.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/api/AddDailyTip", dailytip.create);
};
