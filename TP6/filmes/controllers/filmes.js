var Filme = require('../models/filmes')

module.exports.listar = () => {
    return Filme
        .find()
        .exec() 
}

module.exports.consultar = id => {
    return Filme
        .findOne({_id: id})
        .exec()
}

module.exports.inserir = filme => {
    var novo = new Filme(filme)
    return novo.save()
}

module.exports.deletar = id => {
    return Filme
        .deleteOne({_id: id})
        .exec()
}