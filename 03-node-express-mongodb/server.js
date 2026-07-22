import app from "./src/app.js"
import chalk from "chalk"

const PORT = 3000 // ? var fixa para configuração da porta do servidor

app.listen(PORT, () => {
    console.log(chalk.green("Server allready running!"))
})