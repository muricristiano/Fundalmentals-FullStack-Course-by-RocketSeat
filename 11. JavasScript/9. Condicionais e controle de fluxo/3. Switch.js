// switch (case: ' ' |>| break |>| default: )

// procura por algum dos casos, encontrando, para no break (se não tiver ele continuará), se não encontrar nada cairá no default

function switchFunction(expression){

    let message // criando uma var antes do switch e um return após apenas para mostrar a flexibilidade. (esse exemplo poderia ter sido exemplificado retornando direto nos cases, por exemplo)

    switch (expression){
        case 'a':
            message = 'a'
            break
        case 'b':
            message = 'b'
            break
        case 'c':
            message = 'c'
            break
        case 'd':
            message = 'd'
            break
        default:
            message = 'não encontrado'
            break
    }

    return message

}

console.log(switchFunction('a'));
console.log(switchFunction('c'));
console.log(switchFunction(1));