//Express dependencies to be used by routes.
const express = require('express');

//Exploring route
const router = express.Router();

const Order = require('../models/Order');

//Route for home
router.get('/', (req, res) => {
  res.render('order', { title: 'Orders' });
});

router.post('/order', async (req, res) => {
  try {
    res.send('/');
  } catch (err) {
    console.log(err);
    res.status(404).send('Sorry! Something went wrong.');
  }
});
//Importing routes into our index.js/server.js file
module.exports = router;
