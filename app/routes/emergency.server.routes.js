var emergency = require("../controllers/emergency.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/api/Emergency", emergency.create);
};
