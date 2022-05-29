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