// criação do elemento html via JS a ser inserido
const newElement = document.createElement('div')
// definição de texto para o elemento criado
newElement.innerText = 'NEW ELEMENT TEXT INSERTED IN THE MIDDLE'

// criação do objeto do elemento em que será inserido como filho
const father = document.querySelector('header')

// criação do objeto do elemento que será irmão precedente ao inserido
const brotherAfter = father.querySelector('h2')

// adicionando elementos em um lugar específico
father.insertBefore(newElement, brotherAfter)


//                          INSERTAFTER!!!

// Para simular um insertAfter, usamos o insertBefore passando a posição do "irmão" com a propriedade de próximo irmão
// ou seja: "Insira esse elemento, no irmão anterior do: próximo irmão desse cara aqui"
// father.insertBefore(newElement, brotherAfter.nextElementSibling)