// Manipulando conteúdo
// Manipula o texto e adiciona HTML

// innerHtml
const element = document.querySelector('h1')

// Altera o texto e adiciona HTML (Usar os outros caso seja o objetivo utilizar elementos que o HTML utiliza pra essa selection)
element.innerHTML = 'Changed title <br><small>created a new line with the<br> br tag</small>'