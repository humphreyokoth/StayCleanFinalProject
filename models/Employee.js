//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const employeeSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  nin: {
    type: String,
    // unique: true,
  },
  username: {
    type: String,
  },
  licence: {
    type: String,
  },

  gender: {
    type: String,
  },
  date: {
    type: String,
  },
  role: {
    type: String,
  },
  pastincidents: [
    {
      type: String,
    },
  ],
});

//export the mongoose model
module.exports = mongoose.model('Employee', employeeSchema);
