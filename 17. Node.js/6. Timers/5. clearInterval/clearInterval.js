// clearInterval irá cancelar um setInterval registrado

// depois de X milissegundos
const timeOut = 1000

// function que será utilizada no setInterval
const checking = () => console.log("Tick!");


// Function interval que executará N vezes
let functionInterval = setInterval(checking, timeOut)


// Mesclando funções! : clearInterval dentro de um setTimeout de 3 segundos

//cleartInterval em um setTimeout(temporizador) para cancelar o setInterval em 3 segundos
setTimeout(() => clearInterval(functionInterval), 3003)