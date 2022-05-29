// adicionando eventos via JS

const h1 = document.querySelector('h1')

// addEventListener, 1º parâmetro define qual evento(gatilho), 2º parâmetro define execução
h1.addEventListener('click', print) // se chamar como "print()" ela será executada ao criar esse elemento, e só queremos armazenar a função

// Resultado: Ao clicar no h1, será executado o console.log do print()

function print(){
    console.log('console log print!');
}
