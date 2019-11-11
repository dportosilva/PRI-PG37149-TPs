var express = require('express');
var router = express.Router();
const axios = require('axios')

// GET /filmes
router.get('/', function(req, res, next) {
    axios.get('http://localhost:3004/api/filmes')
        .then(dados => {
            console.log('Através da página')
            res.render('lista-filmes', { lista: dados.data }); 
        })
        .catch(erro => {
            res.render('error', {error: erro});
        }) 
})

// GET /filmes/inserir
router.get('/inserir', function(res, res){
    res.render('form-filme')
})

// GET /filmes/id
router.get('/:id', function(req, res){
    var id = req.params.id
    axios.get('http://localhost:3004/api/filmes/' + id)
        .then(dados => {
            res.render('filme', { lista: dados.data }); 
        })
        .catch(erro => {
            res.render('error', {error: erro});
        })
})

// POST /filmes
router.post('/', function(req, res){
    axios.post('http://localhost:3004/api/filmes', req.body)
        .then(dados => {
            res.redirect('/'); 
        })
        .catch(erro => {
            res.render('error', {error: erro});
        })
})

// DELETE /filmes/id
router.delete('/:id', function(req, res){~
    console.log("chegou aqui")
    var id = req.params.id
    axios.delete('http://localhost:3004/api/filmes/' + id)
        .then(dados => {
            res.render('/'); 
        })
        .catch(erro => {
            res.render('error', {error: erro});
        })
})

module.exports = router;