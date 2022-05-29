/* 
    Stateless
    - Não guarda estado
    - A função só conhece dados entregues a ela
    - A resposta não poderá variar
*/

// Exemplo


/* 
// Exemplo 1:
let number = 2

//stateful function
function square() {
    return number * number
}

number = square()

// Fim do exemplo 1
*/



// Exemplo 2:

// stateless function
const square = n => n * n

// Fim do exemplo 2



// Apenas testando
console.log(square(5));