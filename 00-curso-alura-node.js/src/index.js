const fs = require('fs')

const path_file = process.argv
const link = path_file[2]

fs.readFile(link, 'utf-8', (err, text) => {
    verifyDuplicateWords(text)
})

function verifyDuplicateWords(text) {
    const listWords = text.split(' ')
    const result = {}


    listWords.forEach(word => {
        result[word] = (result[word] || 0) + 1
    })
    console.log(result)
}