const User = require('../models/user');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.login_get = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Login get' });
});

module.exports.login_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Login post' });
});

module.exports.sign_up_get = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Sign up get' });
});

module.exports.sign_up_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Sign up post' });
});
