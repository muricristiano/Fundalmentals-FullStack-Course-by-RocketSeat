/* 
    Funções Independentes

    - Deverá ter ao menos 1 argumento
        - Recebe um dado e trabalha com ele, não altera nada de fora, e no final retorna um dado.
    - Deverá retornar algo
    - Nada que acontecer lá dentro afeta o mundo externo
        - Dados imutáveis
        - Não guardar estado
    - Não faremos uso de loops (for,while), mas se houver necessidade de tal, usaremos recursão (a função chama ela mesma)
*/

const random = (number, Math) => Math.floor(Math.random() * number)

// recursive (se precisar de for/while)
// Por exemplo: Encontre o fatorial de um número
const factorial = x => {

    // if number is 0
    if (x === 0) {
        return 1;
    }

    return x * factorial(x - 1)
}