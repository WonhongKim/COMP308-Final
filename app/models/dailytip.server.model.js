const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const Schema = mongoose.Schema;

var DailytipSchema = new Schema({
  date: {
    type: String,
    required: "date id is required",
  },
  tip: {
    type: String,
    required: "tip is required",
  },
  writer: {
    type: String,
    required: "writer is required",
  },
});

DailytipSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

DailytipSchema.methods.authenticate = function (password) {
  return this.password === bcrypt.hashSync(password, saltRounds);
};

DailytipSchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Dailytip", DailytipSchema);
