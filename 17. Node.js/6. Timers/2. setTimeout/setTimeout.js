// setTimeout roda uma função depois de X milissegundos
const timeOut = 3000
const finished = () => console.log("Done!");

// Função do Node, executa uma função (1º parametro), depois de um tempo de (2º parametro)
setTimeout(finished, timeOut)
console.log("Assíncronismo em ação! \n Essa mensagem mostra que podemos enviar processos e receber simultaneamente, nesse console.log o setTimeout já está rodando \n Mensagem aparecerá em 3 segundos:");