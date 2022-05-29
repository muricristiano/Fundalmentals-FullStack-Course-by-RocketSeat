/* 
    Buscando e contando dados em arrays

    Baseado no Array de livros por categoria abaixo, faça os seguintes desafios
        - Contar o número de categorias e o número de livros em cada categoria
        - Contar o número de autores
        - Mostrar livros do autor Augusto Cury
        - Transformar a função acima em uma função que irá receber o nome do auto e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

// - Contar o número de categorias e o número de livros em cada categoria
console.log('Número de categorias: '+booksByCategory.length)
function numerosDeLivrosEmCadaCategoria(array){
    let livrosDeRiqueza = []
    let livrosDeInteligenciaEmocional = []

    for(book of array[0].books){
            livrosDeRiqueza.push(book.title)
    }

    for(objeto of array[1].books){
            livrosDeInteligenciaEmocional.push(book.title)
    }
    console.log('Numero de livros de riqueza: ', livrosDeRiqueza.length)

    console.log('Numero de livros de Inteligência Emocional: ',livrosDeInteligenciaEmocional.length);
}

// - Contar o número de autores
function contarAutores(array){
    let authorsArray = [];

    for(categories of array){
        for(names of categories.books){
            if(authorsArray.indexOf(names.author) == -1){
                authorsArray.push(names.author)
            }
        }
    }
    console.log('O Número de autores diferentes presentes em todos os livros é de: ' + authorsArray.length + ' sendo eles: ' + authorsArray);
}

// - Mostrar livros do autor Augusto Cury
function livrosAugustoCury(array){
    let livrosAugustoCury = []
    for(categories of array){
        for(book of categories.books){
            if(book.author == 'Augusto Cury'){
                livrosAugustoCury.push(book.title)
            }
        }
    }
    console.log('Os '+livrosAugustoCury.length+' livros de Augusto Cury são: '+livrosAugustoCury);
}

// - Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
function livrosPorAutor(autor, array){
    let livrosDoAutor = []
    for(categories of array){
        for(book of categories.books){
            if(book.author == autor){
                livrosDoAutor.push(book.title)
            }
        }
    }
    console.log('O(s) '+livrosDoAutor.length+' livro(s) do autor '+autor+' é(são): '+livrosDoAutor);
}

//CALL FUNCTIONS
numerosDeLivrosEmCadaCategoria(booksByCategory)
contarAutores(booksByCategory)
livrosAugustoCury(booksByCategory)
livrosPorAutor('T. Harv Eker', booksByCategory)

