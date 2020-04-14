const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Schema = mongoose.Schema;

var PatientdataSchema = new Schema({
  uid: {
    type: String,
    required: "user id is required",
  },
  patientname: {
    type: String,
    required: "patientname is required",
  },
  bodytemperature: {
    type: String,
    required: "bodytemperature is required",
  },
  heartrate: {
    type: String,
    required: "heartrate is required",
  },
  bloodpressure: {
    type: String,
    required: "bloodpressure is required",
  },
  sender: {
    type: String,
    required: "sender is required",
  },
  sendertype: {
    type: String,
    required: "sendertype is required",
  },
});

PatientdataSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

PatientdataSchema.methods.authenticate = function (password) {
  return this.password === bcrypt.hashSync(password, saltRounds);
};

PatientdataSchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Patientdata", PatientdataSchema);
