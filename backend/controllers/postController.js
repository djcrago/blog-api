const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.posts = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find()
    .sort({ date: -1 })
    .populate('author')
    .exec();

  res.json(allPosts);
});

module.exports.create_post = [
  body('title', 'Title must not be empty').trim().notEmpty().escape(),
  body('body', 'Body must not be empty').trim().notEmpty().escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      author: res.locals.currentUser._id,
      date: Date.now(),
      published: false,
    });

    if (!errors.isEmpty()) {
      res.status(400).json({ post, errors: errors.array() });
    } else {
      await post.save();
      res.status(201).json({ post, message: 'post created successfully' });
    }
  }),
];

module.exports.edit_post = [
  body('title', 'Title must not be empty').trim().notEmpty().escape(),
  body('body', 'Body must not be empty').trim().notEmpty().escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      res.status(400).json({
        post: { title: req.body.title, body: req.body.body },
        errors: errors.array(),
      });
    } else {
      await Post.findByIdAndUpdate(
        req.params.postid,
        {
          title: req.body.title,
          body: req.body.body,
          edited: Date.now(),
        },
        {}
      );
      res.json({ message: 'post edited successfully' });
    }
  }),
];

module.exports.delete_post = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.postid);
  res.json({ message: 'post deleted successfully' });
});

module.exports.publish_post = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndUpdate(req.params.postid, { published: true }, {});
  res.json({ message: 'post published successfully' });
});

module.exports.unpublish_post = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndUpdate(req.params.postid, { published: false }, {});
  res.json({ message: 'post unpublished successfully' });
});

module.exports.post_detail = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postid).populate('author').exec();

  if (!post) {
    res.status(404).json({ message: 'post not found' });
  } else {
    res.json(post);
  }
});
