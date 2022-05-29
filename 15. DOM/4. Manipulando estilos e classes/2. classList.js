// Alterar estilos

// classList
const element = document.querySelector('body')

//adicionamos classe ao elemento, o elemento será estilizado pela última seleção no CSS (.green está abaixo do .red)
element.classList.add('red', 'green')

// Aqui mostra as 2 classes, o body fica green e o title fica vermelho
console.log(element.classList);

// Aqui removemos apenas uma classe e a outra permanece (removendo o title red)
element.classList.remove('red')

//Aqui mostra que somente o class '.green' está presente, e na página, somente há o background verde e o titulo voltou a ser preto pois a class "red" foi removida na linha anterior
console.log(element.classList);




// TOOGLE 
// Essa função adiciona/remove a classe de um objeto(elemento)
// Caso utilizada e a classe NÃO EXISTIR, ela será ADICIONADA.
// Caso utilizada e a classe EXISTIR, ela será REMOVIDA.
// Aqui nesse caso, ela já foi removida anteriormente, então será adicionada
element.classList.toggle('red')

// Aqui demonstra como as classes green e red estão presentes no classList do objeto
console.log(element.classList);