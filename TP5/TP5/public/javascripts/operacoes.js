function verNotas(ident){
    axios.get('/alunos/' + ident)
        .then(response => window.location.assign('/alunos/' + ident))
        .catch(error => console.log(error))
}

function excluiAluno(ident){
    axios.delete('/alunos/' + ident)
        .then(response => window.location.assign('/alunos'))
        .catch(error => console.log(error))
}

function excluiNota(args){
    var x = args.split(',')
    var aluno = x[0]
    var nota = x[1]
    axios.delete('/alunos/' + aluno + '/notas/' + nota)
        .then(response => window.location.assign('/alunos/' + aluno))
        .catch(error => console.log(error))
}