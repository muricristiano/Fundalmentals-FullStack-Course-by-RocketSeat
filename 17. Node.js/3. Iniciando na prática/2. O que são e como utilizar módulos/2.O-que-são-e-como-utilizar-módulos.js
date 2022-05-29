// Função require() é a maneira de utilizar módulos NATIVOS do Node.JS, e até módulos que podemos criar futuramente e instalar no node (dessa forma o acesso deve mencionar o diretório)

// Função Require em um Módulo do node 'path'
console.log(require('path')); 
//Esse módulo é um "objeto" e aqui estamos retornando as propriedades/funções deste path


// Vamos atribuir a um objeto JS
const path = require('path');

// Aqui, pelo módulo path, estamos utilizando sua função basename para retornar apenas o nome do arqivo, e estamos passando por parâmetro o __filename que traz diretório + nome do arquivo
console.log(path.basename(__filename));