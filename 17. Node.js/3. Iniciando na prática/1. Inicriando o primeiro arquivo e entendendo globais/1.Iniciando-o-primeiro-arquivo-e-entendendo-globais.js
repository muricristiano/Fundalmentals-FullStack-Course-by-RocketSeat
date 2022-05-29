// É possível executar um arquivo JS pelo terminal

// Basta abrir o terminal na pasta do arquivo.js e executar "node nome-do-arquivo"

// o console é global
global.console.log('Alguma mensagem');

console.log(global);


// utilizando globals (buscar diretório do arquivo atual sendo executado)
console.log(__dirname);

// utilizando globals (Caminho completo + nome do arquivo)
console.log(__filename);