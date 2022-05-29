/* 
    Métodos funcionais:

    -enqueue(): Adicionar um elemento ao final da fila
    -dequeue(): Remover um elemento do final da fila
*/

// Passo 1: Modelando
class Queue {
    constructor() {
        this.data = []
    }

    enqueue(item) {
        this.data.push(item)
        console.log(`${item} chegou na fila!`);
    }

    dequeue() {
        const item = this.data.shift()
    }
}

// Passo 2: Utilizando
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('João')
fila.enqueue('Ariel')
fila.dequeue
fila.dequeue
fila.dequeue