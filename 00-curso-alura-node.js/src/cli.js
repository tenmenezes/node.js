import fs from 'fs'
import { Command } from 'commander'
import { countWords } from './index.js'
import { assemblesOutputFile } from './helpers.js'
import handleErrors from './errors/errorFunctions.js'

const program = new Command()

program
.version('0.0.1')
.option('-t, --text <string>', 'caminho do texto a ser processado')
.option('-d, --destiny <string>', 'caminho da pasta onde o arquivo de resultados será salvo')
.action((options) => {
    const { text, destiny } = options

    if (!text || !destiny) {
        console.log('Error: Please, insert a origin and destiny path');

        program.help()
        return
    }

})

const link = process.argv[2]
const address = process.argv[3]

fs.readFile(link, 'utf-8', (err, text) => {
    try {
        if (err)
            throw err





        const result = countWords(text)
        createAndSaveFile(result, address)
    } catch (err) {
        console.error(handleErrors(err))
    }
})

// ? Forma mais simplificada de transformar um código em operação assíncrona, apenas adicionando async e await

async function createAndSaveFile(listWords) {
    const newFile = `${address}/result.txt`
    const textWords = assemblesOutputFile(listWords)

    try {
        await fs.promises.writeFile(newFile, textWords)
        console.log('file created');

    } catch (error) {
        throw erro
    }
}

// ? Outra forma de resolver sem utilizar async & await (sendo normal ter esses casos também)

// function createAndSaveFile(listWords) {
//     const newFile = `${address}/result.txt`
//     const textWords = JSON.stringify(listWords)

//     fs.promises.writeFile(newFile, textWords)
//     .then(() => {
// ? processamento feito com o resultado da promessa
//         console.log("\n- File created");
//     })
//     .catch((erro) => {
//         throw erro
//     })
//     .finally(() => console.log("\n- Operation finished"))
// }
