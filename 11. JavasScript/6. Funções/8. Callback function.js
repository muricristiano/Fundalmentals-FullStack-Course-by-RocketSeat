// callback function

function sayMyName(x){
    console.log('Antes de executar a função que está dentro da função'); 

    x()

    console.log('Depois de executar a função que está dentro da função'); 

}

sayMyName(
    () => {
        console.log('Estou em uma callback');
    }
)

// Sim, é possível enviar uma função como argumento para outra função e ser executada lá
