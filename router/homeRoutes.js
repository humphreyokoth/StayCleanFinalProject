const express = require('express');
const router = express.Router();

// gets and displays a login page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home' });
});

//
router.get('/', (req, res) => {
  res.redirect('/register');
});

module.exports = router;
