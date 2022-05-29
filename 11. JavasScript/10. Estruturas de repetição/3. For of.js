// for ... of 

// FOR PARA STRING, ARRAY, NUMBER.

/* 
    É um for que percorre:
        Strings >>> caractere por caractere
        Arrays >>> elemento por elemento
        Number >>> OBS: Usando Typecasting, caractere por caractere
 */
let name = 'Murilo'
let peoples = ['Gui', 'Angela', 'Marco']
let number = 13579

// for/of para String
// for ("X" of "Y")
for (char of name) {
    console.log(char);
}

// for/of para Array
// for (x "of" Y)
for (person of peoples){
    console.log(person);
}

// for/of para Number (Typecasting)
for (x of String(number)){
    console.log(x);
}

