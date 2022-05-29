const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton']

// a indexação (index) começa pelo número 0
console.log(pilotos[0]); // Senna
console.log(pilotos[2]); // Schumacher

// tamanho do array
console.log(pilotos.length); // 4

// iterável (interativo com funções nativas) // for|of
for (let piloto of pilotos) {
    console.log(piloto); 
    /*  Senna
        Prost
        Schumacher
        Hamilton */
}

// Adicionar um elemento
pilotos.push('Alonso')
console.log(pilotos[4]);

// encontrar um elemento
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna);

// remover 1 ou mais itens em qualquer posição do array
// Posição normal do array [0, 1, 2]
// Escolhe a posição que irá remover / Por quantas casas irá remover
// splice (1,1) = remove a posição 1, e somente ela
// splice (13,3) = remove a posição 13, 14 e 15
pilotos.splice(1,1) // Verificar regras 
for (let piloto of pilotos) {
    console.log(piloto);
}

/* 
    Senna
    Schumacher
    Hamilton
    Alonso
*/