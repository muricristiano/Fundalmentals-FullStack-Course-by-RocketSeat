// Objeto process, mostra funções e propriedades do processo durante a execução desse simples console.log
console.log(process);

// process.argv
// array com todos os processos sendo utilizados na execução: 
// "...nodejs\\node.exe" 
// e nesse próprio arquivo:
// "...\\process.js"
console.log(process.argv); // comente o outro



// também é possível ao rodar no terminal o comando: node require murilo ribeiro

/* 
    resultado: 
    
    array [
    ...\node.exe 
    ...\require.js
    murilo
    ribeiro
*/


// Possivel executar esse código aqui para exemplificar a utilização dos processos pela posição de cada processo no array:
console.log('seu nome é ' + process.argv[2] +' '+ process.argv[3]);
// TERMINAL> node require Murilo Cristiano
// RESULADO> seu nome é Murilo Cristiano


// Podemos organizar melhor atribuindo os processos a objetos
const firstName = process.argv[2];
const lastName = process.argv[3];
console.log(`Seu nome é ${firstName} ${lastName}`);



