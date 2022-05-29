// Eventos de teclado no JS
const input = document.querySelector('input')

// função que será executada toda vez que "onkeydown", qualquer tecla seja pressionada
input.onkeydown = function() {
    console.log('Tecla pressionada');
}

// temos também, onkeypess, onkeyup (ao soltar tecla), etc.