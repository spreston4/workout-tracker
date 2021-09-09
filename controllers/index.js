// Require dependencies
const router = require('express').Router();
// const apiRoutes = require('./api');
const htmlRoutes = require('./html-routes.js');

// Establish routes
router.use('/', htmlRoutes);
// router.use('/api', apiRoutes);

// Export
module.exports = router;


