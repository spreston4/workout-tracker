// Require dependencies
const router = require('express').Router();
const mongoose = require('mongoose');
const db = require('../../models');

// Create a new workout
router.post('/', async (req, res) => {
    try {

        const workoutData = await db.Workout.create(req.body);
        res.status(200).json(workoutData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Edit a workout by adding an exercise
router.put('/:id', async (req, res) => {
    try {

        // Update with body info
        const workoutData = await db.Workout.updateOne(
            { _id: req.params.id },
            { $push: { exercises: req.body } },
        );

        // Retrieve updated record
        const durationData = await db.Workout.findOne(
            { _id: req.params.id },
        );

        // Calculate total duration
        const newDuration = await durationData.calcDuration();

        // Update workout with total duration
        const updateData = await db.Workout.updateOne(
            { _id: req.params.id },
            { $set: { totalDuration: newDuration } },
        );
       
        res.status(200).json(updateData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Get last workout
router.get('/', async (req, res) => {
    try {

        const workoutData = await db.Workout.find({})
            .sort({ day: -1 })
            .limit(1);


        res.status(200).json(workoutData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Get workouts in range
router.get('/range', async (req, res) => {
    try {

        const workoutData = await db.Workout.find({})
            .sort({ day: -1 })
            .limit(7);


        res.status(200).json(workoutData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Export
module.exports = router;