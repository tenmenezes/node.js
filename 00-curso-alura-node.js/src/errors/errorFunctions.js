export default function handleErrors(err) {
    if (err.code === 'ENOENT') {
        return 'File not found'
    }

    return 'Application error'
}
