const express = require("express"); // Importanto o express
const app = express(); //Iniciando o express

app.get("/",function(req,res){   //Em toda a rota criado, deverá ter alguma resposta.
     res.send("<h1>Bem vindo ao meu site</h1>")  //Não é possivel enviar mais de uma resposta.
});

app.get("/blog/:artigo?",function(req,res){
    
    var artigo = req.params.artigo;

    if(artigo){
        res.send("<h2> Artigo: " + artigo + "</h2>")
    }else{
        res.send("Bem vindo ao meu blog!");
    }
})

app.get("/canal/youtube", function (req,res){
    var canal = req.query["canal"]; //QueryParam

    if(canal) {
    res.send(canal);
    }else{
        res.send("Nenhum canal fornecido!")
    }
})

app.get("/ola/:nome", function(req,res){
    //REQ -> Dados enviados pelo Usuario
    //REs -> REsposta que vai ser enviada para o Usuario
    var nome = req.params.nome;
    res.send("<h2>Olá " + nome + " </h2>")
})

app.listen(4000,function(erro){
if(erro){
    console.log("Ocorreu um erro");
} else {
    console.log("servidor iniciado com sucesso!");
}
})
