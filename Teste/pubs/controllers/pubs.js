var Publicacoes = require('../models/pubs')

module.exports.lista_pubs = () => {
    return Publicacoes
        .find({}, {_id:0,id:1,title:1,year:1,type:1})
        .exec() 
}

module.exports.pubs_id = id => {
    return Publicacoes
        .findOne({id: id})
        .exec()
}

module.exports.types = () => {
    return Publicacoes
        .distinct('type')
        .exec()
}

module.exports.pubs_type = type => {
    return Publicacoes
        .find({type: type})
        .exec()
}

module.exports.pubs_type_year = (type, year) => {
    return Publicacoes 
        .aggregate([{$match: {type:type}}, {$match: {year: {$gt: year}}}])
        .exec()
}