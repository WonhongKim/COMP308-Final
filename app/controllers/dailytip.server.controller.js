const DailyTip = require("mongoose").model("Dailytip");
const config = require("../../config/config");
const moment = require("moment");

const getErrorMessage = function (err) {
  var message = "";
  if (err.code) {
    switch (err.code) {
      case 11000:
      case 11001:
        message = "Coursename already exists";
        break;

      default:
        message = "Something went wrong";
    }
  } else {
    for (const errName in err.errors) {
      if (err.errors[errName].message) message = err.errors[errName].message;
    }
  }
  return message;
};

exports.create = function (req, res) {
  var dailytip = new DailyTip(req.body);
  const newdate = moment(new Date()).format("YYYY-MM-DD");
  console.log(newdate);

  DailyTip.findOne({ date: req.body.date }, (err, existone) => {
    console.log(existone);
    if (err) {
      return getErrorMessage(err);
    }
  }).then(function () {
    dailytip.save((err) => {
      if (err) {
        return res.status(400).send({
          message: getErrorMessage(err),
        });
      } else {
        res.status(200).json(dailytip);
      }
    });
  });
};
