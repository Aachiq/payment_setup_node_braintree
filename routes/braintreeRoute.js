const express = require('express');
const { generateToken } = require('../controllers/braintreeController');
const router = express.Router();

router.get('/', (req,res) => {
    res.json({msg : "helo braintree"})
});
router.get('/generate-token', generateToken);

module.exports = router;