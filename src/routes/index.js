var express = require('express');
var router = express.Router();
//const formController = require('./controllers/formController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
