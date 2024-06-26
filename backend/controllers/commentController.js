const Comment = require('../models/comment');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.comments = asyncHandler(async (req, res, next) => {
  const comments = await Comment.find({ post: req.params.postid }).exec();
  res.json(comments);
});

module.exports.create_comment = [
  body('body', 'Comment must not be empty').trim().notEmpty().escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const comment = new Comment({
      body: req.body.body,
      date: Date.now(),
      post: req.params.postid,
    });

    if (!errors.isEmpty()) {
      res.status(400).json({ comment, errors: errors.array() });
    } else {
      await comment.save();
      res.status(201).json({ message: 'comment created successfully' });
    }
  }),
];

module.exports.delete_comment = asyncHandler(async (req, res, next) => {
  await Comment.findByIdAndDelete(req.params.commentid);
  res.json({ message: 'comment deleted successfully' });
});
