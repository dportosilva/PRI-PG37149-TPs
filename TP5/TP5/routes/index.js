var express = require('express');
var router = express.Router();
var jsonfile = require('jsonfile')

var myBD = __dirname + "/../data/alunos.json"

// GET /alunos
router.get('/alunos', function(req, res) {
  jsonfile.readFile(myBD, (erro, dados) => {
    if(!erro){
        res.render('index', {lista: dados})              
    }
    else{
        res.render('error', {error: erro})  
    }
  }) 
})

// GET /alunos/idAluno
router.get('/alunos/:idAluno', function(req, res) {
  var ident = req.params.idAluno;
  jsonfile.readFile(myBD, (erro, dados)=>{
      if(!erro){
        var aluno = dados.find(a => a.utilizador == ident);
        console.log(aluno);
        res.render('aluno', { lista: aluno });
      }
      else{
        res.render('error', {error: erro})  
      }
    })
});

// POST /alunos
router.post('/alunos', function(req, res) {
  var aluno = req.body
  aluno = {...aluno, notas:[]}
  jsonfile.readFile(myBD, (erro, dados)=>{
      if(!erro){
          dados.push(aluno)
          jsonfile.writeFile(myBD, dados, erro => {
              if(erro) console.log(erro)
              else console.log('Aluno gravado com sucesso.')
          })
      }
      res.render('index', {lista: dados})
  })
})

// POST /alunos/idAluno/notas
router.post('/alunos/:idAluno/notas', function(req, res) {
  var ident = req.params.idAluno;
  var nota = req.body
  jsonfile.readFile(myBD, (erro, dados)=>{
    if(!erro){
      var aluno = dados.find(a => a.utilizador == ident);
      aluno['notas'].push(nota)
      jsonfile.writeFile(myBD, dados, erro => {
        if(erro) console.log(erro)
        else console.log('Nota gravada com sucesso.')
      })
    }
    res.render('aluno', { lista: aluno });
  })
})

// DELETE /aluno/idAluno
router.delete('/alunos/:idAluno', function(req, res) {
  var ident = req.params.idAluno
  jsonfile.readFile(myBD, (erro, dados)=>{
    if(!erro){
      var index = dados.findIndex(a => a.utilizador == ident)
      if(index > -1){
        dados.splice(index, 1)
        jsonfile.writeFile(myBD, dados, erro => {
          if(erro) console.log(erro)
          else console.log('Aluno excluído com sucesso.')
        })
      }
    }
    res.render('index', {lista: dados})
  })
})

// DELETE /aluno/idAluno/notas/idNota
router.delete('/alunos/:idAluno/notas/:idNota', function(req, res) {
  var ident = req.params.idAluno
  var nota = req.params.idNota
  jsonfile.readFile(myBD, (erro, dados)=>{
    if(!erro){
      var aluno = dados.find(a => a.utilizador == ident)
      console.log('aluno = ' + aluno)
      var index = aluno['notas'].findIndex(n => n.identificador == nota)
      if(aluno && (index > -1)){
        aluno['notas'].splice(index, 1)
        jsonfile.writeFile(myBD, dados, erro => {
          if(erro) console.log(erro)
          else console.log('Nota excluída com sucesso.')
        })
      }
    }
    res.render('aluno', {lista: aluno})
  })
})

module.exports = router;
