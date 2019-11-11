function apagaFilme(arg){
    axios.delete('/filmes/' + arg)
        .then(response => window.location.assign('/filmes'))
        .catch(error => console.log(error))
}