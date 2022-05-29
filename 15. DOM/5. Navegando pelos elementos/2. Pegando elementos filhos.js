// Navegando pelos elementos filhos, em formato de NodeList

//.childNodes (retorna NodeList)
//.children(retorna HTMLCollection)
const el = document.querySelector('body')

//.childNodes (retorna um NodeList)
//Mostrará [text,header,text,script], pois cada espaço entre os elementos, mesmo um pulo de linha, sera considerado um "text"
console.log(el.childNodes);

//.children (retorna um HTMLCollection) / Elimina os espaços, resulta apenas nos elementos [header, script]
console.log(el.children);

// Primeiro filho considerando espaço vazio // text
console.log(el.firstChild); // text

// Primeiro filho considerando apenas elementos //
console.log(el.firstElementChild); // <header>

// Último filho considerando espaço vazio, mas pega o elemento
console.log(el.lastChild); // <script>

// Último filho considerando apenas elementos
console.log(el.lastElementChild); // <script>