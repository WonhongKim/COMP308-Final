var patient = require("../controllers/patientdata.server.controller");
var express = require("express");
var router = express.Router();

module.exports = function (app) {
  app.post("/api/AddPatientData", patient.create);
};
