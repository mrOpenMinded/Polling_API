/**
 * API version 1.0 routing file
 */

const express = require('express');
const router = express.Router();

// questions routes
router.use('/questions', require('./question'))


// options routes
router.use('/options', require('./option'));

module.exports = router;