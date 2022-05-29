/* 
    VARIÁVEIS
    var (aula anterior)
    let
    const

    let / const
        - Funcionam na ordem de linha de código (sem pré criação/sem hoisting)
        - Eles devem ser utilizados/chamados apenas após criação e atribuição

    LET
    - local, sobe hierarquias de scope
    - Pode se criar um novo, em um outro escopo, será considerado um const diferente.

    CONST 
    - Igual ao let porém - INALTERÁVEL! const não pode atribuir um novo valor
    - O valor é obrigatóriamente definido na declaração
    "const x = 1" 
    (apenas a declaração não é aceito, por exemplo: const x)
         - local, sobe hierarquias de scope
         - Pode se criar um novo, em um outro escopo, será considerado um const diferente.
*/

// CASE 1 ERROR
console.log(y); // Resultará em um erro, "pois Y não existe"

{
    let y = 0;
}

console.log(y);


// CASE 2 ERROR
{
    console.log(y); // Resultará em um erro, pois ele sabe que existe por estar no mesmo Scope, porém, ainda não foi inicializado
    let y = 0;
}
console.log(y);


// CASE 3 ERROR
{
    let y = 0
}
console.log(y); // Resultará em erro pois Y não existe, o let foi criado dentro, só valido somente para o scope do qual se encontra, se ele tivesse sido criado fora, e alterado dentro valeria, e valeria a alteração.

// CASE 4 SUCCESS
{
    let y = 10;
    console.log(y);
}

// CASE 5 SUCCESS
let y = 10;
{
    y = 5;
}
console.log(y); // válido pois foi criado fora, resultará em 5, pois alterou o valor buscando a var de fora, buscou pela hierarquia de scope.

let y = 1;
{
    let y = 2;
    console.log(y); //Resultará em 2, pois buscou o Y e já encontrou aqui
} // aqui esse Y intero acabou, voltando a assumir o Y anterior
console.log(y); /* Resultará em 1, pois é o Y que existe dentro desse escopo exemplo. O filho criado acima é independente, estava num escopo abaixo que, aliás, já encerrou. */

/* 
    let irá buscar um valor no escopo pai, subindo a hierarquia, até encontrar
*/

// CASE LET
let y = 0;
{
    {
        console.log(y); // resultará em 0; tudo certo.
    }
}

// CASE CONST NÃO PODE SER ALTERADO O VALOR;
const k = 0;
{
    {
        k = 0 // Resultará em erro, cosnt não pode ser alterado!
        console.log(k);
    }
}

