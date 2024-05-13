const express = require('express');
const router = express.Router();

const user_controller = require('../controllers/userController');

router.post('/', user_controller.login);

router.post('/login', user_controller.login);

router.post('/sign-up', user_controller.sign_up);

module.exports = router;
