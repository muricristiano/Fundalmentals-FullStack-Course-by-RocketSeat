// Manipulando conteúdo

// textContent
const element = document.querySelector('h1')

// alterando o texto mostrado na página de Meu Blog para Hello
element.textContent = 'Hello'

// agora, concatenando/somando string ao anterior redefinido
element.textContent += ', my name is Murilo'

//Resultado: Hello, my name is Murilo
console.log(element.textContent);