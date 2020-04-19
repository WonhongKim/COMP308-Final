const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var EmergencySchema = new Schema({
  date: {
    type: String,
    required: "date id is required",
  },
  email: {
    type: String,
    required: "tip is required",
  },
});

EmergencySchema.pre("save", function (next) {
  next();
});
EmergencySchema.set("toJSON", {
  getters: true,
  virtuals: true,
});

mongoose.model("Emergency", EmergencySchema);
