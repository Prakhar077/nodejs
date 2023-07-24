const pro = require('process');
pro.on('beforeExit', (code) => {
    console.log('Before Exit : ', code);
})
pro.on('exit', (code) => {
    console.log('Exited : ', code);
})
console.log('Program is Running...');