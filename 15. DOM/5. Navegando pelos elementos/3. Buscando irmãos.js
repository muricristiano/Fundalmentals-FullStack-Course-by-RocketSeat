// Navegando pelos elementos

// Selecionando irmãos dos elementos (próximo irmão / irmão anterior)

const el = document.querySelector('p')

// nextSibling - considera espaço vazio
console.log(el.nextSibling); // retorna #text

//nextElementSibling - considera apenas elementos
console.log(el.nextElementSibling); // retorna <section>

// previousSibling - considera espaço vazio
console.log(el.previousSibling); //retorna #text

// previousElementSibling - considera apenas elementos
console.log(el.previousElementSibling); // retorna <h1>