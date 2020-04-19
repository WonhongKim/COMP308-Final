const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var DailytipSchema = new Schema({
  date: {
    type: String,
    unique: true,
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
  next();
});
DailytipSchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Dailytip", DailytipSchema);
