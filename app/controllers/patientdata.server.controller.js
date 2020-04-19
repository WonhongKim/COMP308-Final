const Patientdata = require("mongoose").model("Patientdata");
const config = require("../../config/config");

exports.create = function (req, res, next) {
  var patientdata = new Patientdata(req.body);

  patientdata.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(patientdata);
    }
  });
};
