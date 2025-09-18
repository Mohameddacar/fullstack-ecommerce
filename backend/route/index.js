const express = require('express');
const router = express.Router();

// Import the api router
const apiRouter = require('./api');

// Use it under /api
let Api = process.env.API_BASE_URL

router.use(Api, apiRouter);

module.exports = router;
