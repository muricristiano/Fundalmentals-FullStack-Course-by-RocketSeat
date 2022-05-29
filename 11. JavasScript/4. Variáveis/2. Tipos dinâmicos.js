/*
    O JS é dinâmico
    - possui a linguagem fracamente typada (No JAVA, é hardly)
    - "JavaScript is weakly typed."

    - pode-se declarar uma variável sem definir o type
    - o sistema aceitará como 'undefined'
    - atribuir um valor posteriormente o definirá, e alterará por si próprio caso um valor novo seja diferente do atual.

*/

let clima

console.log(clima)
console.log(typeof clima);

clima = true;

console.log(clima);
console.log(typeof clima);

clima = 20

console.log(clima);
console.log(typeof clima);

clima = "Alô"

console.log(clima);
console.log(typeof clima);

/* Todos os clg acima, demonstrarão todos os valores que a var clima possuiu em cada reatribuição */

/* Abaixo do valor, uma forma de ver o type da variável a cada momento */