//
const express = require('express');
const router = express.Router();
const AssignTruck = require('../models/AssignTruck');

//Get and show the register.pug file.
router.get('/', (req, res) => {
  res.render('assignTruck', { title: 'Assign Trucks' });
});

// Save data from the assignTruck pug file.
router.post('/', async (req, res) => {
  try {
    const assigntruck = new AssignTruck(req.body);
    await assigntruck.save();
    res.redirect('/employee/list');
  } catch (err) {
    console.log(err);
    res.send('Sorry! Something went wrong.');
  }
});

// Show Employee data from database on the employeelist pug file.
router.get('/list', async (req, res) => {
  try {
    // Find all the data in the Employee collection.
    const employeeDetails = await Employee.find();
    res.render('employeeList', {
      users: employeeDetails,
      title: 'Employee List',
    });
  } catch (err) {
    res.send('Failed to retrive employee details');
  }
});

// Update record based on the _id from the database.

router.get('/update/:id', async (req, res) => {
  try {
    const updateEmp = await Employee.findOne({ _id: req.params.id });
    res.render('updateEmployee', { user: updateEmp });
  } catch (err) {
    res.status(400).send('Unable to find item in the database');
  }
});

// Route to save the updated data
router.post('/update', async (req, res) => {
  try {
    await Employee.findOneAndUpdate({ _id: req.query.id }, req.body);
    res.redirect('/employee/list');
  } catch (err) {
    console.log(err);
    res.status(404).send('Unable to update item in the database');
  }
});

//Delete and employee record from the database.
// add the delete code to the employeelist pug file
router.post('/delete', async (req, res) => {
  try {
    await Employee.deleteOne({ _id: req.body.id });
    res.redirect('back');
  } catch (err) {
    res.status(400).send('Unable to delete item in the database');
  }
});

module.exports = router;
