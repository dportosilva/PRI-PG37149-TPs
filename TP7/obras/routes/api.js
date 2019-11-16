var express = require('express');
var router = express.Router();

var Obras = require('../controllers/obras')

// GET /obras
router.get('/obras', function(req, res) {
    if(req.query.periodo){
        Obras.filtrarPeriodo(req.query.periodo)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.anoCriacao){
        Obras.filtrarAnoCriacao(req.query.anoCriacao)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else if(req.query.compositor){
        Obras.filtrarCompositor(req.query.compositor)
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
    else{
        Obras.listar()
            .then(dados => res.jsonp(dados))
            .catch(erro => res.status(500).jsonp(erro))
    }
})

// GET /compositores
router.get('/compositores', function(req, res) {
    Obras.listarCompositores()
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

// GET /compositores/:nome
router.get('/compositores/:nome', function(req, res) {
    var nome = req.params.nome
    Obras.filtrarCompositor(nome)
        .then(dados => res.jsonp(dados))
        .catch(erro => res.status(500).jsonp(erro))
})

module.exports = router;