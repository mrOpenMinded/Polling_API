const express = require('express');
const router = express.Router();


const questionsController = require('../../../controllers/api/v1/question_controller');
const optionsController = require('../../../controllers/api/v1/option_controller');

router.post('/create', questionsController.create); // create question
router.delete('/:id/delete', questionsController.delete); // delete question
router.get('/:id', questionsController.getQuestion); // get question object | details

router.post('/:id/options/create', optionsController.create); // create option

module.exports = router;