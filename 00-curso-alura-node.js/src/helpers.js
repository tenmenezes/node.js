// ? Helper functions é um arquivo de funções que não estão ligadas a lógica principal do sistema

function filterOcurrence(paragraph) {
    return Object.keys(paragraph).filter(key => paragraph[key] > 1)
}

function assemblesOutputFile(listWords) {
    let finalText = ''
    listWords.forEach((paragraph, i) => {
        const duplicates = filterOcurrence(paragraph).join(', ') // ? Join transforma array de objetos em strings
        finalText += `Palavras duplicadas no parágrafo ${
            i + 1
        }: ${duplicates} \n`
    });

    return finalText
}

export {
    assemblesOutputFile
}
