const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Schema = mongoose.Schema;

var ActivitiesSchema = new Schema({
  date: {
    type: String,
    required: "date id is required",
  },
  url: {
    type: String,
    required: "url is required",
  },
  writer: {
    type: String,
    required: "writer is required",
  },
});

ActivitiesSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

ActivitiesSchema.methods.authenticate = function (password) {
  return this.password === bcrypt.hashSync(password, saltRounds);
};

ActivitiesSchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Activities", ActivitiesSchema);
