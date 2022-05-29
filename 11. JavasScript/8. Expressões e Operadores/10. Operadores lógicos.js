/* Operadores lógicos (logical operators) */

// 2 valores booleanos, quando verificamos, resultarão em true | false

// exemplo, tenho pao, não tenho queijo
let pao = true
let queijo = false

// Tenho ambos? "&&"
console.log(pao && queijo); //false

// Tenho algum deles? "||"
console.log(pao || queijo); //true




// !NOT - Inverte a lógica booleana de algum dos parâmetros
// "!"  - A exclamação é colocada na frente do parâmetro

// Por exemplo: Tenho pão e (&&) não tenho queijo? "&&"
console.log(pao && !queijo); // true


// queijo = false (tenho queijo? errado = false)
// !queijo = true (não tenho queijo? certo = true)