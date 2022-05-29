// Transformar um número quebrado para possuir 2 casas decimais e trocar ponto por vírgula

let number = 123.9999999

//Duas casas decimais
console.log(number.toFixed(2));

//Trocar "." por "," vírgula + duas casas decimais
console.log(number.toFixed(2).replace(".", ",")) 

        // OBS! Trocar para vírgula transforma em uma string