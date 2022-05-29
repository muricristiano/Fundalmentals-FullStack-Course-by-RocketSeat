const { EventEmitter } = require('stream');
const ev = new EventEmitter()

ev.emit('saySomething')