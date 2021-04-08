//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const earningSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  nin: {
    type: String,
    unique: true,
  },
  gender: String,
  // pastincidence:
  //   {
  //     type: String,
  //   },
  //
  // imageupload: String,
  // role: String,
});

//export the mongoose model
module.exports = mongoose.model('Earning', earningSchema);
