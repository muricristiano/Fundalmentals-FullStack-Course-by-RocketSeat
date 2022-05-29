/* 
    Seletor de TODOS os elementos
    através do seletor estilo CSS

    .class
    #id
    h1
    []

    Importante!
    > CRIA UMA NODELIST (Coleção de nós)
        - Possui funcionalidades (Diferenças semelhantes com String de Array)

    diferente do getElementsByClass/TagName, estes retornam um HTML collection
*/

// querySelectorAll()
const elements = document.querySelectorAll('section')
// console.log(elements);


elements.forEach(eleX => console.log(eleX));