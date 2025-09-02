const express = require('express');
const router = express.Router();

// Import registration router
const registrationRouter = require('./registration');

// Mount it under /authentication
router.use('/authentication', registrationRouter);

// Test root route
router.get('/', (req, res) => {
  res.send('API root working');
});

module.exports = router;
