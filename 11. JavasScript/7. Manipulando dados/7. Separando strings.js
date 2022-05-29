// Manipulando Strings e Arrays

// Separe um texto que contém espaços, em um novo array onde cada texto é uma posição do array. Depois disso, transforme o array em um texto e onde eram espaços coloque "_".

let phrase = "Frase de Exemplo!"

// Função que separa a string, atribuindo a um array.
let myArray = phrase.split(" ") // <- escolhendo o " " espaço em branco para separar cada parte

console.log(myArray); // Verificando o array com cada palavra 'Frase', 'de', 'Exemplo!'

// Aqui criamos uma variável, onde ela recebe o array executando uma função que unirá todos os dados do array em uma string, o parametro ("_") passado são os caracteres que vão unir cada posição do array, poderia ser uma vírgula e espaço por exemplo.
let makeASnakeStringFromArray = myArray.join("_")

console.log(makeASnakeStringFromArray);