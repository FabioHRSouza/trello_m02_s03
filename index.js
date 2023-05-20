const http = require("http")
const fs = require("fs")
const querystring = require("querystring")

function ListarProdutos(){
    try {
        const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
        return JSON.stringify(dados.produtos)
    } catch (erro){
        return "Erro ao executar"
    }
}

const server = http.createServer((req, res) => {

    if(request.url == "/produto"){
        switch(req.method){
          
            case "GET":
            // aqui vai a lógica do GET - exercício 5
            break

            case "POST":
            // aqui vai a lógica do POST - exercício 7
            break
        }
    }
})


server.listen(3000)
    console.log("Servidor rodando na porta http://localhost:3000")
    