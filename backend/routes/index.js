const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.redirect('https://github.com/djcrago/blog-api');
});

module.exports = router;
