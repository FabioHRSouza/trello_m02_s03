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

function CriarProduto(novoProduto){
    try {
      const dados = JSON.parse(fs.readFileSync("dados.json", "utf-8"))
      dados.produtos.push(JSON.parse(novoProduto))
      fs.writeFileSync("dados.json", JSON.stringify(dados))
      return "Produto cadastrado com sucesso!"
    } catch {
      return "Erro ao cadastrar"
    }
  }

const server = http.createServer((req, res) => {

    if(request.url == "/produto"){
        switch(req.method){
          
            case "GET":
                response.writeHead(200, {"Content-Type": "application/json; charset: utf-8;"})
                response.end(ListarProdutos())
            break

            case "POST":
            // aqui vai a lógica do POST - exercício 7
            break
        }
    }
})


server.listen(3000)
    console.log("Servidor rodando na porta http://localhost:3000")
    