const express = require('express')
const app = express()

// Usando a função do express .set para 
app.set("view engine", "ejs")


// Criar rotas

app.get("/", function (req, res){
    const items = [
        {
            title: 'T',
            message: 'TTTT'
        },
        {
            title: 'O',
            message: 'OOOOO'
        },
        {
            title: 'P',
            message: 'PPPPPP'
        },
    ]
    res.render("pages/index", {
        arrayDeObjetos: items
    });
})

app.get("/sobre", function (req, res){
    res.render("pages/about");
})

// ouvindo uma porta
app.listen(8080);
console.log('Rodando');