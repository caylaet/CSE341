const express = require('express');

const professionalController = require('../controllers/professional');

const router = express.Router();

// GET 
router.get('/', professionalController.getPosts);


module.exports = router;