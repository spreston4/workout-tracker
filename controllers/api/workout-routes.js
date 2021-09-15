// Require dependencies
const router = require('express').Router();
const Workout = require('../../models/Workout.js');

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

        const workoutData = await db.Workout.updateOne(
            { _id: req.params.id },
            { $push: { exercises: req.body }}
        );

        res.status(200).json(workoutData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// Get last workout

// Get workouts in range


// Export
module.exports = router;