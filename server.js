// Require dependencies
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
// const db = require('./models');

// Establish port & express
const PORT = process.env.PORT || 3000;
const app = express();

// Establish middleware
app.use(logger('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Create mongodb connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb', { useNewUrlParser: true });

// Require routes

// Start server
app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}.`);
});
