//Express dependencies to be used by routes.
const express = require('express');

//Exploring route
const router = express.Router();

//Route for home
router.get('/', (req, res) => {
  res.render('orders', { title: 'Orders' });
});
//Importing routes into our index.js/server.js file
module.exports = router;