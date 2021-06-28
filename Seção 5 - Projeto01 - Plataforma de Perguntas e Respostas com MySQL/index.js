const express = require("express");
const app = express();
//TODO HTML deverá estar na pasta views

//Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');

app.get("/:nome/:lang",(req,res)=> {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = true;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 23},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4}
    ]

    res.render("index",{
        nome : nome,
        lang: lang,
        empresa: "Rax Informatica",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080,() => {
    console.log("App rodando!");
});