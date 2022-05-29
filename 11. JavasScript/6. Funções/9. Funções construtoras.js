/* 
    Function() constructor
    - criação de objeto

    Function() constructor

    - this 
        - (Define objeto)
        - "this.name = argument", é como se fosse: "esseObjetoSendoCriado.propriedadeSendoCriada receberá como valor o argumentoRecebidoPelaCallDaFunction, " (no exemplo abaixo: this.objectName = xName
            (Criou o objeto Person, que tem como propriedade o "objectName" que será igual "Murilo")

    
    Call function
        - expressão new
        - define-se uma variável primeiro, e ela recebe um "new" e chama a função construtora com as caracteristicas acima.
        ObjectCreatorFunction(parameter1, parameter2, etc...)

        Melhor exemplificado:
        const pessoaA = new Person(nomeA, idadeA, pesoA)

        a função:
        function Person(name, age, weight)
        this.nome = name
        this.idade = age
        this.peso = weight


        TIPS
            Usar o primeiro nome Maísculo na função construtora, pois em geral, utiliza-se Maísculo para objetos no primeiro caractere
        
*/

function Person(name, age, weight) {
    this.Nome = name   
    this.Idade = age
    this.Peso = weight
    this.andar = function (){
        return "Andando"
    }
}

const muri = new Person("Murilo", 29, 83.5)
const gui = new Person("Guilherme", 17, 50)

console.log(muri, gui);
console.log(muri.andar())

