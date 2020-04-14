const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Schema = mongoose.Schema;

var PatientSchema = new Schema({
  type: {
    type: String,
    required: "User Type is required",
  },

  uid: {
    type: String,
    unique: true,
    required: "user id is required",
  },
  email: {
    type: String,
    unique: true,
    required: "email is required",
    match: [/.+\@.+\..+/, "Please fill a valid email address"],
  },
  password: {
    type: String,
    validate: [
      (password) => password && password.length > 6,
      "Password should be longer",
    ],
  },
  name: {
    type: String,
    required: "Name is required",
  },
  mobile: {
    type: String,
    required: "mobile number is required",
  },
  address: {
    type: String,
    required: "address is required",
  },
});

PatientSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

PatientSchema.methods.authenticate = function (password) {
  return this.password === bcrypt.hashSync(password, saltRounds);
};

PatientSchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Patient", PatientSchema);
