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

exports.tipLoad = function (req, res, next) {
  DailyTip.find({}, function (err, tips) {
    if (err) {
      return next(err);
    } else {
      res.json(tips);
    }
  });
};

exports.test = function (req, res) {
  const newdate = moment(new Date()).format("YYYY-MM-DD");

  DailyTip.findOne({ date: newdate }, (err, existone) => {
    console.log(existone);
    if (existone === null) {
      res.status(400).send({ tip: "no" });
    } else {
      res.status(200).send({ tip: existone.tip, writer: existone.writer });
    }
  });
};

exports.read = function (req, res) {
  res.json(req.course);
};

exports.userByID = function (req, res, next, id) {
  console.log(id);
  DailyTip.findOne(
    {
      _id: id,
    },
    (err, course) => {
      if (err) {
        return next(err);
      } else {
        req.course = course;
        next();
      }
    }
  );
};
