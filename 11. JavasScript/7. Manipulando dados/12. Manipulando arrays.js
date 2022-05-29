let myArray = ["camiseta", "boné", "bermuda"]
// array inicial
console.log("Array inicial");
console.log(myArray);

// adicionar item no fim
myArray.push("calça");
console.log("adicionar item no fim");
console.log(myArray);

// adicionar no começo
myArray.unshift("camisa de verão")
console.log("adicionar no começo");
console.log(myArray);

// remover do fim
myArray.pop();
console.log("remover do fim");
console.log(myArray);

// remover do começo
myArray.shift();
console.log("remover do começo");
console.log(myArray);

// pegar somente alguns elementos do array
console.log("pegar somente alguns elementos do array (sem modificar)");
//                ATENÇÃO

//   0 é a posição antes de iniciar o array (PARA ESSA FUNÇÃO SLICE)
/* 
    0       1        2        3
    -    camiseta   boné    bermuda

0 é necessário existir nessa função para dar a opção de não cortar o primeiro elemento.

o primeiro e segundo parâmetros são diferentes no sentido de ("cortar fora", "incluir até") por conta do motivo acima descrito sobre o 0.

slice( , )  // Função possui 2 parâmetros

PRIMEIRO PARÂMETRO - Define a partir de qual posição (e tudo que antecede) irá cortar FORA

SEGUNDO PARÂMETRO - Define até qual posição vai INCLUIR o corte
*/ 
console.log(myArray.slice(0,2));
console.log(myArray);


// remover 1 ou mais itens em qualquer posição do array
// Posição normal do array [0, 1, 2]
// Escolhe a posição que irá remover / Por quantas casas irá remover
// splice (1,1) = remove a posição 1, e somente ela
// splice (13,3) = remove a posição 13, 14 e 15
myArray.splice(1, 1)
console.log("remover 1 ou mais itens em qualquer posição do array");
console.log(myArray);


// descobrir qual é a posição de um elemento no array
console.log("descobrir qual é a posição de um elemento no array");
console.log(myArray.indexOf('bermuda')); //retorna a posição
// se não encontrar retorna -1.
console.log(myArray);

// Localizar e remover um elemento
// 1. Descobrir o Index do elemento com indexOf
// 2. Atribuir o valor do Index descoberto a uma variável
// 3. Utilizar a variável com o número do Index do elemento para remover com a função splice

console.log("Localizar e remover um elemento");
let deletingElement = myArray.indexOf("camiseta")
myArray.splice(deletingElement,1)
console.log(myArray);

// Aqui abaixo criei uma função para apenas fazer a call, escolher o que remover e dizer qual o array, fazendo o retorno do array sem o elemento

// function deleteFromArray(element,array){
//     deletingElement = array.indexOf(element)
//     // faltou o fallback caso não encontre o elemento
//     array.splice(deletingElement,1)
//     return array
// }
// console.log(deleteFromArray("asdsadasd", myArray))

