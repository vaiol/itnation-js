console.log('start')

const interval = setInterval(function() {
    console.log('interval')
}, 1000)

setTimeout(function() {
    clearInterval(interval)
    console.log('timeout')
}, 3000)

console.log('end')