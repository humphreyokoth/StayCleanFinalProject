//require mongoose
const mongoose = require('mongoose');

//create a schema for the data you need to save
const truckSchema = new mongoose.Schema({
  trucknumber: {
    type: String,
  },
  truckcodenumber: {
    type: String,
  },
  service: {
    type: String,
  }
  
});

//Export the mongoose model.
module.exports = mongoose.model('TruckReg', truckSchema);
