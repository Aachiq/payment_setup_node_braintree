const express = require('express');
const { generateToken, processPayment } = require('../controllers/braintreeController');
const router = express.Router();

router.get('/generate-token', generateToken);
router.get('/purchase/:userId', processPayment);

module.exports = router;