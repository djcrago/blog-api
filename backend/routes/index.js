const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');

/* GET home page. */
router.get('/', post_controller.index);

module.exports = router;
