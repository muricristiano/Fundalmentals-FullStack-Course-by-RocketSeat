// Importando do module 'util' nativo do node.js (puxando a função inherits, utilizaremos para fazer herança do event emitter para dentro de um objeto)
const { inherits } = require('util')

// herdar as funções do EventEmitter para a função Character abaixo (função construtora)
const { EventEmitter } = require('events')

// Criando 
function Character(name){
    this.name = name
}

//inherits é a função importada do 'util' (core node) 
// inherits importa as funcionalidades de um objeto para outro
// aqui está importando as funcionalidades do EventEmitter para o objeto Character que estamos criando
inherits(Character, EventEmitter)
//1º parametro: objeto que vai receber atributos/funções
//2º parametro: objeto que vai exportar atributos/funções

// aqui criamos um character, com o nome chapolin, e passando o parâmetro que será usado como seu nome no constructor
const chapolin = new Character('Chapolin')

//aqui estamos definindo uma função de ".on" (ouvir e permanecer ativo ouvindo) toda vez que ouver um emit ('help', então executará a função de enviar uma mensagem, dizendo um dos atributos desse mesmo objeto (nesse caso: .name), como seu nome.)
chapolin.on('help', () => console.log(`Eu! o ${chapolin.name} colorado!`))


//aqui criamos só para ilustar uma mensagem antes de executar o emit que chamará o ".on" acima
console.log('Oh! E agora, quem poderá me defender?');

// chamando o .on do objeto chapolin
chapolin.emit('help')