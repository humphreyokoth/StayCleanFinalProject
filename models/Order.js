//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const orderSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  nin: {
    type: String,
  },
  contact: {
    type: String,
  },
  location: {
    type: String,
  },
  service: {
    type: String,
  },
  request: {
    type: String,
  },
  time: {
    type: String,
  },
  conductors: {
    type: String,
  },
  servicefee: {
    type: String,
  },
});

//export the mongoose model
module.exports = mongoose.model('Order', orderSchema);
