const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post('/', user_controller.login_post);

router.post('/sign-up', user_controller.sign_up_post);

module.exports = router;
