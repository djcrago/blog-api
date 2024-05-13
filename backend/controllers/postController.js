const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

const asyncHandler = require('express-async-handler');
const { body, validationResult } = require('express-validator');

module.exports.index = asyncHandler(async (req, res, next) => {
  res.json({ message: 'NOT IMPLEMENTED: Index' });
});

module.exports.posts = asyncHandler(async (req, res, next) => {
  const allPosts = await Post.find().sort({ date: -1 }).exec();

  res.json(allPosts);
});

module.exports.create_post_post = [
  body('title', 'Post must have a title').trim().isLength({ min: 1 }).escape(),
  body('body', 'Post must have a body').trim().isLength({ min: 1 }).escape(),
  body('published').notEmpty().escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      author: res.locals.currentUser._id,
      date: Date.now(),
      published: req.body.published,
    });

    if (!errors.isEmpty()) {
      res.json({ post, errors: errors.array() });
    } else {
      await post.save();
      res.json({ message: 'Success' });
    }
  }),
];

module.exports.edit_post_get = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postid).exec();

  if (post !== null) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports.edit_post_post = [
  body('title', 'Post must have a title').trim().isLength({ min: 1 }).escape(),
  body('body', 'Post must have a body').trim().isLength({ min: 1 }).escape(),
  body('published').notEmpty().escape(),

  asyncHandler(async (req, res, next) => {
    const errors = validationResult(req);

    const post = new Post({
      title: req.body.title,
      body: req.body.body,
      author: res.locals.currentUser._id,
      date: Date.now(),
      published: req.body.published,
      _id: req.params.postid,
    });

    if (!errors.isEmpty()) {
      res.json({ post, errors: errors.array() });
    } else {
      await Post.findByIdAndUpdate(req.params.postid, post, {});
      res.json({ message: 'Success' });
    }
  }),
];

module.exports.delete_post_get = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postid).exec();

  if (post !== null) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports.delete_post_post = asyncHandler(async (req, res, next) => {
  await Post.findByIdAndDelete(req.params.postid);
  res.json({ message: 'Success' });
});

module.exports.publish_post_get = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postid).exec();

  if (post !== null) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports.publish_post_post = asyncHandler(async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    date: Date.now(),
    published: true,
    _id: req.params.postid,
  });

  await Post.findByIdAndUpdate(req.params.postid, post, {});
  res.json(post);
});

module.exports.unpublish_post_get = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postid).exec();

  if (post !== null) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});

module.exports.unpublish_post_post = asyncHandler(async (req, res, next) => {
  const post = new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
    date: Date.now(),
    published: false,
    _id: req.params.postid,
  });

  await Post.findByIdAndUpdate(req.params.postid, post, {});
  res.json(post);
});

module.exports.post_detail = asyncHandler(async (req, res, next) => {
  const post = await Post.findById(req.params.postid).exec();

  if (post !== null) {
    res.json(post);
  } else {
    res.status(404).json({ message: 'Post not found' });
  }
});
