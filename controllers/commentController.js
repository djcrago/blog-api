const Comment = require('../models/comment');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.create_comment_post = [
  body('body', 'Comment must not be empty')
    .trim()
    .isLength({ min: 1 })
    .escape(),

  asyncHandler(async (req, res) => {
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

module.exports.delete_comment_post = asyncHandler(async (req, res) => {
  await Comment.findByIdAndDelete(req.params.commentid);
  res.json({ message: 'comment deleted successfully' });
});
