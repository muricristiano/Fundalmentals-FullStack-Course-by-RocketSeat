const { EventEmitter } = require('stream');

// Criando um eventemitter - ouve também
const ev = new EventEmitter()

// Objeto eventEmitter com a função .on para ouvir emit's
ev.on('saySomething', (argumentB) => {
    console.log('Mensagem dentro da função, ',argumentB);
})

ev.emit('saySomething', "argumento")
ev.emit('saySomething', "argumento")