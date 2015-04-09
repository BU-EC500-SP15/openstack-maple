var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tutorial', function(req, res, next) {
  res.render('tutorials', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

router.get('/visualization', function(req, res, next) {
  res.render('visualization', { });
});


module.exports = router;
