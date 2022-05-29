// setInterval irá rodar uma função N vezes

// depois de X milissegundos
const timeOut = 1000

// function que será utilizada no setInterval
const checking = () => console.log("Mensagem sendo executada a cada intervalo de tempo");

// setInterval irá rodar uma função N vezes
setInterval(checking, timeOut)