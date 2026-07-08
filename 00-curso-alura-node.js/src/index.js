const fs = require('fs')
const handleErrors = require('./errors/errorFunctions.js')

const path_file = process.argv
const link = path_file[2]

fs.readFile(link, 'utf-8', (err, text) => {
    try {    
        if (err) throw err
        countWords(text)
    } catch (err) {
        handleErrors(err)
    }
})

function clearWords(word) {
    return word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
}

function extractParagraphs(text) {
    return text.toLowerCase().split('\n')
}

function verifyDuplicateWords(text) {
    const listWords = text.split(' ')
    const result = {}

    listWords.forEach(word => {
        if (word.length >= 3) {
            const cleanWord = clearWords(word)
            result[cleanWord] = (result[cleanWord] || 0) + 1
        }
    })

    return result
}

function countWords(text) {
    const extrectedParagraph = extractParagraphs(text)

    const count = paragraphs.flatMap((paragraph) => {
        if (!paragraph) 
            return []

        return verifyDuplicateWords(paragraph)
    })

    console.log(count)
}
