 // function scope

  // Nesse exemplo existem 2 console.logs com resultados diferentes utilizando variaveis com o mesmo nome.

  // Uma é criada no escopo do código e a outra no parâmetro da função

 let subject = 'fora'

 function createThink(subject){
     subject = 'dentro da função'
     return subject
 }

 console.log(createThink(subject)) // dentro da função
 console.log(subject); // fora da função mesmo executando depois

 // são diferentes instâncias de escopo



