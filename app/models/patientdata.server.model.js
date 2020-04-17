const mongoose = require("mongoose");
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
  date: {
    type: String,
    required: "date is required",
  },
});

PatientdataSchema.pre("save", function (next) {
  next();
});

PatientdataSchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Patientdata", PatientdataSchema);
