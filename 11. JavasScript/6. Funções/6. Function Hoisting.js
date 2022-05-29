// function hosting
sayMyName();


/* Mesmo criando no final do código, ao chamar a função, na primeira linha possível, a função funcionará perfeitamente com toda a sua execução interna */
function sayMyName() {
    console.log('Hoisting está funcionando? se essa mensagem aparece então está!')
}

/* Não é válido para variáveis que recebem uma função

    var sayMyName = function(){
        etc...
    }

    // Isso não funcionará! mesmo sendo var, ele apenas irá declarar o hoisting, mas não irá definir como função pelo hoisting

*/