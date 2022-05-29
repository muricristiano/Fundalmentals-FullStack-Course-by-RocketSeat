/* 
    First-class functions

        - Pode ser passada como variável.
        - Podem estar em qualquer lugar da nossa aplicação, inclusive como parâmetro de outras funções
        - A função poderá ser entendida como uma variável
*/

const sayMyName = () => console.log('Muri') // first class
const runFunction = fn => fn() // first class

runFunction(sayMyName)
runFunction(() => console.log('Discover'))

console.log(runFunction(Math.random))