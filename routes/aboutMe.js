const express = require('express');
const router = express.Router();

/* GET aboutme page. */
router.get('/', function(req, res, next) {
  res.render('aboutMe', { title: 'About Me' });
});

module.exports = router;
