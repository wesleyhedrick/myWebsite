const express = require('express');
const router = express.Router();

/* GET codeExegete page. */
router.get('/', function(req, res, next) {
  res.render('codeExegete', { title: 'codeExpositor - "line by line"', variable: 'Very Own' });
});

module.exports = router;
