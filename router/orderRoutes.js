//Express dependencies to be used by routes.
const express = require('express');

//Exploring route
const router = express.Router();

const Order = require('../models/Order');

//Route for order
router.get('/order', (req, res) => {
  res.render('order', { title: 'Orders' });
});

router.post('/order', async (req, res) => {
  try {
     const order = new Order(req.body);
     // employee.imageupload = req.file.path;
    await order.save();
    res.redirect('/order/list');
  } catch (err) {
    console.log(err);
    res.status(404).send('Sorry! Something went wrong.');
  }
});


// Save data from the order pug file.
router.post('/order', async (req, res) => {
    try {
      const order = new Order(req.body);
      // employee.imageupload = req.file.path;
      await order.save();
      res.redirect('/order/list');
    } catch (err) {
      console.log(err);
      res.send('Sorry! Something went wrong.');
    }
  }
);

// show Employee data from database on the employeelist pug file
router.get('/list', async (req, res) => {
  try {
    // Find all the data in the Order collection
    const orderDetails = await Order.find();
    res.render('orderList', {
      users: orderDetails,
      title: 'Order List',
    });
  } catch (err) {
    res.send('Failed to retrive order details');
  }
});

//Importing routes into our index.js/server.js file
module.exports = router;
