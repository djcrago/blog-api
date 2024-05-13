const Comment = require('../models/comment');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.create_comment_post = [
  body('body', 'Comment must have a body').trim().isLength({ min: 1 }).escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const comment = new Comment({
      body: req.body.body,
      date: Date.now(),
      post: req.params.postid,
    });

    if (!errors.isEmpty()) {
      res.json({ comment, errors: errors.array() });
    } else {
      await comment.save();
      res.json({ message: 'Success' });
    }
  }),
];

module.exports.delete_comment_post = asyncHandler(async (req, res, next) => {
  await Comment.findByIdAndDelete(req.params.commentid);
  res.json({ message: 'Success' });
});
