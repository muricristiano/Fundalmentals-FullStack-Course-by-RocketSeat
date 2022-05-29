// Criando e adicionando elementos

//createElement
const div = document.createElement('div');
div.innerText = 'Div message created by JS inserted as "body.append(div)"'

// Criando o objeto no JS que corresponde ao body do HTML (para usá-lo na próxima linha, esse body vai ser nossa referencia para posicionar nosso novo elemento div criado acima)
const body = document.querySelector('body')

// append - coloca o objeto 'div' (criado na linha 4), no fim de todos os elementos filhos do body
body.append(div)



// Agora vamos criar outro elemento para posicionar antes de todos os filhos do body.
const section = document.createElement('section')
section.innerText = 'Section message inserted as "body.prepend(section)"'

// prepend - coloca o objeto 'div' (criado na linha 4), no início antes de todos os elementos filhos do body
body.prepend(section)