// Require dependencies
const router = require('express').Router();
const workoutRoutes = require('./workout-routes.js');

// Establish routes
router.use('/workouts', workoutRoutes);

// Export
module.exports = router;