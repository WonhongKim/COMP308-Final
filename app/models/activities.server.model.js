const mongoose = require("mongoose");
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
  next();
});

ActivitiesSchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Activities", ActivitiesSchema);
