var Obras = require('../models/obras')

module.exports.listar = () => {
    return Obras
        .find()
        .exec() 
}

module.exports.filtrarPeriodo = p => {
    return Obras
        .find({periodo: p})
        .exec()
}

module.exports.filtrarAnoCriacao = a => {
    return Obras
        .find({anoCriacao: a})
        .exec()
}

module.exports.filtrarCompositor = c => {
    return Obras
        .find({compositor: c})
        .exec()
}

module.exports.listarCompositores = () => {
    return Obras
        .distinct("compositor")
        .exec()
}