// Require dependencies
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const WorkoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now,
        required: 'Please enter a date for your workout.'
    },

    exercises: [{
        // Required
        type: {
            type: String,
            required: 'Please enter an exercise type.'
        },

        name: {
            type: String,
            required: 'Please enter an exercise name.'
        }, 

        duration: {
            type: Number,
            required: 'Please enter an exercise duration.'
        }, 

        // Optional
        weight: Number,
        reps: Number, 
        sets: Number,
        distance: Number,
    }],
});

// Virtual totalDuration - loop over workouts and get total duration

// Create model from schema
const Workout = mongoose.model('Workout', WorkoutSchema);

// Export model
module.exports = Workout;