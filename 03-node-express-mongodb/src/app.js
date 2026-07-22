import express from "express"

const app = express()

app.use(express.json()) // ? Criando middleware no express

const livros = [
    {
        id: 1,
        title: "The Boys"
    },
    {
        id: 2,
        title: "Gen V"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("Teste de rota padrão via Express.js")
})

app.get("/books", (req, res) => {
    if (livros.length === 0) {
        res.status(404).send("Dados não encontrado.")
        return 
    }

    res.status(200).json(livros)
})

function findBook(id) {
    return livros.findIndex(livro => {
        return livro.id === Number(id)
    })
}

app.get("/books/:id", (req, res) => {
    const index = findBook(req.params.id)
    res.status(200).json(livros[index])
})

app.post("/books", (req, res) => {
    if (Object.keys(req.body || {}).length === 0){
        res.status(400).send("Dado inválido, tente novamente.")
        return
    }

    livros.push(req.body)

    res.status(201).send("Livro criado com sucesso")
})

app.put("/books/:id", (req, res) => {
    const index = findBook(req.params.id)
    livros[index].title = req.body.title
    res.status(200).json("Livro alterado com sucesso")
})

app.delete("/books/:id", (req, res) => {
    const index = findBook(req.params.id)
    livros.splice(index, 1)
    res.status(200).send("Livro excluído com sucesso")
})

export default app