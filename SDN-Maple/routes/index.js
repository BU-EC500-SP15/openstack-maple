var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tutorials', function(req, res, next) {
  res.render('tutorial', { title: 'Express' });
});

router.get('/about', function(req, res, next) {
  res.render('intro', { title: 'Express' });
});


module.exports = router;
