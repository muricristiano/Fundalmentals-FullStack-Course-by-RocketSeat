
        // ESTRUTUAL           VS        ORIENTADO A OBJETOS

// ESTRUTURAL

let altura = 10
let largura = 55

function calcularArea(){
    return altura * largura
}

let area = calcularArea()

console.log(`Estrutural: ${area}`);




// ORIENTADO A OBJETOS - Classe é um molde de objeto, utiliza constructor.
class Poligono {
    constructor(altura, largura) {
        this.altura = altura
        this.largura = largura
    }

    get area() {
        return this.#calcularArea()
    }

    // ESSE HASHTAG: Tem a função de criar uma função que só funciona aqui dentro! Nesses objetos! Ele não será visível lá fora, apenas dentro dessa classe!
    #calcularArea() {
        return this.altura * this.largura
    }
}

// Criar o objeto
let poligonoA = new Poligono(10, 65)
console.log(`Orientado a objetos: ${poligonoA.area}`)