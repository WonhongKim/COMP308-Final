var user = require("../controllers/user.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/api/SignUp", user.create);
  app.post("/api/signin", user.authenticate);
  app.get("/api/signout", user.signout);
  app.get("/api/read_cookie", user.isSignedIn);
};
