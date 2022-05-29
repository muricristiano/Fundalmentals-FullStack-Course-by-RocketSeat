// Estrutura de repetição

// for 

// ( declaração de início de execução | condição de continuação | execução após finalizar o loop )

/* 

    Exemplo de ordem de execução:
    for ( 1 | 2 > 5 > 8 > 11(finaliza aqui) | 4 > 7 > 10 ) {
        3 > 6 > 9
    }

    - BREAK - finaliza a execução do for{}

    - CONTINUE - finaliza a execução do LOOP atual E pula para o próximo.

 */

for(let i = 1; i <= 10; i++){
    console.log('Crescente: Esse é o loop '+i);
}


// Exemplo decrescente
for (let i = 10; i > 0; i--) {
    console.log('Decrescente: Esse é o loop '+i);
}

// Exemplo com "continue"
for (let i = 1; i <= 10; i++ ) {
    if(i == 5){
        console.log('Dentro da condição que tem "continue" no 5, saindo para o próximo loop sem executar o resto do código');
        continue;
    }
    console.log("Esse loop é o i: "+i);
}


// Exemplo com "break" para situação específica
for (let i = 1; i <= 10; i++ ) {
    if(i == 5){
        console.log('Dentro do loop que com a condição do que possui "break". Esse é o loop '+i+', e esse "for" não continuará até o final 10');
        break;
    }
    console.log("Exemplo de for{} com break; Esse é o loop "+i);
}
