const express = require('express');
const router = express.Router();

// Import the api router
const apiRouter = require('./api');

// Use it under /api
router.use('/api', apiRouter);

module.exports = router;
