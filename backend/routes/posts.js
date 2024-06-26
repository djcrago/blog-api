const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

router.get('/', post_controller.posts);

router.get('/public', post_controller.public_posts);

router.post('/create-post', post_controller.create_post);

router.post('/edit-post/:postid', post_controller.edit_post);

router.post('/delete-post/:postid', post_controller.delete_post);

router.post('/publish-post/:postid', post_controller.publish_post);

router.post('/unpublish-post/:postid', post_controller.unpublish_post);

router.get('/:postid', post_controller.post_detail);

router.get('/:postid/comments', comment_controller.comments);

router.post('/:postid/create-comment', comment_controller.create_comment);

router.post(
  '/:postid/delete-comment/:commentid',
  comment_controller.delete_comment
);

module.exports = router;
