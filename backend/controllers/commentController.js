const Comment = require('../models/comment');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.create_comment_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Create comment post' });
});

module.exports.delete_comment_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Delete comment post' });
});
