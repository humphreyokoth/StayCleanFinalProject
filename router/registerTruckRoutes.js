const express = require('express');
const TruckReg = require('../models/TruckReg');
const router = express.Router();

// specify what to do when user hit the '/'(home page) route/endpoint
router.get('/', (req, res) => {
  res.render('registerTruck', { title: 'Truck Registration' });
});

router.post('/', async (req, res) => {
  try {
    const newtruck = new TruckReg(req.body);
    await newtruck.save();
    res.redirect('/registerTruck');
    // await TruckReg.register(,(err) => {
    //   if (err) {
    //     throw err;
    //   }
    //   res.redirect('/login');
    // });
  } catch (err) {
    res.status(400).send('Sorry! Something went wrong.');
    console.log(err);
  }
});

module.exports = router;
