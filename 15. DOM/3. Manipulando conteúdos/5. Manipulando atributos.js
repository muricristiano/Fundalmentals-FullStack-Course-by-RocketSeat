// Manipulando elementos
// Adicionando atributos nos elementos HTML

//Selecionado o header pela tag
const elementHeader = document.querySelector('header')

//Adicionando/editando um atributo, primeiro parâmetro é o atributo, o segundo é o valor do atributo
elementHeader.setAttribute('id', 'headerID') // id="headerID"

//criando um novo objeto que seleciona o elemento inicial, pelo atributo que adicionamos na linha acima.
const headerID = document.querySelector('#headerID')


// Aqui resulta no item, que estamos selecionando pelo novo objeto que criamos que seleciona o H1 pelo novo ID que adicionamos
console.log('Aqui resulta no item, que estamos selecionando pelo novo objeto que criamos que seleciona o H1 pelo novo ID que adicionamos:');
console.log(headerID);

// É possível selecionar o atributo dentro do objeto que pegamos
console.log('É possível selecionar o atributo dentro do objeto que pegamos:');
console.log(headerID.getAttribute('id'));


// Aqui pegamos também os atributos que já eram pré definidos antes de editarmos, ele também pega os atributos padrão do html inicial
console.log('Aqui pegamos também os atributos que já eram pré definidos antes de editarmos, ele também pega os atributos padrão do html inicial');
console.log(headerID.getAttribute('class'));


// Removendo atributos
headerID.removeAttribute('id');
// Agora ao inspecionar o header, não temos mais o ID no header

//Alterando tudo o que há no header para novos, caso queira manter,  redigir a mesma classe para menter
headerID.setAttribute('class', 'TheHeaders RedHeaders')

//Removendo todas as classes
headerID.removeAttribute('class')
// Agora ao inspecionar o header, não temos mais a class no header

//Resultado: <header> limpo, apenas com o <h1> no meio.