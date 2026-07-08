function handleErros(err) {
    if(err.code === 'ENOENT'){
        throw new Error('File not found')
    } else {
        return 'Application error'
    }
}

module.exports = handleErros
