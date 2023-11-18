const express = require('express');
const router = express.Router();

const optionsController = require('../../../controllers/api/v1/option_controller');

router.delete('/:id/delete', optionsController.delete); // delete option 
router.get('/:id/add_vote', optionsController.addVote); // add vote to the option



module.exports = router;