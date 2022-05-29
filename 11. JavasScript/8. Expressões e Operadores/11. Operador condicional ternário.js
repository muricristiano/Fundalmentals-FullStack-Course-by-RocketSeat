/* 
    Operador condicional (Ternário)

    dependendo da condição, nós receberemos/executamos valores diferentes

    condição ? action1 : action2
*/

let sol = true // "tem sol"
let nuvens = false // "não tem nuvens"

const diaDePraia = sol && !nuvens ? 'Pariu praia' : 'Não rola praia'
// tem sol e não tem nuvens? true = partiu praia / se não: não rola praia

console.log(diaDePraia);


