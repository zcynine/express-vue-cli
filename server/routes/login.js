var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function(req, res, next) {
  res.json({
  	name: 'zcynine',
  	pwd: '123'
  });
});

module.exports = router;
