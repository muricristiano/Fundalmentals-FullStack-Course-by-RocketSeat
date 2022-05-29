/* Aula 2 */
const questions = [
    "O que aprendi hoje?",
    "O que me deixou aborrecido? O que eu poderia fazer para melhorar em relação ao aborrecimento?",
    "O que me deixou feliz hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = (index = 0) => {
    process.stdout.write("\n" + questions[index] + " > ")
}

ask()

/* Aula 3 */

// Fica "ouvindo", podendo receber dados para executar funções, só sairá e terminará a execução do processo com saída ou com o comando exit abaixo

/* 
    process.stdin.on('data', data => {
    process.stdout.write( data.toString().trim() + '\n')
    process.exit()
})
 *\ Comentado para a aula 4

/* Aula 4 */

/* Array de respostas */
const awnsers = []

/* Novo stdin.on da aula 4, para fazer o loop e registrar respostas */
process.stdin.on("data", data => {
        awnsers.push(data.toString().trim())
        if (awnsers.length < questions.length){
            ask(awnsers.length)
        }else{
            console.log(awnsers)
            process.exit()
        }
})


/* Aula 5 */

/* Event listener do processo, quanto houver uma saída do processo exit() */
process.on('exit', () => {
    console.log(`
    Perguntas finalizadas!

    O que você aprendeu hoje foi:
    ${awnsers[0]}

    Se algo te desequilibrou:
    ${awnsers[1]}

    O que te deixou feliz foi:
    ${awnsers[2]}

    Você ajudou ${awnsers[3]} pessoas hoje!

    Volte amanhã para novas reflexões
    
    `);
})