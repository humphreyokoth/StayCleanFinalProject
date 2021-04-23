//Express dependencies to be used by routes.
const express = require('express');
const TruckReg = require('../models/TruckReg');

//Exploring route
const router = express.Router();

const Order = require('../models/Order');

//Route for order picking truck number and truck code  from the database and displaying in the order form.
router.get('/order', async (req, res) => {
  const trucknumber = await TruckReg.find();
  const trucks = await TruckReg.find();
  // console.log(trucks);
  res.render('order', {truck: trucks });
});

router.post('/order', async (req, res) => {
  try {
    const order = new Order(req.body);    
    await order.save();
    res.redirect('/');
  } catch (err) {
    console.log(err);
    res.status(404).send('Sorry! Something went wrong.');
  }
});

// Save data from the order pug file.
router.post('/order', async (req, res) => {
  try {
    const order = new Order(req.body);  
    await order.save();
    res.redirect('/order/list');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }
});

// Show Employee data from database on the employeelist pug file.
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
// Update record based on the _id from the database.

router.get('/update/:id', async (req, res) => {
  try {
    const updateOrder = await Order.findOne({ _id: req.params.id });
    res.render('updateOrder', { user: updateOrder });
    // res.send(updateOrder);
  } catch (err) {
    res.status(400).send('Unable to find item in the database');
  }
});

// Route to save the updated data
router.post('/update', async (req, res) => {
  try {
    await Order.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect('/order/list');
  } catch (err) {
    console.log(err);
    res.status(404).send('Unable to update item in the database');
  }
});

//Delete Order record from the database.

router.post('/delete', async (req, res) => {
  try {
    await Order.deleteOne({ _id: req.body.id });
    res.redirect('back');
  } catch (err) {
    res.status(400).send('Unable to delete item in the database');
  }
});
//Importing routes into our index.js/server.js file
module.exports = router;
