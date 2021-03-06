﻿// Load the module dependencies:
//  config.js module and mongoose module
var config = require("./config"),
  mongoose = require("mongoose");
// Define the Mongoose configuration method
module.exports = function () {
  // Use Mongoose to connect to MongoDB
  const db = mongoose
    .connect(config.db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    })
    .then(() => console.log("DB Connected!"))
    .catch((err) => {
      console.log("Error");
    });

  require("../app/models/user.server.model");
  require("../app/models/patientdata.server.model");
  require("../app/models/dailytip.server.model");
  require("../app/models/activities.server.model");
  require("../app/models/emergency.server.model");
  // Return the Mongoose connection instance
  return db;
};
