/* 
    Scope
        - determina a visibilidade de alguma variável no JS

    Block statement

    {
        //aqui dentro é um bloco onde podemos escrever qualquer código
    } // aqui fechamos o bloco

        - o bloco 




    VARIÁVEIS
        var
        let (próxima aula)
        const (próxima aula)


    VAR
        - global (hoisting: JS faz primariamente a declaração antes da execução do código, como se jogasse a criação da var lá em cima no código, mesmo que sejam undefined). Em uma let por exemplo, qualquer utilização de um let antes de sua declaração resultará em erro.

        - local
*/

// var
console.log(x); /* Existe, mas não foi definido ainda */

{
    var x = 0
}

console.log(x); /* Aqui o X já foi definido, dentro de um escopo, mas é valido pois é var global */


