/* 
    Sistema de gastos familiar

Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    - receitas: []
    - despesas: []

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo positivo ou negativo, seguido do valor do saldo

*/

let Planilha = {
    receitas: [200, 500, 1000],
    despesas: [200, 500, 200]
}

function calcArrayFinances(gains, expenses){
    // Teste para validez dos dados de entrada
    if((gains == undefined) || (expenses == undefined)){
        return "ERRO! Insira 2 arrays válidos!"
    }

    let finalGains = 0;
    let finalExpenses = 0;
    let total = 0;

    for(x of gains){
        finalGains += x
    }

    for(x of expenses){
        finalExpenses += x
    }
    total = finalGains - finalExpenses

    if(total > 0){
        return `O total das finanças é positivo: R$ `+total        
    }else if(total < 0){
        return `O total das finanças é negativo: R$ `+total 
    }else if(total == 0){
        return `Seu saldo está zerado: `+total
    }
}

console.log(calcArrayFinances(Planilha.receitas, Planilha.despesas));