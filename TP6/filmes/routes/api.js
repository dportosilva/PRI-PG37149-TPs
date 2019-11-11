var express = require('express');
var router = express.Router();

var Filmes = require('../controllers/filmes')

// GET /api/filmes
router.get('/filmes', function(req, res) {
    Filmes.listar()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

// GET /api/filmes/id
router.get('/filmes/:id', function(req, res) {
    Filmes.consultar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

// POST /api/filmes
router.post('/filmes',function(req, res) {
    Filmes.inserir(req.body)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
});

// DELETE /api/filmes/id
router.delete('/filmes/:id', function(req, res) {
    Filmes.deletar(req.params.id)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;