/* 
    Imutabilidade
        -Uma variável não vai variar
        -Se você precisar mudar uma variável, você não muda, você cria uma nova.
*/


// Exemplo de carrinho de compras
const cart = {
    quantity: 2,
    total: 200
}

// Má prática, ruim. 👎
cart.quantity = 3

// Boa prática ✌️
const newCart = {...cart, quantity: 3} // Aqui estamos declarando um novo objeto, e esse "...cart" com o nome de outro objeto, ele irá copiar tudo daquele objeto, e após a vírgula, tudo que será diferente ou novo atributo


/* 
        Exemplo em ReactJS
*/
cosnt [amount, setAmount] = useState(0)

// Má prática, ruim 👎
amount = 2 

// Boa prática ✌️
setAmount(2)