// clearTimeout cancela um Timeout


// Setando um timeOut e uma função
const timeOut = 3000

// criando função para ser executada
const functionToExecute = () => console.log("Done!");

// let definida com uma Função do Node, executa uma função (1º parametro), depois de um tempo de (2º parametro), em milissegundos
let timer = setTimeout(functionToExecute, timeOut)

// Cancelando o setTimeout
clearTimeout(timer)

console.log(
`TimerOut foi cancelado antes desta mensagem
A mensagem "Done!" Não será exibida.
`);