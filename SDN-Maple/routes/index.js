var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tutorials', function(req, res, next) {
  res.render('tutorials', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('about');
});

router.get('/visualization', function(req, res, next) {
  res.render('visualization');
});

router.get('/stepbystep', function(req, res, next) {
  res.render('stepbystep');
});

module.exports = router;
