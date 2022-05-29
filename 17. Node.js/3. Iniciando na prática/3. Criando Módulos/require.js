// Criando a constante para receber o módulo (deve ser externo e independente pois se não o módulo irá incorporar todo um código desnecessário)
const myModule = require('./exports')

// Mostrando a mensagem que existe no módulo
console.log(myModule);