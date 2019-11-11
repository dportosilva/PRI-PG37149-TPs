var express = require('express');
var router = express.Router();

// GET página principal
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gestão de Filmes' });
});

module.exports = router;
