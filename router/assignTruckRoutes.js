//Express dependencies to be used by routes.
const express = require('express');

//Exploring route
const router = express.Router();

const AssignTruck = require('../models/AssignTruck');

//Route for home
router.get('/', (req, res) => {
  res.render('assignTruck', { title: 'Assign Truck' });
});
//Importing routes into our index.js/server.js file
module.exports = router;
