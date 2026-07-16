// ? Criando do 0 um servidor http local do zero 

// import http from "http"
import app from "./src/app.js"
import chalk from "chalk"

const PORT = 3000 // ? var fixa para configuração da porta do servidor

// ? Rotas 'manuais' (sem uso de ferramenta) 
// const rotas = {
//     "/": "Seila qualquer coisa",
//     "/teste1": "Rota de teste 01",
//     "/teste2": "Rota de teste 02" 
// }

// ? Req = Request - Res = Response 
// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "content-type": "text/plain" }) // ? definindo cabeçalho de tipo de resposta
//     res.end(rotas[req.url]) // ? Conteúdo a ser exibido no body do server, agora chamando rotas manuais 
// })

app.listen(PORT, () => {
    console.log(chalk.green("Server allready running!"))
})