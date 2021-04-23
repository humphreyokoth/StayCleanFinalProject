// Dependencies.
const express = require('express');
const homeRoutes = require('./router/homeRoutes');
const dashboardRoute = require('./router/dashboardRoute');
const employeeRoutes = require('./router/employeeRoutes');
const loginRoutes = require('./router/loginRoutes');
const registerRoutes = require('./router/registerRoutes');
const assignTruckRoutes = require('./router/assignTruckRoutes');
const registerTruckRoutes = require('./router/registerTruckRoutes');
const orderRoutes = require('./router/orderRoutes');
const earningRoutes = require('./router/earningRoutes');
const Registration = require('./models/Registration');

require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
const expressSession = require('express-session')({
  secret: 'secret',
  resave: false,
  saveUninitialized: false,
});

// Instantiations.
const app = express();

//Db connection.
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });

//Configurations.
app.set('view engine', 'pug');
app.set('views', './views');

//Middleware.
app.use(express.urlencoded({ extended: true }));
app.use(expressSession);
app.use(passport.initialize());
app.use(passport.session());

//Passport config.
passport.use(Registration.createStrategy());
passport.serializeUser(Registration.serializeUser());
passport.deserializeUser(Registration.deserializeUser());

// Middleware for serving static files(css,js,images).
app.use(express.static('public'));
app.use('/public/images', express.static(__dirname + '/public/images'));

// Routes.
app.use('/', homeRoutes);
app.use('/dashboard', dashboardRoute);
app.use('/employee', employeeRoutes);
app.use('/login', loginRoutes);
app.use('/register', registerRoutes);
app.use('/registertruck', registerTruckRoutes);
app.use('/assigntrucks', assignTruckRoutes);
app.use('/earnings', earningRoutes);
app.use('/order', orderRoutes);

// Logout.
app.post('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        return res.redirect('/login');
      }
    });
  }
});

// Cater for undefined routes.
app.get('*', (req, res) => {
  res.send('The route specified doesnt exist');
});

//Server.
app.listen(4000, () => console.log('listening on port 4000'));
