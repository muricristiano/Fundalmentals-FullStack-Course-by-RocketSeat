/* 
    Transformar notas escolares

    Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

    > 90 = A
    80 - 89 = B
    70 - 79 = C
    60 - 69 = D
    < 60 = F

*/

function avaliationTransform(nota){
    let notaX
    console.log('Nota sendo avaliada: '+nota);
    if(nota == undefined){
        return 'Erro: você precisa digitar uma nota!'
    }else if(nota >= 90 && nota <= 100){
        notaX = 'A'
    }else if(nota >= 80 && nota < 90){
        notaX = 'B'
    }else if(nota >= 70 && nota < 80){
        notaX = 'C'
    }else if(nota >= 60 && nota < 70){
        notaX = 'D'
    }else if(nota < 60 && nota >= 0){
        notaX = 'F'
    }else{
        return 'Nota inválida, digita uma nota de 0 a 100'
    }
    return notaX
}


console.log(avaliationTransform(999))
console.log(avaliationTransform())
console.log(avaliationTransform(0))
console.log(avaliationTransform(50))
console.log(avaliationTransform(60))
console.log(avaliationTransform(70))
console.log(avaliationTransform(80))
console.log(avaliationTransform(90))
console.log(avaliationTransform(100))