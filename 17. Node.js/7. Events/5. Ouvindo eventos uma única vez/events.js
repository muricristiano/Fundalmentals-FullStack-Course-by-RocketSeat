const { EventEmitter } = require('stream');

// criando um event emitter (que escuta também)
const ev = new EventEmitter()

// .once ouvirá apenas 1x e ignorará os outros emit's
ev.once('saySomething', (argumentB) => {
    console.log('Mensagem dentro da função, ',argumentB);
})

ev.emit('saySomething', "primeiro")
ev.emit('saySomething', "segundo")
ev.emit('saySomething', "terceiro")