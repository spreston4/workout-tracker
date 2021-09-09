// Require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const WorkoutSchema = new Schema({});

// Create model from schema
const Workout = mongoose.model('Workout', WorkoutSchema);

// Export model
module.exports = Workout;