const express = require('express');
const router = express.Router();
const content = require('../text')

/* GET aboutme page. */
router.get('/', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me', content});
});

module.exports = router;
