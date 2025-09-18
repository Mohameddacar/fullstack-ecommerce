const express = require('express');
const router = express.Router();
const registrationController = require('../../controllers/registrationController')
const secureApi = require('../../middleware/secureApi')

router.post('/registration',secureApi, registrationController)
module.exports = router;
