// CLASSES ABSTRATAS SERVEM PARA CRIAR ATRIBUTOS/FUNÇÕES EM COMUM, mas nunca serão só instanciadas por elas, elas precisam de uma definição mais, ou seja, subclasses.

// Por exemplo, quero manipular objetos carros pela marca, modelo, etc. E nunca deixar ser criado um carro que não tenha essas definições, então crio ela abstrata, assim não é possível criar "carro", apenas "gol", "celta", por exemplo, que herdam todos os atributos e funções da superclasse (abstrata)

// definir
class Parafuso { // Superclasse - Abstrata
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instanciada')
    }
    get tipo() {
        throw new Error('Método "get tipo()" precisa ser implementado')
    }
}

class Fenda extends Parafuso {
    constructor() { super () }

    get tipo() {
        return 'fenda'
    }
}

class Philips extends Parafuso {
    constructor() { super() }
    
    get tipo() {
        return 'philips'
    }
}

class Allen extends Parafuso {} // Nada implementado

// criar e usar
// new Parafuso() // Classe abstrata não pode ser instanciada
let fenda = new Fenda()
let philips = new Philips()
let allen = new Allen()

console.log(fenda.tipo);
console.log(philips.tipo);
console.log(allen.tipo); // "Método "get tipo()" precisa ser implementado