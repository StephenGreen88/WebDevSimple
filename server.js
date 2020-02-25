// Require in necessary dependencies
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

// Require routes
const indexRouter = require('./routes/index');

// Set the view engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout');
app.use(expressLayouts);
app.use(express.static('public'))

// Set up the app.use for the indexRouter
app.use('/', indexRouter);

// Listen for the server
app.listen(process.env.PORT || 3000);