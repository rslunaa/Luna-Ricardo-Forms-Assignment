var express = require('express');
var router = express.Router();
const formController = require('../controllers/formController');

/* GET home page. */
router.get('/create', function(req, res, next) {
  res.render('birds');
});

module.exports = router;
