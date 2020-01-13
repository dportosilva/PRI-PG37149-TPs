var express = require('express');
var router = express.Router();

var Publicacoes = require('../controllers/pubs')

// GET /api/pubs
router.get('/pubs', function(req, res) {
  if(req.query.type && req.query.year)
    Publicacoes.pubs_type_year(req.query.type, req.query.year)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  else if(req.query.type){
    Publicacoes.pubs_type(req.query.type)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
  }
  else{
    Publicacoes.lista_pubs()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
  }
})

// GET /api/pubs/id
router.get('/pubs/:id', function(req, res) {
  Publicacoes.pubs_id(req.params.id)
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

// GET /api/pubs/types
router.get('/pubs/types', function(req, res) {
  Publicacoes.types()
      .then(dados => res.jsonp(dados))
      .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;
