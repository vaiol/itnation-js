const fs = require('fs')

fs.writeFile('./test.txt', 'Hello ITNATION', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('writeEnd', err, data)

    console.log('readStart')
    fs.readFile('./test.txt', 'utf-8', (err, data) => {
        console.log('readEnd', data)
        fs.writeFile('./test2.txt', data + '1', (err, data) => {
            console.log('write2end')
        })
    })
})

const myWriteFile = (path, data) => {
    return new Promise((resolve, reject) => {
        fs.writeFile(path, data, (err, data) => {
            if (err) {
                reject(err)
            }
            resolve(data)
        })
    })
}

const bootstrap = async () => {
    console.log('writeStart')
    await myWriteFile('./test.txt', 'Hello ITNATION')
    console.log('writeEnd')
}

bootstrap()
