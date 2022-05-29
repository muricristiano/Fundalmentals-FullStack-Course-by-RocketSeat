/* O nome dos parâmetros das funções são sempre isoladas, não serão o mesmo números que são criados foras delas, mesmo que tenham o mesmo nome exato, é uma outra instância */
const sum = function(number1, number2){
    // sempre definir var/let/const dentro das functions, para ela se limitar dentro da function
    let total = number1 + number2
    return total; // Volta um dado, string, resultado, para o exato lugar onde foi chamado, é como se o código que está lá ficasse assim: console.log(25); [o sum(10,15) se transformou em um resultado]
    // Muito melhor usar return
    // Se não é usado, retornará 'undefined' dependendo de como é executada a função
}



// Aqui estamos fazendo a call da function enviando os arguments
console.log(sum(10,15));