import express from "express"

const app = express()

export default app.get("/", (req, res) => {
    res.status(200).send("Teste de rota padrão via Express.js")
})