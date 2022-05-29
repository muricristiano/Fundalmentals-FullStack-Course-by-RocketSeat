// function expression
// function anonymous (Diferente modo de declarar uma função
/*   
    const sum = function (){
} 

em vez de:

    function sum(){

    }
*/

// as funções podem receber parâmetros pelo "()", que podem ser utilizados para executar algum tipo de função dentro da função. Como no exemplo abaixo: Os parâmetros tem declaração própria, que serão identificados dessa forma dentro da função, mas ao chamar a função passando os parâmetros, por exemplo nessa função abaixo, estaremos passando números para a função somar
const sum = function(number1, number2){
    console.log(number1+number2); 
}

// Aqui estamos fazendo a call da function enviando os arguments
sum(10,15)