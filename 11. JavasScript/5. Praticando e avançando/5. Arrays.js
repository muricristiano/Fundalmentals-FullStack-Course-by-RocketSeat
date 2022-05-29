// Array

// Posição começa pelo [0]

const animals = [
    'Lion',
    'Monkey',
    {
        name: 'Cat',
        age: 3,
        renovar: function() {
            animals[2].age = 2;
        }
    }
]

console.log(animals); // Mostrará a lista

// acessar valores dentro do array através da posições
console.log(animals[0]); // Lion

// acessar valores de propriedades dentro de objetos do array
console.log(animals[2].age) // Idade do age do objeto que está na posição 2

animals[2].renovar()

console.log(animals[2].age); // idade do gato após executar sua função renovar que altera sua idade pra 2
