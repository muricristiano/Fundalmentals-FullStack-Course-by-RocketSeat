// Manipulando Arrays

// Contar elementos de um array
console.log([
    "a", 
    {type: "array"}, 
    function() {return "alo"},
][1].type)

/*  

[0] - Mostra o elemento na posição 0
[1].type - Mostra o tipo do elemento 1
[2]() - Executa a função do elemento 2

*/


// Quantos elementos tem no array?
console.log(['a','b','c'].length)