const fs = require('fs');

console.log('WRITE')
fs.writeFile('test.txt', 'longText', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('WRITE CALLBACK')
    setImmediate(() => console.log('setImmediate'))
    setTimeout(() => console.log('setTimeout'), 0)
})

process.nextTick(() => {
    const startDate = Date.now()
    while (Date.now() < startDate + 1000) {
    }
    console.log('nextTick')
})

console.log('READ')
fs.readFile('test.txt', 'utf-8', (err, data) => {
    if (err) {
        console.error(err)
        return
    }
    console.log('READ CALLBACK')
})