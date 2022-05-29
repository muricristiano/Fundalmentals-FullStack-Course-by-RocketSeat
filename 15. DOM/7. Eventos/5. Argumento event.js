// Argumento event
const input = document.querySelector('input')

// Argumento excelente para pesquisar e descobrir, propriedades, pois nesse console log, ao pressionar qualquer tecla no input, irá mostra no log o evento, podemos ver o prototype do evento, suas propriedades, etc.
input.onkeypress = function(event) {
    console.log(event);
}