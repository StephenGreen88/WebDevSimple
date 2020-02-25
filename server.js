if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

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

// Require in mongoose
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true
});
// Handle errors
const db = mongoose.connection
db.on('error', error => console.error(error));
db.once('open', () => console.log('Connected to Mongoose'));


// Set up the app.use for the indexRouter
app.use('/', indexRouter);

// Listen for the server
app.listen(process.env.PORT || 3000);