const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.index = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Index' });
});

module.exports.posts = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Posts' });
});

module.exports.create_post_get = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Create post get' });
});

module.exports.create_post_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Create post post' });
});

module.exports.edit_post_get = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Edit post get' });
});

module.exports.edit_post_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Edit post post' });
});

module.exports.delete_post_get = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Delete post get' });
});

module.exports.delete_post_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Delete post post' });
});

module.exports.publish_post_get = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Publish post get' });
});

module.exports.publish_post_post = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Publish post post' });
});

module.exports.post_detail = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Post detail' });
});
