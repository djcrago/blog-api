const express = require('express');
const router = express.Router();

const post_controller = require('../controllers/postController');
const comment_controller = require('../controllers/commentController');

router.get('/', post_controller.posts);

router.get('/create-post', post_controller.create_post_get);

router.post('/create-post', post_controller.create_post_post);

router.get('/edit-post/:postid', post_controller.edit_post_get);

router.post('/edit-post/:postid', post_controller.edit_post_post);

router.get('/delete-post/:postid', post_controller.delete_post_get);

router.post('/delete-post/:postid', post_controller.delete_post_post);

router.get('/publish-post/:postid', post_controller.publish_post_get);

router.post('/publish-post/:postid', post_controller.publish_post_post);

router.get('/:postid', post_controller.post_detail);

router.post('/:postid/create-comment', comment_controller.create_comment_post);

router.post('/:postid/delete-comment', comment_controller.delete_comment_post);

module.exports = router;
