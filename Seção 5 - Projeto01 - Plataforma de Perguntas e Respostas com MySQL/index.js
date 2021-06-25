const express = require("express");
const app = express();
//TODO HTML deverá estar na pasta views

//Estou dizendo para o Express usar o EJS como View engine
app.set('view engine','ejs');

app.get("/:nome/:lang",(req,res)=> {
    var nome = req.params.nome;
    var lang = req.params.lang;
    res.render("index",{
        nome : nome,
        lang: lang,
        empresa: "Rax Informatica",
        inscritos: 8000
    });
});

app.listen(8080,() => {
    console.log("App rodando!");
});