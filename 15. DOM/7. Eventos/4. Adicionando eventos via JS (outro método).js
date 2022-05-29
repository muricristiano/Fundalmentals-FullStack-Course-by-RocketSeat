// Outro método de executar eventos via JS

const h1 = document.querySelector('h1')



h1.onclick = print //NÃO RECOMENDADO, ele sobreescreverá qualquer criação de evento anterior

h1.onclick = print2 // Esse está sobreesvrenedo o anterior

// Pelo .addEventListener, poderiamos criar 2 separados e ele executaria os 2 prints

h1.addEventListener('click', printAddEventListener1)
h1.addEventListener('click', printAddEventListener2)



function print() {
    console.log('console log print 1!');
}

function print2() {
    console.log('Substituiu o onclick direto anterior');
}


//                                COMPARAÇÃO do melhor utilizado: addEventListener
function printAddEventListener1(){
    console.log('print addEventListener1, não substituído');
}

function printAddEventListener2(){
    console.log('print addEventListener2, não substituiu o primeiro');
}