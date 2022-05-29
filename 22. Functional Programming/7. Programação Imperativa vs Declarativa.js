/* 
        Programação Imperativa vs Declarativa

        Objetivo de exemplo: Função que eleva o número ao quadrado
*/



/* 
        Programação Imperativa (Faça da seguinte forma)

        - O código é pensado e gerado em sequência
        - O código é pensado como um passo-a-passo, como uma receita de bolo
        - Uma coisa depende da outra
        - O estado de um dado é alterado constantemente causando mutações na variáveis
        - Orientação a Objetos é um tipo de paradigma imperativo
*/
let number = 2

function square() {
    return number * number
}

number = number()


/* 
        Programação Declarativa (O que fazer, e não como fazer)

        - O código é gerado para fazer algo, não importa como
        - O que fazer e não como fazer
        - Não há necessidade de um passo a passo no código
        - Programação funcional é um tipo de paradigma declarativo
*/
const square = n => n * n


