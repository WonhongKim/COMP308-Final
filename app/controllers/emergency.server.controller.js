const Emergency = require("mongoose").model("Emergency");
const config = require("../../config/config");

exports.create = function (req, res, next) {
  var emergency = new Emergency(req.body);

  emergency.save(function (err) {
    if (err) {
      return next(err);
    } else {
      res.json(emergency);
    }
  });
};
