const express = require('express');
const filterShows = require('../controllers/showsController');
const router = express.Router();

router.post('/', filterShows);

module.exports = router;
