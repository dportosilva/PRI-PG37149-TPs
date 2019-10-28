var http = require('http');
var fs = require('fs');

var myserver = http.createServer(function(req, res)
{
    console.log(req.method + ' ' + req.url);
    var aux = req.url.split('/');     
    var num = (aux[aux.length -1]);

    if(req.method == 'GET')
    {
        if (req.url == '/musica/' + num && parseInt(num, 10) < 449)
        {
            fs.readFile('data/doc' + num + '.xml', (erro, dados) => 
            {
                if(!erro)
                {
                    res.writeHead(200, {'Content-Type': 'text/xml'});
                    res.write(dados);
                }
                else
                {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.write("Arquivo não encontrado!!");
                }
                res.end();
            })
        }
        else if(req.url == '/musica/doc2html.xsl')
        {
            fs.readFile('doc2html.xsl', (erro, dados) =>
            {
                if(!erro)
                {
                    res.writeHead(200, {'Content-Type': 'text/xsl'});
                    res.write(dados);
                }
                else
                {
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    res.write("Erro no aquivo XSL");
                }
                res.end();
            })
        }
        else
            res.end('Erro: pedido não suportado [' + req.url + ']');
    }
    else
        res.end('Erro: método não suportado [' + req.method + ']');
})

myserver.listen(3021);
console.log('Servidor à escuta na porta 3021...');