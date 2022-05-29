// Manipulando erros

// Função extremamente importante para continuar a execução do código independente de erros, podendo retornar informações dos erros.

/* 
     try - tentaremos executar um código/funções dentro do bloco try{}

    throw - se algo falhar dentro da function que está dentro do 
    try{function{...throw}}, jogamos informações para fora da função

    catch - pegaremos a informação do erro fora da função e trabalharemos algo com ela 


    try{
        function{throw}  // throw sai da function retornando dados
    } catch(errorX) {     // catch pegou os dados e definiu como "x"
        console.log('Erro: ' + errorX) // exemplo de uso dos dados
    }

*/

function sayMyName(name = ''){
    if (name === ''){
        throw 'Nome é obrigatório'
    }
    console.log('Depois do erro');
}

try {
    sayMyName('')
}catch(errorX){
    console.log('Atenção: '+errorX);
}

console.log('Aqui está a mensagem comprovando a continuação da execução do código mesmo após o erro');