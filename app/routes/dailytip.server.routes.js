var dailytip = require("../controllers/dailytip.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/api/AddDailyTip", dailytip.create);
  app.get("/api/tipLoad", dailytip.tipLoad);
  app.get("/api/DailyTipDetail/:userId", dailytip.read);

  app.param("userId", dailytip.userByID);
};
